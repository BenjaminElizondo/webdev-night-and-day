$(document).ready(function () {
    $('body').click(function () {
        if ($('body').hasClass('black')) {
            $('body').removeClass('black').addClass('white');
        }
        else {
            $('body').removeClass('white').addClass('black');
        }
    });
});
