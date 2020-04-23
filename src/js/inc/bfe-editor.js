'use strict';

class BfeEditor {

    constructor(bfee_editor, data) {
        this.bfee_editor = new EditorJS(this.editorSettings);
        this.data = JSON.parse(editor_data);
    }

    get bfee_data() {
        return JSON.parse(editor_data);
    }

    static get get_bfee_data() {
        return JSON.parse(editor_data);
    }

    /**
     * Save data from admin block
     * @param {*} data 
     */
    save_data(data) {
        var data = {
            action: 'save_post_wp_admin_block',
            data: data
        };

        jQuery.ajax({
            type: 'post',
            url: this.bfee_data.ajax_url,
            data: data,
            beforeSend: function (response) {
                console.log('sending');
            },
            success: function (response) {
                if (response.error) {
                    // console.log('error');
                    return;
                } else {
                    console.log('good');
                }
            },
        });
    }

    /**
     * Save on change data
     */
    onChangeSaveData() {
        this.bfee_editor.save().then((data) => {
            this.save_data(data);
        });
    }

    /**
     * uploading image
     */
    static uploadImage(file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('image', file)
            formData.append('action', 'bfe_uploading_image')
            fetch(BfeEditor.get_bfee_data.ajax_url, {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        let response_json = response.json();
                        
                        resolve(response_json);
                    }

                })
        })
    }


    /**
     * Setting is set here
     */
    get editorSettings() {

        return {
            holder: 'bfe-editor-block',

            tools: {

                header: {
                    class: Header,
                    inlineToolbar: ['link'],
                    config: {
                        placeholder: 'Header'
                    },
                    shortcut: 'CMD+SHIFT+H'
                },

                image: {
                    class: ImageTool,
                    inlineToolbar: true,
                    config: {
                        uploader: {
                            uploadByFile(file) {
                                return BfeEditor.uploadImage(file).then(data => {
                                    console.log(data);
                                    return {
                                        "success": 1,
                                        "file": {
                                            "url": data.data.url
                                        }

                                    };
                                })
                            }

                        }

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

            initialBlock: 'paragraph',

            data: {
                blocks: this.bfee_data.data
            },
            onReady: () => {
                //saveButton.click();
            },
            onChange: () => {
                //this.onChangeSaveData()
            }
        }

    };

}