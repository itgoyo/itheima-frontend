/**
 * Created by Lenovo on 2017/11/23.
 */
$(window).load(function() {
    var arrOfJson = [{ //  1
            width: 400,
            top: 70,
            left: 50,
            opacity: 0.2,
            "z-index": 2
        },
        { // 2
            width: 600,
            top: 120,
            left: 0,
            opacity: 0.8,
            "z-index": 3
        },
        { // 3
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            "z-index": 4
        },
        { // 4
            width: 600,
            top: 120,
            left: 600,
            opacity: 0.8,
            "z-index": 3
        },
        { //5
            width: 400,
            top: 70,
            left: 750,
            opacity: 0.2,
            "z-index": 2
        }
    ];

    $('#wrap').hover(function() {
        $('.arrow').fadeTo(100, 1);
    }, function() {
        $('.arrow').fadeTo(100, 0);
    });

    var index = 0;

    function renderMove() {
        var idx = index;
        $('#slide li').each(function(i, ele) {
            $(ele).css('z-index', arrOfJson[idx]['z-index']);
            $(ele).animate(arrOfJson[idx], 1000, function() {
                flag = true;
            });
            idx = idx + 1 == arrOfJson.length ? 0 : (idx + 1);
        });
    }
    renderMove();

    var flag = true;
    $('.prev').click(function() {
        if (flag) {
            flag = false;
            index = index + 1 == arrOfJson.length ? 0 : (index + 1);
            renderMove();
        }
    });
    $('.next').click(function() {
        if (flag) {
            flag = false;
            index = index - 1 < 0 ? arrOfJson.length - 1 : (index - 1);
            renderMove();
        }
    });
});