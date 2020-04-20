window.addEventListener('load', function() {
    var previewImg = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var bigImg = document.querySelector('.bigImg');

    previewImg.addEventListener('mouseover', function(e) {
        mask.style.display = 'block';
        big.style.display = 'block';
    });

    previewImg.addEventListener('mousemove', function(e) {
        var minX = 0;
        var minY = 0;
        var maxX = this.offsetWidth - mask.offsetWidth;
        var maxY = this.offsetHeight - mask.offsetHeight;
        var x = e.pageX - this.offsetLeft - mask.offsetWidth / 2;
        var y = e.pageY - this.offsetTop - mask.offsetHeight / 2;
        var left = x < minX ? minX :
            x > maxX ? maxX :
            x;
        var top = y < minY ? minY :
            y > maxY ? maxY :
            y;
        mask.style.left = left + 'px';
        mask.style.top = top + 'px';
        var bigX = bigImg.offsetWidth - big.offsetWidth;
        var bigY = bigImg.offsetHeight - big.offsetHeight;
        bigImg.style.left = -left * bigX / maxX + 'px';
        bigImg.style.top = -top * bigY / maxY + 'px';
    });

    previewImg.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
});