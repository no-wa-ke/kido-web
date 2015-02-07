function customIsotope() {


    var selector = ".selectedwork"
    var e = $(".grid");
    colWidth = function() {
        var t = e.width(),
            n = 1,
            r = 0;
        if (t > 1440) {
            n = 5
        } else if (t > 1365) {
            n = 5
        } else if (t > 1279) {
            n = 5
        } else if (t > 1023) {
            n = 5
        } else if (t > 767) {
            n = 3
        } else if (t > 479) {
            n = 2
        }
        r = Math.floor(t / n);
        e.find(".grid-item").each(function() {
            var e = $(this);
            if (e.hasClass("item-wide")) {
                if (t < 480) {
                    $(".item-wide").css({
                        width: r - 6 + "px",
                        height: Math.round((r - 6) * .7777777) + "px"
                    });
                    $(".item-wide img").css({
                        width: r - 6 + "px",
                        height: "auto"
                    })
                } else {
                    $(".item-wide").css({
                        width: r * 2 - 6 + "px",
                        height: Math.round((r * 2 - 6) * .7777777) + "px"
                    });
                    $(".item-wide img").css({
                        width: r * 2 - 6 + "px",
                        height: "auto"
                    })
                }
            }
            if (e.hasClass("item-small")) {
                $(".item-small").css({
                    width: r - 6 + "px",
                    height: Math.round((r - 6) * .7777777) + "px"
                });
                $(".item-small img").css({
                    width: r - 6 + "px",
                    height: "auto"
                })
            }
            if (e.hasClass("item-long")) {
                if (t < 480) {
                    $(".item-long").css({
                        width: r - 6 + "px",
                        height: Math.round((r - 4) * .7777777 / 2) + "px"
                    });
                    $(".item-long img").css({
                        width: r - 6 + "px",
                        height: "auto"
                    })
                } else {
                    $(".item-long").css({
                        width: r * 2 - 6 + "px",
                        height: Math.round((r - 6) * .7777777) + "px"
                    });
                    $(".item-long img").css({
                        width: r * 2 - 6 + "px",
                        height: "auto"
                    })
                }
            }
            if (e.hasClass("item-high")) {
                $(".item-high").css({
                    width: r - 6 + "px",
                    height: Math.round((r * 2 - 6) * .7777777) + "px"
                });
                $(".item-high img").css({
                    width: r - 6 + "px",
                    height: "auto"
                })
            }
        });
        return r
    };

    e.imagesLoaded(function() {
        gridIsotope = function() {
            e.isotope({
                layoutMode: "masonry",
                itemSelector: ".grid-item",
                filter: selector,
                animationEngine: "jquery",
                resizable: false,
                masonry: {
                    columnWidth: colWidth(),
                    gutterWidth: 0
                }
            })
        };

        gridIsotope();

        $(window).smartresize(gridIsotope);
        var t = $("#options .option-set"),
            n = t.find("a");
        n.click(function() {
            var t = $(this);
            if (t.hasClass("selected")) {
                return false
            }
            var n = t.parents(".option-set");
            n.find(".selected").removeClass("selected");
            t.addClass("selected");
            var r = {},
                i = n.attr("data-option-key"),
                s = t.attr("data-option-value");
            s = s === "false" ? false : s;
            r[i] = s;
            if (i === "layoutMode" && typeof changeLayoutMode === "function") {
                changeLayoutMode(t, r)
            } else {
                e.isotope(r)
            }
            return false
        })
    })

    $('#filters a').click(function() {
        selector = $(this).attr('data-filter');
    });


}

function bloglayout() {

        var e = $(".grid");

e.imagesLoaded(function() {

gridIsotope = function() {

        $("#blogwrap").isotope({
            layoutMode: "masonry",
            itemSelector: ".grid-item",
            filter: ".grid-item",
            animationEngine: "jquery",
            resizable: false,
            masonry: {
                columnWidth: 100,
                gutter: 50
            }
        })
    };

    gridIsotope();



    var targets = $(".videoposts");
    var vineID =  $(".vine-embed");

    function videoNumber(target, number,vinepost) {
        // var startOne = number + 1;
        var result = number;
        target.className = target.className + result;
        vinepost.className = vinepost.className +result;
        // var _result = ".track" + startOne;
        // $(_result).append('<div class = "trackNumber">' + "♫" + '</div>');
        console.log(result);
    }

    function soundOn(number) {

        $(".videoposts"+number).mouseover(function() {
            var src = $(".vine-embed"+number).attr("src").replace("simple", "simple?audio=1")
            $(".vine-embed"+number).attr("src", src);
        }).mouseout(function() {
            var src = $(".vine-embed"+number).attr("src").replace("simple?audio=1", "simple")
            $(".vine-embed"+number).attr("src", src);
        });
    }


    for (var i = 0; i < targets.length; i++) {

        videoNumber(targets[i], i,vineID[i]);
        soundOn(i);


    }



    $(window).smartresize(gridIsotope);
    var t = $("#options .option-set"),
        n = t.find("a");
    n.click(function() {
        var t = $(this);
        if (t.hasClass("selected")) {
            return false
        }
        var n = t.parents(".option-set");
        n.find(".selected").removeClass("selected");
        t.addClass("selected");
        var r = {},
            i = n.attr("data-option-key"),
            s = t.attr("data-option-value");
        s = s === "false" ? false : s;
        r[i] = s;
        if (i === "layoutMode" && typeof changeLayoutMode === "function") {
            changeLayoutMode(t, r)
        } else {
            e.isotope(r)
        }
        return false
    })
  });
}

$(window).load(function() {


    customIsotope();


});
