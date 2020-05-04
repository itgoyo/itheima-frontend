window.onload = function() {
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');

    var telReg = /^1[3|4|5|7|8][0-9]{9}$/;
    var qqReg = /^[1-9]\d{4,}$/;
    var ncReg = /^[\u4e00-\u9fa5]{2,8}$/;
    var msgReg = /^\d{6}$/;
    var pwdReg = /^[a-zA-Z0-9_-]{6,16}$/;

    checkInput(tel, telReg);
    checkInput(qq, qqReg);
    checkInput(nc, ncReg);
    checkInput(msg, msgReg);
    checkInput(pwd, pwdReg);

    function checkInput(el, regex) {
        el.onblur = function() {
            if (regex.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入';
            }
        }
    }

    surepwd.onblur = function() {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';
        }
    };
};