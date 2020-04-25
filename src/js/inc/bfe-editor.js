'use strict';

class BfeEditor {

    constructor(bfee_editor, data) {
        this.bfee_editor = new EditorJS(this.editorSettings);
        try {
            this.data = JSON.parse(editor_data);
        }
        catch (e) {
            this.data = editor_data;
        }
    }

    get bfee_data() {
        let data;
        try {
            data = JSON.parse(editor_data);
        }
        catch (e) {
            data = editor_data;
        }

        return data;
    }

    static get get_bfee_data() {
        let data;
        try {
            data = JSON.parse(editor_data);
        }
        catch (e) {
            data = editor_data;
        }

        return data;
    }

    /**
     * Save data from admin block
     * @param {*} data 
     */
    save_data(data) {
        let save_button_messages = this.bfee_data.translations.save_button,
            save_button = document.querySelector('#save-editor-block'),
            editor_block = document.querySelector('#bfe-editor-block'),
            post_id = document.querySelector('#bfe-editor-block').getAttribute('post_id'),
            post_link = document.querySelector('.bfe-editor-view-page a');
        var data = {
            action: 'bfe_update_post',
            post_id: post_id ?? 'new',
            editor_data: data,
        };
        jQuery.ajax({
            type: 'post',
            url: this.bfee_data.ajax_url,
            data: data,
            beforeSend: function (response) {
                save_button.innerHTML = save_button_messages.updating;
            },
            success: function (response) {
                if (response.error) {
                    console.log(response.data);
                } else {
                    console.log(response);
                    save_button.innerHTML = save_button_messages.update;
                    post_link.setAttribute('href', response.data.url);
                    post_link.innerHTML = response.data.url;
                    editor_block.setAttribute('post_id', response.data.post_id)
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
    static uploadImage(file = null, url = null) {
        return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('action', 'bfe_uploading_image')
            if (file !== null) {
                formData.append('image', file)
            }
            if (url !== null) {
                formData.append('image_url', url)
            }
            formData.append('post_id', BfeEditor.get_bfee_data.post_id)
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
            // autofocus: true,
            tools: {

                header: {
                    class: Header,
                    inlineToolbar: true,
                    config: {
                        placeholder: 'Enter a header',
                        defaultLevel: 2
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
                                    return {
                                        "success": 1,
                                        "file": {
                                            "url": data.data.url,
                                        }
                                    };
                                })
                            },
                            uploadByUrl(url) {
                                return BfeEditor.uploadImage(null, url).then(data => {
                                    return {
                                        "success": 1,
                                        "file": {
                                            "url": data.data.url,
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

                //linkTool: LinkTool,

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
                
                if (!this.bfee_data.data) {
                    this.bfee_editor.blocks.renderFromHTML(this.bfee_data.html_post_content).catch( error => {
                        console.log('Error with rendering HTML data ' + error);
                    });
                }
            },
            onChange: () => {
                //this.onChangeSaveData()
            }
        }

    };

}