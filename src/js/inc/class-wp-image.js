export default class WPImage {
    static get toolbox() {
        return {
            title: 'Image & Gallery',
            icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
        };
    }

    constructor({ data, api, config }) {
        this.api = api;
        this.config = config || {};
        this.data = data;
        // ... this.wrapper
        // ... this.settings
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('fe_wp_image_wrap');
        // Uploading files
        var file_frame;
        // TODO remove jquery in the future
        const $ = window.jQuery;

        const wp_image_wrap = this.wrapper;
        
        /**
         * If data already exist
         */
        if (this.data) {
            this.data.map((attachment) => {
                let image = document.createElement('img');

                image.src = attachment.url;
                image.setAttribute("img_id", attachment.id);

                wp_image_wrap.appendChild(image);
            })

            return this.wrapper;
        }

        const wp_media_button = document.createElement('button');
        wp_media_button.classList.add('image_loader');

        wp_media_button.innerHTML = 'Click to upload';
        wp_media_button.addEventListener('click', (event) => {
            wp_media_button.remove();
            // If the media frame already exists, reopen it.
            if (file_frame) {
                file_frame.open();
                return;
            }

            // Create the media frame.
            file_frame = window.wp.media.frames.file_frame = wp.media({
                title: $(this).data('uploader_title'),
                button: {
                    text: $(this).data('uploader_button_text'),
                },
                multiple: true  // Set to true to allow multiple files to be selected
            });

            // When an image is selected, run a callback.
            file_frame.on('select', () => {
                // We set multiple to false so only get one image from the uploader
                var selection = file_frame.state().get('selection'),
                    attachment_ids = selection.map((attachment) => {
                        attachment = attachment.toJSON();
                        var array = { id: attachment.id, url: attachment.url };
                        let image = document.createElement('img');

                        image.src = attachment.url;
                        image.setAttribute("img_id", attachment.id);

                        wp_image_wrap.appendChild(image);

                        return array;
                    }).join();
            });
            file_frame.open();
        });

        this.wrapper.appendChild(wp_media_button);

        return this.wrapper;
    }

    save(blockContent) {

        let [...attachments] = [...blockContent.querySelectorAll('img')].map((attachment) => {
            return {
                'id': attachment.getAttribute('img_id'),
                'url': attachment.src
            };
        });

        console.log(attachments);
        return attachments;
    }
}