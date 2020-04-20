(function (blocks, components, i18n, element, EditorJS) {
    var el = element.createElement;
    var __ = i18n.__;

    blocks.registerBlockType('bfe/bfe-block', {
        title: __('Editor Block', 'BFE'),
        icon: 'edit',
        category: 'common',
        attributes: {
            selectedDepartment: {
                type: 'string'
            },
            teamShowCount: {
                type: 'string'
            }
        },
        example: {},
        edit: function (props) {

            var editorSettings = {
                /**
                 * Wrapper of Editor
                 */
                holder: 'bfe-editor-block',

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
                    //blocks: editor_data.data
                },
                onReady: function () {
                    //saveButton.click();
                },
                onChange: function () {
                    //console.log('something changed');
                }
            }
            /**
             * To initialize the Editor, create a new instance with configuration object
             * @see docs/installation.md for mode details
             */

            function initEditor() {
                var editor = new EditorJS(editorSettings);
            }


            return (
                el(
                    "div",
                    {
                        id: 'bfe-editor-block',
                        ref: initEditor
                    },
                    null
                )
            );
        },
        save: function (props) {
            return null;
        },
    });
})(window.wp.blocks, window.wp.components, window.wp.i18n, window.wp.element, EditorJS);
