// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


$(document).ready(function () {
    $('#calculate').click(function () {
        // Get input values
        var hours = parseFloat($('#hours').val());
        var rate = parseFloat($('#rate').val().replace('$', ''));

        // Validation
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number for hours.');
            return;
        }

        // Calculate total
        var total = hours * rate;

        // Display total
        $('#total').val('$' + total.toFixed(2));
    });
});
