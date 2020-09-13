'use strict';

import EditorJS from '@editorjs/editorjs';

import Header from '@editorjs/header';

import ImageTool from '@editorjs/image';

import Embed from '@editorjs/embed';

import Quote from '@editorjs/quote';

import Marker from '@editorjs/marker';

import CodeTool from '@editorjs/code';

import LinkTool from '@editorjs/link';

import List from '@editorjs/list';

import Delimiter from '@editorjs/delimiter';

import InlineCode from '@editorjs/inline-code';

import RawTool from '@editorjs/raw';

import Warning from '@editorjs/warning';

import Table from '@editorjs/table';

import Checklist from '@editorjs/checklist';

export default class BfeEditor {


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
            post_link = document.querySelector('.view-page'),
            post_title = document.querySelector('#post_title').value,
            thumb_exist = document.querySelector('#bfe-editor .image_loader'),
            category = document.querySelector("#bfe-category"),
            tags = document.querySelector("#bfe-tags"),
            post_type = document.querySelector("#bfe-post-type"),
            bfe_selected_file = document.querySelector('#img_inp').files[0],
            editor_post_id = document.querySelector('#bfe-editor').getAttribute('editor_post_id');

        const formData = new FormData();

        formData.append('action', 'bfe_update_post');

        formData.append('post_title', post_title);

        formData.append('editor_post_id', editor_post_id);

        /**
         * Post image
         */
        if (bfe_selected_file) {
            formData.append('image', bfe_selected_file);
        }

        /**
         * Sending exist or not post image to understand delete or not it from post
         */
        if (thumb_exist) {
            formData.append('thumb_exist', thumb_exist.getAttribute('thumb_exist'));
        } else {
            formData.append('thumb_exist', 0);
        }

        if (category) {
            let selected_category = category.options[category.selectedIndex].value;
            formData.append('category', selected_category);
        }

        if (tags) {
            let selected_tags = jQuery(tags).select2("val");
            console.log(selected_tags);
            formData.append('tags', selected_tags);
        }

        if (post_type) {
            let selected_post_type = post_type.options[post_type.selectedIndex].value;
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

                    /**
                     * New post add link and show the button
                     */
                    post_link.setAttribute('href', data.data.url);
                    post_link.classList.remove("hide");

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
            const formData = new FormData();

            let post_id = document.querySelector('#bfe-editor').getAttribute('post_id');

            formData.append('action', 'bfe_uploading_image')

            formData.append('post_id', post_id)

            if (file !== null) {
                formData.append('image', file)
            }
            if (url !== null) {
                formData.append('image_url', url)
            }
            
            fetch(BfeEditor.get_bfee_data.ajax_url, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.success) {
                        resolve(data);
                    } else {
                        resolve(data);
                    }
                }).catch()
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
                                    if (!data.success) {
                                        BfeEditor.bfee_editor.notifier.show({
                                            message: data.data.message ?? 'Something goes wrong try later',
                                            style: 'error',
                                        });
                                        return { "success": 0 };
                                    }
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
                                    if (!data.success) {
                                        BfeEditor.bfee_editor.notifier.show({
                                            message: data.data.message ?? 'Something goes wrong try later',
                                            style: 'error',
                                        });
                                        return { "success": 0 };
                                    }
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
                console.log(this.bfee_data.data);
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