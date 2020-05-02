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
            editor_block = document.querySelector('#bfe-editor'),
            post_id = document.querySelector('#bfe-editor').getAttribute('post_id'),
            post_link = document.querySelector('.bfe-editor-view-page a'),
            post_title = document.querySelector('#post_title').value,
            thumb_exist = document.querySelector('#bfe-editor .image_loader'),
            category = document.querySelector("#bfe-category"),
            post_type = document.querySelector("#bfe-post-type");

        const formData = new FormData();

        formData.append('action', 'bfe_update_post');

        formData.append('post_title', post_title);

        if (bfe_selected_file) {
            formData.append('image', bfe_selected_file);
        }

        if (thumb_exist) {
            formData.append('thumb_exist', thumb_exist.getAttribute('thumb_exist'));
        } else {
            formData.append('thumb_exist', 0);
        }

        if (category) {
            selected_category = category.options[category.selectedIndex].value;
            formData.append('category', selected_category);
        }

        if (post_type) {
            selected_post_type = post_type.options[post_type.selectedIndex].value;
            formData.append('post_type', selected_post_type);
        }

        formData.append('post_id', post_id ?? 'new');

        formData.append('nonce', BfeEditor.get_bfee_data.nonce);

        formData.append('editor_data', JSON.stringify(data));

        save_button.innerHTML = save_button_messages.updating;

        fetch(BfeEditor.get_bfee_data.ajax_url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    save_button.innerHTML = save_button_messages.update;
                    post_link.setAttribute('href', data.data.url);
                    post_link.innerHTML = data.data.url;
                    editor_block.setAttribute('post_id', data.data.post_id)
                    this.bfee_editor.notifier.show({
                        message: data.data.message,
                        style: 'success',
                    });
                } else {
                    save_button.innerHTML = save_button_messages.update;
                    this.bfee_editor.notifier.show({
                        message: data.data.message ?? 'Something goes wrong try later',
                        style: 'error',
                    });
                }
            }).catch()
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
            autofocus: true,
            tools: {

                header: {
                    class: Header,
                    inlineToolbar: true,
                    config: {
                        placeholder: 'Enter a header',
                        levels: [2, 3, 4],
                        defaultLevel: 3
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
                blocks: this.bfee_data.data.blocks
            },
            onReady: () => {
                if (!this.bfee_data.data) {
                    this.bfee_editor.blocks.renderFromHTML(this.bfee_data.html_post_content)
                        .catch(error => {
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