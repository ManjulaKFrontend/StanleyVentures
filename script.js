// scripts.js
$(document).ready(function () {
    $('.nav-item.dropdown').hover(
        function () {
            $(this).find('.dropdown-menu').first().addClass('show').fadeIn(500);
        },
        function () {
            $(this).find('.dropdown-menu').first().removeClass('show').fadeOut(500);
        }
    );

    $('.dropdown-item.dropdown-toggle').hover(
        function () {
            $(this).next('.dropdown-menu').first().addClass('show').fadeIn(500);
        },
        function () {
            $(this).next('.dropdown-menu').first().removeClass('show').fadeOut(500);
        }
    );
});