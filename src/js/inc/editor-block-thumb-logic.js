(($) => {

    function readURL(input) {
        if (input.files && input.files[0]) {

            var maxSize = 6291456,
                size = input.files[0].size,
                isOk = maxSize > size;

            if (!isOk) {

                bfe_page_editor.bfee_editor.notifier.show({
                    message: 'Image is too big, please choose another one. Max size can be 6mb',
                    style: 'error',
                });

                return;
            }

            var reader = new FileReader();

            reader.onload = function (e) {
                $('#post_thumbnail_image').attr('style', 'background:url(' + e.target.result + ')');
                $('div.image_loader').addClass('chosen');
                document.querySelector('#bfe-editor .image_loader').setAttribute('thumb_exist', '1');
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }

    $("#img_inp").change(function () {
        readURL(this);
    });

    $('div.image_loader .bfe-remove-image').click(() => {
        $('div.image_loader').removeClass('chosen');
        $("#img_inp").val('');
        document.querySelector('#bfe-editor .image_loader').setAttribute('thumb_exist', '0');
    })

})(jQuery)

