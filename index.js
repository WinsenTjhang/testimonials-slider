function change() {
    changeQuote()
    changeImg()
}

var durIn = 1200;
var durOut = 1;

function changeQuote() {
    if ($('.quote1').is(':visible')) {
        $('.quote1').fadeOut(durOut);
        $('.quote2').fadeIn(durIn);
    } else {
        $('.quote1').fadeIn(durIn);
        $('.quote2').fadeOut(durOut).delay(100);
    }
}

function changeImg() {
    if ($('.img1').hasClass("show")) {
        $('.img1').removeClass("show");
        $('.img2').addClass("show");
    } else {
        $('.img1').addClass("show");
        $('.img2').removeClass("show");
    }
}
