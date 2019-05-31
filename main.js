$(function () {

    let sliderImages = $('.slider-container img');
    let slidesCount = sliderImages.length;
    let currebtSlide = 1;
    let sliderNumberElement = $('#slider-number');
    let prev = $('#prev');
    let next = $('#next');
    let paginationItem;

    let paginationElement = $('<ul></ul>').attr('id', 'pagination-ul').appendTo($('#indicators'));

    for (let i = 1; i < slidesCount + 1; i++) {
        paginationItem = $('<li></li>').attr('data-index', i).text(i);
        paginationItem.appendTo(paginationElement);
        paginationItem.on('click', function () {
            currebtSlide = parseInt($(this).attr('data-index'));
            checker();
        })
    };

    checker();

    prev.on('click', function () {
        if ($('.prev').hasClass('disabled')) {
            return false;
        } else {
            currebtSlide--;
            checker();
        }
    });

    next.on('click', function () {
        if ($('.next').hasClass('disabled')) {
            return false;
        } else {
            currebtSlide++;
            checker();
        }
    });

    function checker() {
        sliderNumberElement.text('Slide #' + currebtSlide + ' of ' + slidesCount);
        sliderImages.removeClass('active');
        sliderImages.eq(currebtSlide - 1).addClass('active');
        paginationElement.children().removeClass('active');
        paginationElement.children().eq(currebtSlide - 1).addClass('active');
        if (currebtSlide === 1) {
            $('.prev').addClass('disabled');
        } else {
            $('.prev').removeClass('disabled');
        }
        if (currebtSlide == slidesCount) {
            $('.next').addClass('disabled');
        } else {
            $('.next').removeClass('disabled');
        }
    }
});