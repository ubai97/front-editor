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

        $('#post_thumbnail_image').removeAttr('att-id');

        document.querySelector('#bfe-editor .image_loader').setAttribute('thumb_exist', '0');
    })


    /**
     * If WP Media Uploader is enabled for post thumb image
     */
    if (window.editor_data.editor_settings.wp_media_uploader) {
        // Uploading files
        var file_frame;

        $('.image_loader input').on('click', function (event) {
            event.preventDefault();

            // If the media frame already exists, reopen it.
            if (file_frame) {
                file_frame.open();
                return;
            }

            // Create the media frame.
            file_frame = wp.media.frames.file_frame = wp.media({
                title: $(this).data('uploader_title'),
                button: {
                    text: $(this).data('uploader_button_text'),
                },
                multiple: false  // Set to true to allow multiple files to be selected
            });

            // When an image is selected, run a callback.
            file_frame.on('select', function () {
                // We set multiple to false so only get one image from the uploader
                var selection = file_frame.state().get('selection').first().toJSON(),
                    post_thumbnail_image = $('#post_thumbnail_image');

                console.log(selection.url)

                $('div.image_loader').addClass('chosen');
                post_thumbnail_image.attr('src', selection.url);
                post_thumbnail_image.attr('att-id', selection.id);

                // var attachment_ids = selection.map(function (attachment) {
                //     attachment = attachment.toJSON();
                //     var array = {id:attachment.id,url:attachment.url}
                //     return array;
                // }).join();


            });
            file_frame.open();
        });
    }


})(jQuery)

