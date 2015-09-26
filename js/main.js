$(document).ready()
{
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            $('#nav').slideDown();
        }
        else {
            $('#nav').slideUp();
        }
    }, false);
}