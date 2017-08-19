var logger = require('../../util/logger.js')(module);
var SearchManager = require('./search_manager.js');

var ChatSearchManager = function() {
    SearchManager.call(this, 'chat', 'chat_info');
};

ChatSearchManager.prototype = Object.create(SearchManager.prototype);
ChatSearchManager.prototype.constructor = ChatSearchManager;


//override
ChatSearchManager.prototype.search = function(searchTerm, callback) { 
    var client = this.getClient();
    var index = this.getIndex();
    var type = this.getType();

    client.search({
        size: 10,
        //use for pagination, default 0
        from: 0,
        index: index,
        type: type,
        body: {
            query: {
                bool: {
                    should: [
                        {
                            range: {
                                num_members: {
                                    gt: 0
                                }
                            }
                        },
                        {
                            range: {
                                num_messages: {
                                    gt: 0
                                }
                            }

                        }
                    ],
                    must: [
                        {
                            match: {
                                chat_name: {
                                    query: searchTerm,
                                    minimum_should_match: 1,
                                    fuzziness: 2
                                }
                            }
                        }
                    ]
                }
            }
        }

    }, function(err, res) {
        logger.info(res, 'search results');
        var arr = res.hits.hits;

        callback(err, arr);
    });
};

//var csm = new ChatSearchManager();

//csm.createDocument({
    //id: 345345,
    //chat_name: "hjowdy",
    //num_messages: 0,
    //num_members: 1
//}, function(err, res) {
    //logger.info("hi");
//});
//csm.incrementField(345345, 'num_messages', 1, function(err, res) {
    //logger.info(res);
    //logger.info('increment');
//});
//csm.search('hjowdy', function(err, res) {
    //logger.info(res);
//});


module.exports = ChatSearchManager;