var $ = jQuery;
if ($("#editor-js")[0]) {


    /**
     * Saving button
     */
    const saveButton = document.querySelectorAll('#editor-js button')[0];

    var editor_data = JSON.parse(editor_data);

    /**
     * To initialize the Editor, create a new instance with configuration object
     * @see docs/installation.md for mode details
     */
    var editor = new EditorJS({
        /**
         * Wrapper of Editor
         */
        holder: 'editor-js',

        /**
         * Tools list
         */
        tools: {
            /**
             * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
             */
            header: {
                class: Header,
                inlineToolbar: ['link'],
                config: {
                    placeholder: 'Header'
                },
                shortcut: 'CMD+SHIFT+H'
            },

            /**
             * Or pass class directly without any configuration
             */
            image: {
                class: ImageTool,
                inlineToolbar: true,
                endpoints: {
                    byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                  }
            },

            list: {
                class: List,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+L'
            },

            checklist: {
                class: Checklist,
                inlineToolbar: true,
            },

            quote: {
                class: Quote,
                inlineToolbar: true,
                config: {
                    quotePlaceholder: 'Enter a quote',
                    captionPlaceholder: 'Quote\'s author',
                },
                shortcut: 'CMD+SHIFT+O'
            },

            warning: Warning,

            marker: {
                class: Marker,
                shortcut: 'CMD+SHIFT+M'
            },

            code: {
                class: CodeTool,
                shortcut: 'CMD+SHIFT+C'
            },

            delimiter: Delimiter,

            inlineCode: {
                class: InlineCode,
                shortcut: 'CMD+SHIFT+C'
            },

            linkTool: LinkTool,

            embed: Embed,

            table: {
                class: Table,
                inlineToolbar: true,
                shortcut: 'CMD+ALT+T'
            },

        },

        /**
         * This Tool will be used as default
         */
        initialBlock: 'paragraph',

        /**
         * Initial Editor data
         */
        data: {
            blocks: editor_data.data
        },
        onReady: function () {
            //saveButton.click();
        },
        onChange: function () {
            //console.log('something changed');
        }
    });

    /**
     * Saving example
     */
    saveButton.addEventListener('click', function () {
        editor.save().then((savedData) => {
            save_data(savedData);
        });
    });

    function save_data(data) {
        var data = {
            action: 'save_post_from_front',
            data: data
        };

        $.ajax({
            type: 'post',
            url: editor_data.ajax_url,
            data: data,
            beforeSend: function (response) {
                saveButton.innerHTML = 'Loading...';
            },
            success: function (response) {
                if (response.error) {
                    saveButton.innerHTML = 'Error';
                    return;
                } else {

                    saveButton.innerHTML = 'Created';
                }
            },
        });
    }
} 