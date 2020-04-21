window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var arrow_l = focus.querySelector('.arrow-l');
    var arrow_r = focus.querySelector('.arrow-r');

    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000);
    });

    var num = 0;
    var flag = true;
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focus.offsetWidth + 'px';
            }
            num--;
            circle = --circle < 0 ? ol.children.length - 1 : circle;
            circleUpdate();
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
        }
    });
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            circle = ++circle > ol.children.length - 1 ? 0 : circle;
            circleUpdate();
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
        }
    });

    var circle = 0;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        i == 0 && (li.className = 'current');
        li.addEventListener('click', function() {
            circle = num = this.getAttribute('index');
            animate(ul, -circle * focus.offsetWidth);
            circleUpdate();
        });
        ol.appendChild(li);
    }
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    function circleUpdate() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    var timer = setInterval(function() {
        arrow_r.click();
    }, 2000);
})