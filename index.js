// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


$(document).ready(function () {
    $('#submit').click(function (event) {
        event.preventDefault();
        var url = $('#domainUrl').val();
        var headers = {};//{ 'X-Custom-Header': 'value' };
        $.get({
            url: url,
            data: {},
            headers: headers
        }, function (response) {
            console.log(response, url);
            $('#requestResult').text(response + ' ' + url);
        }).fail(function () {
            $('#requestResult').text('error');
        })

        /*fetch(url, {})
            .then(response => response.json())
            .then(function (data) { console.log(data); });*/
    });

    $('#clear').click(function (event) {
        event.preventDefault();
        $('#requestResult').text("");
    });
});


