var that;
class Tab {
    constructor(id) {
        that = this;
        this.container = document.querySelector(id);
        this.nav = this.container.querySelector('.firstnav');
        this.ul = this.nav.querySelector('ul');
        this.content = this.container.querySelector('.tabscon');
        this.add = this.nav.querySelector('.tabadd');
        this.add.onclick = this.addTab;
        this.init();
    }
    updateNode() {
        this.lis = this.ul.querySelectorAll('li');
        this.sections = this.content.querySelectorAll('section');
        this.removes = this.ul.querySelectorAll('.icon-guanbi');
        this.spans = this.ul.querySelectorAll('li span:first-child');
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.removes[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    addTab() {
        that.clearClass();
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试' + random + '</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.content.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        this.parentNode.remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return;
        index--;
        that.lis[index] && that.lis[index].click();
    }
    editTab() {
        window.getSelection ? window.getSelection().removeAllRanges() : window.selection.empty();
        var value = this.innerHTML;
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = value;
        input.select();
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeydown = function(e) {
            if (e.keyCode == 13) {
                this.blur();
            }
        };
    }
}

new Tab('#tab');