!function(){var n=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{};s.chatinfo=n({compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){var t,i=null!=s?s:n.nullContext||{},r=a.helperMissing,o=n.escapeExpression;return'<div class="chat-header clearfix">\n    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />\n\n    <div class="chat-about">\n        <div class="chat-with">'+o((t=null!=(t=a.name||(null!=s?s.name:s))?t:r,"function"==typeof t?t.call(i,{name:"name",hash:{},data:l}):t))+'</div>\n        <div class="chat-num-messages">Code: '+o((t=null!=(t=a.code||(null!=s?s.code:s))?t:r,"function"==typeof t?t.call(i,{name:"code",hash:{},data:l}):t))+'</div>\n    </div>\n    <i class="fa fa-star"></i>\n    <div class="pull-right">\n    </div>\n</div> \x3c!-- end chat-header --\x3e\n'},useData:!0}),s.code_error=n({compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){return'<div class="code_error" style="display: inline; color:darkred; font-size: 10px;">\n    <small>Wrong code</small>\n</div>\n'},useData:!0}),s.header=n({compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){var t,i=null!=s?s:n.nullContext||{},r=a.helperMissing,o=n.escapeExpression;return'<div class="row">\n\n    \x3c!-- Profile Info and Notifications --\x3e\n    <div class="col-md-6 col-sm-8 clearfix">\n\n        <ul class="user-info pull-left pull-none-xsm">\n\n            \x3c!-- Profile Info --\x3e\n            <li class="profile-info dropdown">\x3c!-- add class "pull-right" if you want to place this from right --\x3e\n\n                \x3c!--<a href="#" class="dropdown-toggle" data-toggle="dropdown">\n                    <img src="/stylesheets/assets/images/thumb-1@2x.png" alt="" class="img-circle" width="44" />\n                    '+o((t=null!=(t=a.first||(null!=s?s.first:s))?t:r,"function"==typeof t?t.call(i,{name:"first",hash:{},data:l}):t))+" "+o((t=null!=(t=a.last||(null!=s?s.last:s))?t:r,"function"==typeof t?t.call(i,{name:"last",hash:{},data:l}):t))+'\n                    </a>--\x3e\n\n                    \x3c!--<ul class="dropdown-menu">\n\n                        <li class="caret"></li>\n\n                        <li>\n                        <a href="/users/'+o((t=null!=(t=a.username||(null!=s?s.username:s))?t:r,"function"==typeof t?t.call(i,{name:"username",hash:{},data:l}):t))+'">\n                        <i class="entypo-user"></i>\n                        Edit Profile\n                        </a>\n                        </li>\n\n                        <li>\n                        <a href="mailbox.html">\n                        <i class="entypo-mail"></i>\n                        Inbox\n                        </a>\n                        </li>\n\n                        <li>\n                        <a href="extra-calendar.html">\n                        <i class="entypo-calendar"></i>\n                        Calendar\n                        </a>\n                        </li>\n\n                        <li>\n                        <a href="#">\n                        <i class="entypo-clipboard"></i>\n                        Tasks\n                        </a>\n                        </li>\n                        </ul>--\x3e\n            </li>\n\n        </ul>\n\n        <ul class="user-info pull-left pull-right-xs pull-none-xsm">\n            \x3c!-- Raw Notifications --\x3e\n            <li class="notifications dropdown">\n\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">\n                    <i class="entypo-attention"></i>\n                    <span class="badge badge-info">6</span>\n                </a>\n\n                <ul class="dropdown-menu">\n                    <li class="top">\n                        <p class="small">\n                        <a href="#" class="pull-right">Mark all Read</a>\n                        You have <strong>3</strong> new notifications.\n                        </p>\n                    </li>\n\n                    <li>\n                        <ul class="dropdown-menu-list scroller">\n                            <li class="unread notification-success">\n                                <a href="#">\n                                    <i class="entypo-user-add pull-right"></i>\n\n                                    <span class="line">\n                                        <strong>New user registered</strong>\n                                    </span>\n\n                                    <span class="line small">\n                                        30 seconds ago\n                                    </span>\n                                </a>\n                            </li>\n\n                            <li class="unread notification-secondary">\n                                <a href="#">\n                                    <i class="entypo-heart pull-right"></i>\n\n                                    <span class="line">\n                                        <strong>Someone special liked this</strong>\n                                    </span>\n\n                                    <span class="line small">\n                                        2 minutes ago\n                                    </span>\n                                </a>\n                            </li>\n\n                            <li class="notification-primary">\n                                <a href="#">\n                                    <i class="entypo-user pull-right"></i>\n\n                                    <span class="line">\n                                        <strong>Privacy settings have been changed</strong>\n                                    </span>\n\n                                    <span class="line small">\n                                        3 hours ago\n                                    </span>\n                                </a>\n                            </li>\n\n                            <li class="notification-danger">\n                                <a href="#">\n                                    <i class="entypo-cancel-circled pull-right"></i>\n\n                                    <span class="line">\n                                        John cancelled the event\n                                    </span>\n\n                                    <span class="line small">\n                                        9 hours ago\n                                    </span>\n                                </a>\n                            </li>\n\n                            <li class="notification-info">\n                                <a href="#">\n                                    <i class="entypo-info pull-right"></i>\n\n                                    <span class="line">\n                                        The server is status is stable\n                                    </span>\n\n                                    <span class="line small">\n                                        yesterday at 10:30am\n                                    </span>\n                                </a>\n                            </li>\n\n                            <li class="notification-warning">\n                                <a href="#">\n                                    <i class="entypo-rss pull-right"></i>\n\n                                    <span class="line">\n                                        New comments waiting approval\n                                    </span>\n\n                                    <span class="line small">\n                                        last week\n                                    </span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n\n                    <li class="external">\n                        <a href="#">View all notifications</a>\n                    </li>\n                </ul>\n\n            </li>\n\n            \x3c!-- Message Notifications --\x3e\n            <li class="notifications dropdown">\n\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">\n                    <i class="entypo-mail"></i>\n                    <span class="badge badge-secondary">10</span>\n                </a>\n\n                <ul class="dropdown-menu">\n                    <li>\n                        <form class="top-dropdown-search">\n\n                            <div class="form-group">\n                                <input type="text" class="form-control" placeholder="Search anything..." name="s" />\n                            </div>\n\n                        </form>\n\n                        <ul class="dropdown-menu-list scroller">\n                            <li class="active">\n                                <a href="#">\n                                    <span class="image pull-right">\n                                        <img src="/stylesheets/assets/images/thumb-1@2x.png" width="44" alt="" class="img-circle" />\n                                    </span>\n\n                                    <span class="line">\n                                        <strong>Luc Chartier</strong>\n                                        - yesterday\n                                    </span>\n\n                                    <span class="line desc small">\n                                        This ain’t our first item, it is the best of the rest.\n                                    </span>\n                                </a>\n                            </li>\n\n                            <li class="active">\n                                <a href="#">\n                                    <span class="image pull-right">\n                                        <img src="/stylesheets/assets/images/thumb-2@2x.png" width="44" alt="" class="img-circle" />\n                                    </span>\n\n                                    <span class="line">\n                                        <strong>Salma Nyberg</strong>\n                                        - 2 days ago\n                                    </span>\n\n                                    <span class="line desc small">\n                                        Oh he decisively impression attachment friendship so if everything. \n                                    </span>\n                                </a>\n                            </li>\n\n                            <li>\n                                <a href="#">\n                                    <span class="image pull-right">\n                                        <img src="/stylesheets/assets/images/thumb-3@2x.png" width="44" alt="" class="img-circle" />\n                                    </span>\n\n                                    <span class="line">\n                                        Hayden Cartwright\n                                        - a week ago\n                                    </span>\n\n                                    <span class="line desc small">\n                                        Whose her enjoy chief new young. Felicity if ye required likewise so doubtful.\n                                    </span>\n                                </a>\n                            </li>\n\n                            <li>\n                                <a href="#">\n                                    <span class="image pull-right">\n                                        <img src="/stylesheets/assets/images/thumb-4@2x.png" width="44" alt="" class="img-circle" />\n                                    </span>\n\n                                    <span class="line">\n                                        Sandra Eberhardt\n                                        - 16 days ago\n                                    </span>\n\n                                    <span class="line desc small">\n                                        On so attention necessary at by provision otherwise existence direction.\n                                    </span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n\n                    <li class="external">\n                        <a href="mailbox.html">All Messages</a>\n                    </li>\n                </ul>\n\n            </li>\n\n            \x3c!-- Task Notifications --\x3e\n            <li class="notifications dropdown">\n\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">\n                    <i class="entypo-list"></i>\n                    <span class="badge badge-warning">1</span>\n                </a>\n\n                <ul class="dropdown-menu">\n                    <li class="top">\n                        <p>You have 6 pending tasks</p>\n                    </li>\n\n                    <li>\n                        <ul class="dropdown-menu-list scroller">\n                            <li>\n                                <a href="#">\n                                    <span class="task">\n                                        <span class="desc">Procurement</span>\n                                        <span class="percent">27%</span>\n                                    </span>\n\n                                    <span class="progress">\n                                        <span style="width: 27%;" class="progress-bar progress-bar-success">\n                                            <span class="sr-only">27% Complete</span>\n                                        </span>\n                                    </span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href="#">\n                                    <span class="task">\n                                        <span class="desc">App Development</span>\n                                        <span class="percent">83%</span>\n                                    </span>\n\n                                    <span class="progress progress-striped">\n                                        <span style="width: 83%;" class="progress-bar progress-bar-danger">\n                                            <span class="sr-only">83% Complete</span>\n                                        </span>\n                                    </span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href="#">\n                                    <span class="task">\n                                        <span class="desc">HTML Slicing</span>\n                                        <span class="percent">91%</span>\n                                    </span>\n\n                                    <span class="progress">\n                                        <span style="width: 91%;" class="progress-bar progress-bar-success">\n                                            <span class="sr-only">91% Complete</span>\n                                        </span>\n                                    </span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href="#">\n                                    <span class="task">\n                                        <span class="desc">Database Repair</span>\n                                        <span class="percent">12%</span>\n                                    </span>\n\n                                    <span class="progress progress-striped">\n                                        <span style="width: 12%;" class="progress-bar progress-bar-warning">\n                                            <span class="sr-only">12% Complete</span>\n                                        </span>\n                                    </span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href="#">\n                                    <span class="task">\n                                        <span class="desc">Backup Create Progress</span>\n                                        <span class="percent">54%</span>\n                                    </span>\n\n                                    <span class="progress progress-striped">\n                                        <span style="width: 54%;" class="progress-bar progress-bar-info">\n                                            <span class="sr-only">54% Complete</span>\n                                        </span>\n                                    </span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href="#">\n                                    <span class="task">\n                                        <span class="desc">Upgrade Progress</span>\n                                        <span class="percent">17%</span>\n                                    </span>\n\n                                    <span class="progress progress-striped">\n                                        <span style="width: 17%;" class="progress-bar progress-bar-important">\n                                            <span class="sr-only">17% Complete</span>\n                                        </span>\n                                    </span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n\n                    <li class="external">\n                        <a href="#">See all tasks</a>\n                    </li>\n                </ul>\n\n            </li>\n\n        </ul>\n\n    </div>\n\n\n    \x3c!-- Raw Links --\x3e\n    <div class="col-md-6 col-sm-4 clearfix hidden-xs">\n\n        <ul class="list-inline links-list pull-right">\n\n            \x3c!-- Language Selector --\x3e\n            \x3c!--<li class="dropdown language-selector">\n\n                Language: &nbsp;\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-close-others="true">\n                <img src="/stylesheets/assets/images/flags/flag-uk.png" width="16" height="16" />\n                </a>\n\n                <ul class="dropdown-menu pull-right">\n                <li>\n                <a href="#">\n                <img src="/stylesheets/assets/images/flags/flag-es.png" width="16" height="16" />\n                <span>Español</span>\n                </a>\n                </li>\n                </ul>\n\n                </li>--\x3e\n\n                <li class="sep"></li>\n\n\n                <li>\n                    \x3c!--<a href="#" data-toggle="chat" data-collapse-sidebar="1">\n                        <i class="entypo-chat"></i>\n                        Chat\n\n                        <span class="badge badge-success chat-notifications-badge is-hidden">0</span>\n                    </a>--\x3e\n                </li>\n\n                <li>\n                    <form method="post" action="/logout">\n                        <input name="logout" type="submit" class="btn small-buttons" value="Log out"/>\n                        <input type="hidden" name="_csrf" value="'+o((t=null!=(t=a.csrfToken||(null!=s?s.csrfToken:s))?t:r,"function"==typeof t?t.call(i,{name:"csrfToken",hash:{},data:l}):t))+'" />\n                    </form>\n                </li>\n        </ul>\n\n    </div>\n\n</div>\n'},useData:!0}),s.message_response_template=n({1:function(n,s,a,e,l){var t;return'    <div class="message-data">\n        <span class="message-data-time" >'+n.escapeExpression((t=null!=(t=a.viewStamp||(null!=s?s.viewStamp:s))?t:a.helperMissing,"function"==typeof t?t.call(null!=s?s:n.nullContext||{},{name:"viewStamp",hash:{},data:l}):t))+"</span>\n    </div>\n"},3:function(n,s,a,e,l){return'    <div class="message-data">\n    </div>\n'},5:function(n,s,a,e,l){var t;return'            <img class=\'round pull-left\' style="margin-left: -10px" width="40" height="40" avatar="'+n.escapeExpression((t=null!=(t=a.viewUsername||(null!=s?s.viewUsername:s))?t:a.helperMissing,"function"==typeof t?t.call(null!=s?s:n.nullContext||{},{name:"viewUsername",hash:{},data:l}):t))+'" >\n'},7:function(n,s,a,e,l){return'        <div class="message my-message float-left" style="margin-left: 9px">\n'},9:function(n,s,a,e,l){return'        <div class="message my-message float-left" style="margin-left: 30px">\n\n\n'},11:function(n,s,a,e,l){return'            <div class="float-left numVotes">\n            </div>\n'},13:function(n,s,a,e,l){var t;return'            <div class="float-left numVotes">\n                '+n.escapeExpression((t=null!=(t=a.num_votes||(null!=s?s.num_votes:s))?t:a.helperMissing,"function"==typeof t?t.call(null!=s?s:n.nullContext||{},{name:"num_votes",hash:{},data:l}):t))+"\n            </div>\n"},compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){var t,i,r=null!=s?s:n.nullContext||{},o=a.helperMissing,c=n.escapeExpression;return(null!=(t=a.if.call(r,null!=s?s.viewStamp:s,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.program(3,l,0),data:l}))?t:"")+'<li class="clearfix group-message" id="'+c((i=null!=(i=a.line_id||(null!=s?s.line_id:s))?i:o,"function"==typeof i?i.call(r,{name:"line_id",hash:{},data:l}):i))+'">\n    <div class="message-data">\n'+(null!=(t=a.if.call(r,null!=s?s.viewUsername:s,{name:"if",hash:{},fn:n.program(5,l,0),inverse:n.noop,data:l}))?t:"")+"    </div>\n"+(null!=(t=a.if.call(r,null!=s?s.viewUsername:s,{name:"if",hash:{},fn:n.program(7,l,0),inverse:n.program(9,l,0),data:l}))?t:"")+"        "+c((i=null!=(i=a.message||(null!=s?s.message:s))?i:o,"function"==typeof i?i.call(r,{name:"message",hash:{},data:l}):i))+'\n    </div>\n    <a class="voting" lineid="'+c((i=null!=(i=a.line_id||(null!=s?s.line_id:s))?i:o,"function"==typeof i?i.call(r,{name:"line_id",hash:{},data:l}):i))+'" href="javascript:void(0);">\n        <span class="float-left" style=\'margin-left: 5px;\'><i class="entypo-heart-empty"></i></span>\n\n'+(null!=(t=(a.if_eq||s&&s.if_eq||o).call(r,null!=s?s.num_votes:s,"0",{name:"if_eq",hash:{},fn:n.program(11,l,0),inverse:n.program(13,l,0),data:l}))?t:"")+"    </a>\n\n</li>\n"},useData:!0}),s.message_template=n({1:function(n,s,a,e,l){var t;return'    <div class="message-data">\n        <span class="message-data-time" >'+n.escapeExpression((t=null!=(t=a.viewStamp||(null!=s?s.viewStamp:s))?t:a.helperMissing,"function"==typeof t?t.call(null!=s?s:n.nullContext||{},{name:"viewStamp",hash:{},data:l}):t))+"</span>\n    </div>\n"},3:function(n,s,a,e,l){return'    <div class="message-data">\n    </div>\n'},5:function(n,s,a,e,l){return'            <div class="float-right numVotes">\n            </div>\n'},7:function(n,s,a,e,l){var t;return'            <div class="float-right numVotes">\n                '+n.escapeExpression((t=null!=(t=a.num_votes||(null!=s?s.num_votes:s))?t:a.helperMissing,"function"==typeof t?t.call(null!=s?s:n.nullContext||{},{name:"num_votes",hash:{},data:l}):t))+"\n            </div>\n"},compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){var t,i,r=null!=s?s:n.nullContext||{},o=a.helperMissing,c=n.escapeExpression;return(null!=(t=a.if.call(r,null!=s?s.viewStamp:s,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.program(3,l,0),data:l}))?t:"")+'<li class="clearfix group-message" id="'+c((i=null!=(i=a.line_id||(null!=s?s.line_id:s))?i:o,"function"==typeof i?i.call(r,{name:"line_id",hash:{},data:l}):i))+'">\n    <div class="message other-message float-right">\n        '+c((i=null!=(i=a.message||(null!=s?s.message:s))?i:o,"function"==typeof i?i.call(r,{name:"message",hash:{},data:l}):i))+'\n    </div>\n    <a class="voting" lineid="'+c((i=null!=(i=a.line_id||(null!=s?s.line_id:s))?i:o,"function"==typeof i?i.call(r,{name:"line_id",hash:{},data:l}):i))+'" href="javascript:void(0);">\n        <span class="float-right vote-image" style=\'margin-right: 5px;\'><i class="entypo-heart-empty"></i></span>\n'+(null!=(t=(a.if_eq||s&&s.if_eq||o).call(r,null!=s?s.num_votes:s,"0",{name:"if_eq",hash:{},fn:n.program(5,l,0),inverse:n.program(7,l,0),data:l}))?t:"")+"        \n    </a>\n    </div>\n</li>\n"},useData:!0}),s.online_user=n({compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){var t,i=null!=s?s:n.nullContext||{},r=a.helperMissing,o=n.escapeExpression;return'<a href="#" id="'+o((t=null!=(t=a.userid||(null!=s?s.userid:s))?t:r,"function"==typeof t?t.call(i,{name:"userid",hash:{},data:l}):t))+'">\n    <span class="user-status is-online"></span>\n    <em>'+o((t=null!=(t=a.username||(null!=s?s.username:s))?t:r,"function"==typeof t?t.call(i,{name:"username",hash:{},data:l}):t))+"</em>\n</a>\n"},useData:!0}),s.search_results=n({1:function(n,s,a,e,l){var t,i=n.lambda,r=n.escapeExpression,o=null!=s?s:n.nullContext||{};return'                            <li class="search-result">\n                                <div class="sr-inner">\n                                    <h4>\n                                        <a href="/chats/'+r(i(null!=(t=null!=s?s._source:s)?t.id:t,s))+'">'+r(i(null!=(t=null!=s?s._source:s)?t.chat_name:t,s))+"</a>\n"+(null!=(t=a.if.call(o,null!=(t=null!=s?s._source:s)?t.member:t,{name:"if",hash:{},fn:n.program(2,l,0),inverse:n.program(4,l,0),data:l}))?t:"")+"                                    </h4>\n"+(null!=(t=a.if.call(o,null!=(t=null!=s?s._source:s)?t.member:t,{name:"if",hash:{},fn:n.program(6,l,0),inverse:n.program(8,l,0),data:l}))?t:"")+"\n\n"+(null!=(t=a.if.call(o,null!=(t=null!=s?s._source:s)?t.description:t,{name:"if",hash:{},fn:n.program(10,l,0),inverse:n.program(12,l,0),data:l}))?t:"")+'\n                                    <span class="label label-success">\n                                        Number of messages:  <strong>'+r(i(null!=(t=null!=s?s._source:s)?t.num_messages:t,s))+'</strong>\n                                    </span >\n                                    <span class="label label-success">\n                                        Number of members:  <strong>'+r(i(null!=(t=null!=s?s._source:s)?t.num_members:t,s))+"</strong>\n                                    </span >\n                                </div>\n                            </li>\n"},2:function(n,s,a,e,l){return'                                            <button type="button" class="btn btn-green btn-icon btn-sm btn-indexing" style="color: white; margin-left: 10px;">\n                                                <small style="color: white">Already a member</small>\n                                                <i class="entypo-check"></i>\n                                            </button>\n                                            \n\n'},4:function(n,s,a,e,l){return'                                            <button type="button" class="btn btn-red btn-icon btn-sm btn-indexing" style="color: white; margin-left: 10px;">\n                                                <small style="color: white">Code Required</small>\n                                                <i class="entypo-lock"></i>\n                                            </button>\n'},6:function(n,s,a,e,l){return"\n"},8:function(n,s,a,e,l){return'                                        <form role="form" class="chat_code_specific"> \n                                            <input type="text" class="form-control input-sm" style="max-width: 140px;" name="enter_code_specific" placeholder="Enter code..."/>\n                                        </form>\n'},10:function(n,s,a,e,l){var t;return'                                        <p class="small_font">'+n.escapeExpression(n.lambda(null!=(t=null!=s?s._source:s)?t.description:t,s))+"</p>\n"},12:function(n,s,a,e,l){return'                                        <p class="small_font">No description provided.</p>\n\n'},compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){var t,i,r=null!=s?s:n.nullContext||{},o=a.helperMissing,c=n.escapeExpression;return'<section class="search-results-env">\n    <div class="row">\n        <div class="col-md-12">\n            \x3c!-- Search categories tabs --\x3e\n            <ul class="nav nav-tabs right-aligned">\n                <li class="tab-title pull-left">\n                    <div class="search-string">'+c((i=null!=(i=a.num_results||(null!=s?s.num_results:s))?i:o,"function"==typeof i?i.call(r,{name:"num_results",hash:{},data:l}):i))+" results found for: <strong>"+c((i=null!=(i=a.search_term||(null!=s?s.search_term:s))?i:o,"function"==typeof i?i.call(r,{name:"search_term",hash:{},data:l}):i))+'</strong></div>\n                </li>\n            </ul>\n            \x3c!-- Search search form --\x3e\n            <div class="search-results-panes">\n                <div class="search-results-pane active" id="pages">\n                    <ul class="search-results">\n'+(null!=(t=a.each.call(r,null!=s?s.result_list:s,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?t:"")+'                    </ul>\n                    \x3c!-- Pager for search results --\x3e\n                    <ul class="pager">\n                        <li><a href="#"><i class="entypo-left-thin"></i> Previous</a></li>\n                        <li><a href="#">Next <i class="entypo-right-thin"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n'},useData:!0}),s.sidebar=n({1:function(n,s,a,e,l){var t,i,r=null!=s?s:n.nullContext||{},o=a.helperMissing,c=n.escapeExpression;return'                        <li>\n                            <a id="'+c((i=null!=(i=a.id||(null!=s?s.id:s))?i:o,"function"==typeof i?i.call(r,{name:"id",hash:{},data:l}):i))+'" href="/chats/'+c((i=null!=(i=a.id||(null!=s?s.id:s))?i:o,"function"==typeof i?i.call(r,{name:"id",hash:{},data:l}):i))+'">\n                                <form action="" class="remove-user" style="display: inline">\n                                    <button type="submit" style="background: transparent; border: none"><i class="entypo-cancel"></i></button>\n                                </form>\n                                <span class="title">'+c((i=null!=(i=a.chat_name||(null!=s?s.chat_name:s))?i:o,"function"==typeof i?i.call(r,{name:"chat_name",hash:{},data:l}):i))+"</span>\n"+(null!=(t=a.if.call(r,null!=s?s.num_notifications:s,{name:"if",hash:{},fn:n.program(2,l,0),inverse:n.noop,data:l}))?t:"")+"                            </a>\n\n\n                        </li>\n"},2:function(n,s,a,e,l){var t;return'                                    <span class="badge badge-secondary">'+n.escapeExpression((t=null!=(t=a.num_notifications||(null!=s?s.num_notifications:s))?t:a.helperMissing,"function"==typeof t?t.call(null!=s?s:n.nullContext||{},{name:"num_notifications",hash:{},data:l}):t))+"</span>\n"},compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){var t,i,r=null!=s?s:n.nullContext||{},o=a.helperMissing,c="function",p=n.escapeExpression
;return'<div class="sidebar-menu">\n\n    <div class="sidebar-menu-inner">\n\n        <header class="logo-env">\n\n            \x3c!-- logo --\x3e\n            <div class="logo">\n                <a href="/home">\n                    <img src="/stylesheets/assets/images/logo@2x.png" width="120" alt="" />\n                </a>\n            </div>\n\n            \x3c!-- logo collapse icon --\x3e\n            <div class="sidebar-collapse">\n                <a href="#" class="sidebar-collapse-icon">\x3c!-- add class "with-animation" if you want sidebar to have animation during expanding/collapsing transition --\x3e\n                    <i class="entypo-menu"></i>\n                </a>\n            </div>\n\n\n            \x3c!-- open/close menu icon (do not remove if you want to enable menu on mobile devices) --\x3e\n            <div class="sidebar-mobile-menu visible-xs">\n                <a href="#" class="with-animation">\x3c!-- add class "with-animation" to support animation --\x3e\n                    <i class="entypo-menu"></i>\n                </a>\n            </div>\n\n        </header>\n        <div class="sidebar-user-info">\n\n            <div class="sui-normal">\n                <a href="#" class="user-link">\n                    <img class="round" width="60" height="60" avatar="'+p((i=null!=(i=a.first||(null!=s?s.first:s))?i:o,typeof i===c?i.call(r,{name:"first",hash:{},data:l}):i))+'"/>\n\n                    <strong>'+p((i=null!=(i=a.first||(null!=s?s.first:s))?i:o,typeof i===c?i.call(r,{name:"first",hash:{},data:l}):i))+" "+p((i=null!=(i=a.last||(null!=s?s.last:s))?i:o,typeof i===c?i.call(r,{name:"last",hash:{},data:l}):i))+'</strong>\n                </a>\n            </div>\n\n            <div class="sui-hover inline-links animate-in">\x3c!-- You can remove "inline-links" class to make links appear vertically, class "animate-in" will make A elements animateable when click on user profile --\x3e\n                <a href="/users/'+p((i=null!=(i=a.username||(null!=s?s.username:s))?i:o,typeof i===c?i.call(r,{name:"username",hash:{},data:l}):i))+'">\n                    <i class="entypo-user"></i>\n                    '+p((i=null!=(i=a.first||(null!=s?s.first:s))?i:o,typeof i===c?i.call(r,{name:"first",hash:{},data:l}):i))+" "+p((i=null!=(i=a.last||(null!=s?s.last:s))?i:o,typeof i===c?i.call(r,{name:"last",hash:{},data:l}):i))+'\n                </a>\n\n                <a href="extra-lockscreen.html">\n                    <i class="entypo-lock"></i>\n                    Log Out\n                </a>\n\n                <span class="close-sui-popup">&times;</span>\x3c!-- this is mandatory --\x3e\t\t\t\t</div>\n        </div>\n\n\n        <ul id="main-menu" class="main-menu">\n            \x3c!-- add class "multiple-expanded" to allow multiple submenus to open --\x3e\n            \x3c!-- class "auto-inherit-active-class" will automatically add "active" class for parent elements who are marked already with class "active" --\x3e\n            <li class="opened active has-sub">\n                <a href="index.html">\n                    <i class="entypo-chat"></i>\n                    <span class="title">Chats</span>\n                </a>\n                <ul class="make-overflow make-height">\n\n\n'+(null!=(t=a.each.call(r,null!=s?s.list:s,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?t:"")+'\n\n                </ul>\n            </li>\n            \x3c!--<li class="has-sub">\n                <a href="mailbox.html">\n                <i class="entypo-user"></i>\n                <span class="title">Profile</span>\n                </a>\n                <ul>\n                <li>\n                <a href="/users/'+p((i=null!=(i=a.username||(null!=s?s.username:s))?i:o,typeof i===c?i.call(r,{name:"username",hash:{},data:l}):i))+'">\n                <i class="entypo-inbox"></i>\n                <span class="title">Profile Settings</span>\n                </a>\n                </li>\n                </ul>\n                </li>--\x3e\n        </ul>\n\n    </div>\n\n</div>\n'},useData:!0}),s.user_stat=n({compiler:[7,">= 4.0.0"],main:function(n,s,a,e,l){return'<table class="table table-bordered">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td width="50%">\n\t\t\t\t\t\t\t\t\t<strong>Lines sent</strong>\n\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t<div id="chart6" style="height: 250px"></div>\n\t\t\t\t\t\t\t\t</td>\n\n                                <td width="50%">\n                                    <strong>Upvotes received</strong>\n                                    <br />\n                                    <div id="chart5" style="height: 250px"></div>\n                                </td>\n\t\t\t\t\t\t\t</tr>\n\n                            <tr>\n                                \n                                \n                            </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n        \n'},useData:!0})}();