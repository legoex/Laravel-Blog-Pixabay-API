$(document).ready(function () {
    postName = $('#title').val();
    imgArray = [];
    $("#getImagePopupButton").on('click', function () {
        getImage(postName);
    });
    $("#nextImageButton").on('click', function () {
        getImage(postName);
    });
    $("#addImageButton").on('click', function () {
        img = $('#pixbayImg').attr('src');
        $('#body').val('<img src="' + img + '"></img>' + $('#body').val());
    });
    $('#previousImageButton').on('click', function () {
        $('#pixbayImg').attr('src', imgArray.pop());
    });

});


function getImage(postName) {

    $.ajax({
        url: '/admin/pixabay',
        type: 'GET',
        dataType: 'json',
        data: {postName: postName},
        beforeSend: function () {
            $('#pixbayImg').hide();
            $('#loading').show();
        },
        success: function (data) {
            $('#loading').hide();
            imgArray.push(data);
            $('#pixbayImg').attr('src', data).on('load', function () {
                $('#pixbayImg').show();
            });

        },
        error: function (data) {
            console.log('error' + data);
        }
    });
}
