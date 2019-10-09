$(document).ready(function () {
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    })
    
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

