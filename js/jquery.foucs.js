﻿; (function ($) {
    $.extend({
        'foucs': function (con) {
            var $container = $('.foucs')
                , $imgs = $container.find('ul.heros')
            , $leftBtn = $container.find('a.next')
            , $rightBtn = $container.find('a.prev')
            , config = {
                interval: con && con.interval || 6000,
                animateTime: con && con.animateTime || 500,
                direction: con && (con.direction === 'right'),
                _imgLen: $imgs.length
            }
            , i = 0
            , getNextIndex = function (y) { return i + y >= config._imgLen ? i + y - config._imgLen : i + y; }
            , getPrevIndex = function (y) { return i - y < 0 ? config._imgLen + i - y : i - y; }
            , silde = function (d) {
                $imgs.eq((d ? getPrevIndex(2) : getNextIndex(2))).css('left', (d ? '-1900px' : '1900px'))
                $imgs.animate({
                    'left': (d ? '+' : '-') + '=950px'
                }, config.animateTime);
                i = d ? getPrevIndex(1) : getNextIndex(1);
            }
            , s = setInterval(function () { silde(config.direction); }, config.interval);
            $imgs.eq(i).css('left', 0).end().eq(i + 1).css('left', '950px').end().eq(i - 1).css('left', '-950px');
            $container.find('.heros').add($leftBtn).add($rightBtn).hover(function () { clearInterval(s); }, function () { s = setInterval(function () { silde(config.direction); }, config.interval); });
            $leftBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(false);
                }
            });
            $rightBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(true);
                }
            });
        }
    });
}(jQuery));

var dm = dm || {};
dm.switchTab = function(i, o, p) {
    var n = {
        delay: 100,
        trigger: "mouseover",
        lazyload: 1
    };
    $.extend(n, p || {});
    var j = {};
    j.load0 = 1;
    var k;
    if (n.trigger === "mouseover") {
        i.mouseover(function() {
            l(this)
        })
    } else {
        if (n.trigger === "click") {
            i.click(function() {
                l(this)
            })
        }
    }
    function l(b) {
        var a = b;
        if (n.delay > 0) {
            k && clearTimeout(k);
            k = setTimeout(function() {
                m(a)
            },
            n.delay)
        } else {
            m(a)
        }
    }
    function m(c) {
        i.removeClass("av");
        $(c).addClass("av");
        var b = $(c).attr("tab");
        o.hide();
        var d = o[b];
        d.style.display = "block";

    }
};
dm.scrollList = function(i, z, y, O, D, I) {

    function A() {
        if (O) {
            O.find("span.on").removeClass("av");
            O.find("span").eq(G).addClass("av")
        }
        x()
    }
    if (O) {
        var H = [];
        for (var C = 1; C <= N; C++) {
            H.push('')
        }
        O.html(H.join(""));
        O.find("span:first").addClass("av");
        if (I === "click") {
            O.find("span").click(function() {
                p(this)
            })
        } else {
            if (I === "mouseover") {
                O.find("span").mouseover(function() {
                    p(this)
                })
            }
        }
    }
    if (N > 1) {
        y.find("span").addClass("av").attr("", "");
        z.click(function() {
            if (i.find("ul").is(":animated") || !z.find("span").hasClass("av")) {
                return
            }
            G--;
            i.find("ul").animate({
                marginLeft: "+=" + F
            },
            function() {
                A()
            })
        });
        y.click(function() {
            if (i.find("ul").is(":animated") || !y.find("span").hasClass("av")) {
                return
            }
            G++;
            i.find("ul").animate({
                marginLeft: "-=" + F
            },
            function() {
                A()
            })
        })
    }
};