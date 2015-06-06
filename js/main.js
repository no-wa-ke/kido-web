var checked = null; 

function distraction() {
    var size = 0;
    var counter = 0;
    var increase = Math.PI * 2 / 100;
    var textcount = 0;
        var characterset = [
        "¸.·´¯`·.´¯`·.¸¸.·´¯`·.¸><(((º>",
        ".·´¯`·.´¯`·.¸¸.·´¯`·.¸¸><(((º>",
        "·´¯`·.´¯`·.¸¸.·´¯`·.¸¸.><(((º>",
        "´¯`·.´¯`·.¸¸.·´¯`·.¸¸.·><(((º>",
        "¯`·.´¯`·.¸¸.·´¯`·.¸¸.·´><(((º>",
        "`·.´¯`·.¸¸.·´¯`·.¸¸.·´¯><(((º>",
        "·.´¯`·.¸¸.·´¯`·.¸¸.·´¯`><(((º>",
        ".´¯`·.¸¸.·´¯`·.¸¸.·´¯`·><(((º>",
        "´¯`·.¸¸.·´¯`·.¸¸.·´¯`·.><(((º>",
        "¯`·.¸¸.·´¯`·.¸¸.·´¯`·.´><(((º>",
        "`·.¸¸.·´¯`·.¸¸.·´¯`·.´¯><(((º>",
        "·.¸¸.·´¯`·.¸¸.·´¯`·.´¯`><(((º>",
        ".¸¸.·´¯`·.¸¸.·´¯`·.´¯`·><(((º>",
        "¸¸.·´¯`·.¸¸.·´¯`·.´¯`·.><(((º>",
        "¸.·´¯`·.¸¸.·´¯`·.´¯`·.¸><(((º>",    
        ".·´¯`·.¸¸.·´¯`·.´¯`·.¸¸><(((º>",
        "·´¯`·.¸¸.·´¯`·.´¯`·.¸¸.><(((º>",
        "´¯`·.¸¸.·´¯`·.´¯`·.¸¸.·><(((º>",
        "¯`·.¸¸.·´¯`·.´¯`·.¸¸.·´><(((º>",
        "`·.¸¸.·´¯`·.´¯`·.¸¸.·´¯><(((º>",
        "·.¸¸.·´¯`·.´¯`·.¸¸.·´¯`><(((º>",
        ".¸¸.·´¯`·.´¯`·.¸¸.·´¯`·><(((º>",
        "¸¸.·´¯`·.´¯`·.¸¸.·´¯`·.><(((º>"  
    ];
    setInterval(function() {
        //console.clear();
        var animation = "";
        size = Math.sin(counter) / 2 + 1;
        counter += increase;
        if (counter > Math.PI * 4) {
            counter = 0;
            console.clear();
            
        }

        textcount++;

        if (textcount >= characterset.length) {
            textcount = 0;

        }
        if (textcount >= 0){
            // todo:better clear issue
        }

       animation = "%c"+characterset[textcount]+"";
       var style ='font-size: ' +size*20+ 'px; color:#ff0099;line-height:'+size*2+';';
        console.log(animation,style);

    }, 60)

}

function postLoad() {

    $("#Blogposts").click(function() {
        $("#pgb").hide();
        $("#blogwrap").empty();
        $("#blogwrap").show();

        // console.log(tumblr_api_read.posts);

        show_number = tumblr_api_read.posts.length; // 表示数
        for (i = 0; i < 10; i++) {
            if (tumblr_api_read.posts[i]["type"] == "photo") {

                photo = tumblr_api_read["posts"][i]["photo-url-250"];
                url = tumblr_api_read["posts"][i]["url"];
                date = tumblr_api_read["posts"][i]["date"];
                _height = tumblr_api_read["posts"][i]["height"];
                pslug = tumblr_api_read["posts"][i]["slug"];
                photosets = tumblr_api_read["posts"][i]["photos"];
                pcaption = tumblr_api_read["posts"][i]["photo-caption"];


                if (photosets < 1) { // single photo

                    $("#blogwrap").append('<li class="grid-item blogposts "><a href="' + url + '"class="' + pslug + ' workitembutton-scrap" id="' + pslug + '"target="_blank"><div class="grid-item-on-hover"><div class="grid-text"><h1>>>READ</h1><h2><br>' + date + '<br>' + pcaption + '<br></h2><div class ="blogTexts">' + pcaption + '</div></div></div><img src="' + photo + '" alt=" "></a></li>');



                } else { // photoset
                    var result = "";
                    var appendItem = "";
                    for (p = 0; p < 3; p++) {
                        // console.log()
                        appendItem = '<img src="' + photosets[p]['photo-url-250'] + '" alt=" ">';
                        result = result + appendItem;

                    }

                    $("#blogwrap").append('<li class="grid-item blogposts"><a href="' + url + '"class="' + pslug + ' workitembutton-scrap" id="' + pslug + '"target="_blank"><div class="grid-item-on-hover "><div class="grid-text"><h1>>>READ</h1><h2><br>' + date + '<br>' + pcaption + '<br></h2></div></div>' + result + '</a></li>');

                }

            };
            if (tumblr_api_read.posts[i]["type"] == "video") {

                player = tumblr_api_read["posts"][i]["video-player-250"];
                url = tumblr_api_read["posts"][i]["url"];
                date = tumblr_api_read["posts"][i]["date"];
                pslug = tumblr_api_read["posts"][i]["video-caption"];

                if (player.indexOf("vine") != -1) {

                    $("#blogwrap").append('<li class="grid-item blogposts"></div><a href="' + url + '"class="' + pslug + ' workitembutton-scrap" id="' + pslug + '"target="_blank"><div class="grid-item-on-hover-vid videoposts"><h1></h1><h2><br>-<br><br></h2></div>' + player + '</a></li>');

                } else {

                    $("#blogwrap").append('<li class="grid-item blogposts"></div><a href="' + url + '"class="' + pslug + ' workitembutton-scrap" id="' + pslug + '"target="_blank"><div class="grid-item-on-hover-vid"><h1></h1><h2><br>-<br><br></h2></div>' + player + '</a></li>');

                }

            }
            if (tumblr_api_read.posts[i]["type"] == "regular") {

                tbody = tumblr_api_read["posts"][i]["regular-body"];
                url = tumblr_api_read["posts"][i]["url"];
                date = tumblr_api_read["posts"][i]["date"];
                pslug = tumblr_api_read["posts"][i]["regular-title"];
                key = tumblr_api_read["posts"][i]["reblog-key"];


                $("#blogwrap").append('<li class="grid-item blogposts"><a href="' + url + '"class="' + key + ' workitembutton-scrap" id="' + key + '"target="_blank"><div class="grid-item-on-hover"><div class="grid-text"><h1>>>READ</h1><h2><br>-<br>' + date + '<br></h2></div></div><div class ="blogTexts">' + tbody + '</div><img src="" alt=" "></a></li>');

            }

            $('#blogwrap').isotope('reloadItems'); //relayout
        }

        customIsotope();
        bloglayout();

    });

}

function checkURL() {

    if (!checked) { // check for once
        var urlHash = location.hash;
        var jumpTag = "_";
        if (urlHash.indexOf(jumpTag) != -1) {
            // console.log(urlHash);
            urlHash = urlHash.replace("_", "");
            // console.log(urlHash);

        }
        $(urlHash).click();

    }
    checked = 1;
}

function show_about(e) {
    switch (e) {
        case "show":
            if ($("#content-about").is(":visible")) {
                show_about("hide")
            } else {
                $(".more-info").show();
                $("#content-about").slideDown("slow");
                $("#content-about-more").hide()
            }
            break;
        case "hide":
            $(".more-info").show();
            $("#content-about").hide();
            $("#content-about-more").hide();
            break;
        case "more":
            $(".more-info").hide();
            $("#content-about-more").slideDown("slow");
            break;
        case "less":
            $(".more-info").show();
            $("#content-about-more").slideUp("slow");
            break
    }
}

function show_contact(e) {
    switch (e) {
        case "show":
            if ($("#content-contact").is(":visible")) {
                show_contact("hide")
            } else {
                $(".contactsub").slideDown("slow")
            }
            break;
        case "hide":
            $(".contactsub").hide();
            break
    }
}

function init_work() {

    ready()

}

function get_playlist(e) {
    AJAX_JSON_Req("js/workList.json")
}

function scrollToAnchor(e) {
    var t = $("a[name='" + e + "']");
    $("html,body").animate({
        scrollTop: t.offset().top
    }, "slow")
}

function addEvent(e, t, n) {
    if (e.addEventListener) {
        e.addEventListener(t, n, false)
    } else {
        e.attachEvent(t, n, false)
    }
}

function ready(e) {

    get_playlist()


}

function do_work(e) {

/*      // vimeo api. no good for IE8~
    var n = t;
    $(".workitembutton").each(function() {
        var t = $(this);
        var r = t.attr("id");
        t.on("click", function(t) {
            t.preventDefault();
            $("#options.activatemobilemenu").toggleClass("activatemobilemenu");
            var i = e.workitems;
            for (var s in i) {
                if (i[s].id == r) {
                    if ($("#sticker-sticky-wrapper").width() <= 754) {
                        window.location.href = i[s].video.toString()
                    } else {
                        do_video(i[s], r, n)
                        location.hash = i[s].id.toString();
                        $("#blogwrap").empty();
                        $("#blogwrap").height(0);
                    }
                }
            }
        })
    });
*/

    $(".workitembutton-music").each(function() {
        var t = $(this);
        var r = t.attr("id");
        t.on("click", function(t) {
            t.preventDefault();
            $("#options.activatemobilemenu").toggleClass("activatemobilemenu");
            var i = e.workitems;
            for (var s in i) {
                if (i[s].id == r) {

                    do_music(i[s], r)

                    if (history.pushState) { //restrict jumping function of hashtag
                        history.pushState(null, null, "#_" + i[s].id.toString())
                    } else {
                        location.hash = i[s].id.toString();
                    }
                    $("#blogwrap").empty();
                    $("#blogwrap").height(0);



                }
            }
        })
    });

    $(".workitembutton-page").each(function() {
        var t = $(this);
        var r = t.attr("id");
        t.on("click", function(t) {
            t.preventDefault();
            $("#options.activatemobilemenu").toggleClass("activatemobilemenu");
            var i = e.workitems;
            for (var s in i) {
                if (i[s].id == r) {
                    location.hash = i[s].id.toString();
                    do_page(i[s], r)
                    if (history.pushState) { //restrict jumping function of hashtag
                        history.pushState(null, null, location.hash);
                    } else {
                        location.hash = i[s].id.toString();
                    }
                    $("#blogwrap").empty();
                    $("#blogwrap").height(0);


                }
            }
        })
    });

    $(".workitembutton-big").each(function() {
        var t = $(this);
        var r = t.attr("id");
        t.on("click", function(t) {
            t.preventDefault();
            $("#options.activatemobilemenu").toggleClass("activatemobilemenu");
            var i = e.workitems;
            for (var s in i) {
                if (i[s].id == r) {
                    location.hash = i[s].id.toString();

                    do_Big(i[s], r)
                    if (history.pushState) { //restrict jumping function of hashtag
                        history.pushState(null, null, location.hash);
                    } else {
                        location.hash = i[s].id.toString();
                    }

                    $("#blogwrap").empty();
                    $("#blogwrap").height(0);


                }
            }
        })
    });

    $(".close").click(function() {
        // n.api("unload");
        $(".workitemreveal_player").fadeOut("slow")
    })
}




function do_video(e, t, n) {
    // console.log(e);
    // console.log("play " + t);
    $(".video-buffer").show();
    $(".workitemreveal_player").show();
    $(".headingone").html(e.headingone);
    $(".subheading").html(e.subheading);
    $(".credits").html(e.credits);
    $("#vimeo_player").attr("src", e.video);
    $("#vimeo_player").hide();
    $(".workitemreveal_player").fitVids()

}

function do_music(e, t) {

    $(".mtitle").empty();
    $(".mcredits").empty();
    $(".mLink").empty();
    // console.log(e);
    // console.log("play-music " + t);
    // $(".").show();
    $("#musicPlayer").fadeIn("slow");
    $(".mtitle").append('<p>' + e.headingone + '</p>');
    $(".mcredits").append('<p>' + e.credits + '</p>');
    if (e.storeLink) {
        $(".mLink").append('<p><a href =' + e.storeLink + '>' + "| >> LINK" + "</a></p>");
    }
    if (e.sound) { //soundcloud
        // console.log(e.sound);
        document.getElementById('audio_player').src = e.sound;
        document.getElementById('audio_player').play();
    } else if (e.SCtrack) {
        SC.initialize({
            client_id: '38999f633a89e919b74162de27fb5f5d' //Demo ID prometones
        });
        // console.log(e.SCtrack);
        SC.get(e.SCtrack, {}, function(sound) {
            // alert("Sound URI: " + sound.uri+"/stream?client_id=38999f633a89e919b74162de27fb5f5d");//debug
            document.getElementById('audio_player').src = sound.uri + "/stream?client_id=38999f633a89e919b74162de27fb5f5d"
            document.getElementById('audio_player').play();
        });


    }

    // $("#musicPlayer").hide();
    $(".workitemreveal_player").fitVids()

}

function do_page(e, t) {
    // clean up page
    $(".video-buffer").hide();
    $("#vimeo_player").hide();
    $(".fvideo").empty();
    $(".photosection").empty();
    $(".ctitle").empty();
    $(".cinfoEN").empty();
    $(".cinfoJP").empty();

    if (e.videoUrl && !e.videoLocal) { //if there is no vid, then hide element to pack up empty space   
        $(".localCase").hide();
        $(".fvideo").show();
        $(".fvideo").attr("src", e.videoUrl);

    }
    if (e.videoLocal && !e.videoUrl) { //if there is no vid, then hide element to pack up empty space   
        $(".fvideo").hide();
        $(".localCase").show();
        $(".lvideo").attr("src", e.videoLocal);


    }
    if (!e.videoLocal && !e.videoUrl) {
        $(".fvideo").hide();
        $(".localCase").hide();

    }

    $("#floatPage").fadeIn("slow");

    for (i = 0; i < e.photosets.length; i++) {
        $(".photosection").append('<div class ="floatImages"><img src="' + e.photosets[i] + '"></div>');
        // console.log(e.photosets[i]);
    }


    $("#vimeo_player").stop();
    $(".ctitle").append(e.caption);
    $(".cinfoEN").append(e.textsEN);
    $(".cinfoJP").append(e.textsJP);
    $("#floatPage").scrollTop(0);


}

function do_Big(e, t) {

    if (e.frameUrl) { //if there is no vid, then hide element to pack up empty space   
        $(".fPage").show();

    }

    if (!e.frameUrl) {
        $(".fPage").hide();

    }

    // console.log(e);
    // console.log("show-page " + t);

    $("#bigPage").fadeIn("slow");

    $(".fPage").attr("src", e.frameUrl);
    $("#bigPage").scrollTop(0);
    $("#wrapper").scrollTop(0);



}


function totop() {
    $(".totop").hover(function() {
        $(this).animate({
            bottom: "-5px"
        }, {
            queue: false,
            duration: 60
        })
    }, function() {
        $(this).animate({
            bottom: "-10px"
        }, {
            queue: false,
            duration: 60
        })
    });
    $(".totop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false
    })
}

function AJAX_JSON_Req(e, t) {
    var n = new XMLHttpRequest;
    n.open("GET", e, true);
    n.setRequestHeader("Content-type", "application/json");
    n.onreadystatechange = function() {
        if (n.readyState == 4 && n.status == 200) {
            var e = JSON.parse(n.responseText);
            var r = e;
            playlist_loaded = true;
            do_work(r)
        }
    };
    n.send()
}
var playlist_loaded = false;
$(window).load(function() {
    $("#spinner").delay(800).fadeOut();
    $(".whitebg").delay(800).fadeOut("slow");
    $("#sticker").sticky({
        topSpacing: 0,
        className: "cw"
    })
});


$(document).ready(function() {



    var targets = $('.music');

    function newColor() { //put random colors to boxes
        return Math.random().toString(16).slice(-6);
    }

    function setColor(target, color) {
        target.style.backgroundColor = '#' + color;
    }

    function setNumber(target, number) {
        var startOne = number + 1;
        var result = " track" + startOne;
        target.className = target.className + result;
        var _result = ".track" + startOne;
        $(_result).append('<div class = "trackNumber">' + "♫" + '</div>');
        // console.log(_result);

    }


    function appendNumber(target, number) {

        var result = ".track" + number;

    }
    for (var i = 0; i < targets.length; i++) {

        setColor(targets[i], newColor());
        setNumber(targets[i], i);
        appendNumber(targets[i], i);

    }

    init_work();
    totop();
    // distraction();
    // nav_toggles();



    //-------------------------------------

    $(".item-on-hover").hover(function() {
        $(this).animate({
            opacity: 1
        }, 200);
        $(this).children(".hover-link, .hover-image, .hover-video").animate({
            opacity: 1
        }, 200)
    }, function() {
        $(this).animate({
            opacity: 0
        }, 200);
        $(this).children(".hover-link, .hover-image, .hover-video").animate({
            opacity: 0
        }, 200)
    });
    $(".grid-item-on-hover").hover(function() {
            $(this).animate({
                opacity: .9
            }, 200)
        }, function() {
            $(this).animate({
                opacity: 0
            }, 200)

        }

    );
    //-------------------------------------

    $("a.external").click(function(e) {
        var t = $(this).attr("href");
        e.preventDefault();
        $(".whitebg").fadeIn(400, function() {
            $("#spinner").fadeIn(400);
            document.location.href = t
        });
        return false
    });
    $(".show_hide").click(function() {
        $("#options").toggleClass("activatemobilemenu")
    });
    $(".scrollbackmain").click(function() {
        scrollToAnchor("topanchor")
    });
    $(".hovercontent").hover(function() {
        $(".fluid-width-video-wrapper").removeClass("hidden");
        $(".fluid-width-video-wrapper").addClass("active");
    });
    $(".hovercontent").on("mouseleave", function(e) {
        setTimeout(function() {
            $(".fluid-width-video-wrapper").removeClass("active").addClass("hidden")
        }, 100)
    })


    $(".closeAudio").click(function() {

        $("#musicPlayer").fadeOut("slow");

    });

    $(".closePage").click(function() {

        $("#floatPage").fadeOut("slow");

    });

    $("#floatPage:not(.localCase)").click(function() {
        $("#floatPage").fadeOut("slow");

    });
    $("#bigPage").click(function() {

        $("#bigPage").fadeOut("slow");

    });
    $(".about").click(function() {
        $("#aboutMe").fadeIn("slow");
        location.hash = "filter-About";


    });
    $("#aboutMe").click(function() {

        $("#aboutMe").fadeOut("slow");

    });

    //-------------------------------------

    $(".mnu-item").click(function() {


        if ($(this).hasClass('blogposts')) {
            location.hash = "Blogposts";
              $(".name .subtitle").empty();
            $(".name .subtitle").append("log");
        }
        if ($(this).hasClass('filter-music')) {
            location.hash = "filter-Music";
            $("#blogwrap").empty();
            $("#blogwrap").hide();
            $("#pgb").show();
            $(".name .subtitle").empty();
            $(".name .subtitle").append("Music");
        }
        if ($(this).hasClass('filter-all')) {
            location.hash = "filter-All";

            $("#blogwrap").empty();
            $("#blogwrap").hide();
            $("#pgb").show();
            $(".name .subtitle").empty();
            $(".name .subtitle").append("Design | Projects");

        }
        if ($(this).hasClass('filter-selectedwork')) {
            location.hash = "filter-Selectedwork";

            $("#blogwrap").empty();
            $("#blogwrap").hide();
            $("#pgb").show();
            $(".name .subtitle").empty();
            $(".name .subtitle").append("Selected Works");
        }

        $(window).scrollTop(0);
    });


})
