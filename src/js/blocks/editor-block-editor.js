import { withState } from '@wordpress/compose';

(function (blocks, i18n, element, blockEditor, components, compose, editor_block_data) {
    var el = element.createElement,
        __ = i18n.__,
        AlignmentToolbar = blockEditor.AlignmentToolbar,
        ToggleControl = components.ToggleControl,
        Dropdown = components.Dropdown,
        Button = components.Button,
        BlockControls = blockEditor.BlockControls,
        Disabled = blockEditor.Disabled,
        InputControl = components.__experimentalInputControl,
        SelectControl = components.SelectControl,
        withState = compose.withState,
        translations = editor_block_data.translations,
        editor_pro_settings = editor_block_data.editor_pro_settings;

    blocks.registerBlockType('bfe/bfe-block', {
        title: __('Front Editor', 'front-editor'),
        icon: 'edit',
        category: 'common',
        multiple: false,
        html: false,
        attributes: {
            editor_post_status: {
                type: 'string',
                default: 'pending'
            },
            post_image: {
                type: 'string',
                default: 'display'
            },
            post_category: {
                type: 'string',
                default: 'display'
            },
            category_show_empty: {
                type: 'boolean',
                default: true
            },
            category_multiple: {
                type: 'boolean',
                default: false
            },
            post_tags: {
                type: 'string',
                default: 'display'
            },
            tags_add_new: {
                type: 'boolean',
                default: false
            },
            wp_media_uploader: {
                type: 'boolean',
                default: false
            },
            add_new_button: {
                type: 'string',
                default: 'display'
            },
            editor_image_plugin: {
                type: 'boolean',
                default: true
            },
            editor_header_plugin: {
                type: 'boolean',
                default: true
            },
            editor_embed_plugin: {
                type: 'boolean',
                default: true
            },
            editor_list_plugin: {
                type: 'boolean',
                default: true
            },
            editor_checklist_plugin: {
                type: 'boolean',
                default: true
            },
            editor_quote_plugin: {
                type: 'boolean',
                default: true
            },
            editor_marker_plugin: {
                type: 'boolean',
                default: true
            },
            editor_code_plugin: {
                type: 'boolean',
                default: true
            },
            editor_delimiter_plugin: {
                type: 'boolean',
                default: true
            },
            editor_inlineCode_plugin: {
                type: 'boolean',
                default: true
            },
            editor_linkTool_plugin: {
                type: 'boolean',
                default: true
            },
            editor_table_plugin: {
                type: 'boolean',
                default: false
            },
            editor_gallery_plugin: {
                type: 'boolean',
                default: false
            },
            editor_warning_plugin: {
                type: 'boolean',
                default: false
            },

        },
        edit: function (props) {

            /**
             * Category show empty
             */
            const CategoryShowEmpty = withState({
                checked: props.attributes.category_show_empty,
            })(({ checked, setState }) => (
                <ToggleControl
                    label={translations.show_empty_category}
                    id="category_show_empty"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            category_show_empty: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
            * Category multiple settings
            */
            const CategoryMultiple = withState({
                checked: props.attributes.category_multiple,
            })(({ checked, setState }) => (
                <div className="editor_table_plugin  pro_version">
                    <ToggleControl
                        label={translations.category_multiple}
                        id="category_multiple"
                        help={translations.only_in_pro}
                        checked={checked}
                        className={editor_pro_settings.category_multiple ? '' : "disabled"}
                        onChange={() => setState(state => {
                            props.setAttributes({
                                category_multiple: !state.checked,
                            })
                            return (
                                {
                                    checked: !state.checked
                                }
                            )
                        }
                        )}
                    />
                </div>
            ));

            /**
             * Tags can add new one
             */
            const TagsAddNew = withState({
                checked: props.attributes.tags_add_new,
            })(({ checked, setState }) => (
                <ToggleControl
                    label={translations.tags_add_new}
                    id="tags_add_new"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            tags_add_new: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
             * WP Media Uploader can add new one
             */
            const WP_Media_Uploader = withState({
                checked: props.attributes.wp_media_uploader,
            })(({ checked, setState }) => (
                <div className="editor_table_plugin  pro_version">
                    <ToggleControl
                        label={translations.wp_media_uploader}
                        id="wp_media_uploader"
                        className={editor_pro_settings.wp_media_uploader ? '' : "disabled"}
                        checked={checked}
                        help={translations.only_in_pro}
                        onChange={() => setState(state => {
                            props.setAttributes({
                                wp_media_uploader: !state.checked,
                            })
                            return (
                                {
                                    checked: !state.checked
                                }
                            )
                        }
                        )}
                    />
                </div>
            ));

            /**
             * EditorJS image plugin 
             */
            const EditorImagePlugin = withState({
                checked: props.attributes.editor_image_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="Image block"
                    id="editor_image_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_image_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
             * EditorJS header plugin 
             */
            const EditorHeaderPlugin = withState({
                checked: props.attributes.editor_header_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="Header block"
                    id="editor_header_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_header_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
             * EditorJS Embed plugin 
             */
            const EditorEmbedPlugin = withState({
                checked: props.attributes.editor_embed_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="Embed block"
                    id="editor_embed_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_embed_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
             * EditorJS list plugin 
             */
            const EditorListPlugin = withState({
                checked: props.attributes.editor_list_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="List block"
                    id="editor_list_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_list_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
             * EditorJS checklist plugin 
             */
            const EditorChecklistPlugin = withState({
                checked: props.attributes.editor_checklist_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="Checklist block"
                    id="editor_checklist_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_checklist_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
             * EditorJS Quote plugin 
             */
            const EditorQuotePlugin = withState({
                checked: props.attributes.editor_quote_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="Quote block"
                    id="editor_quote_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_quote_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
             * EditorJS marker plugin 
             */
            const EditorMarkerPlugin = withState({
                checked: props.attributes.editor_marker_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="Marker block"
                    id="editor_marker_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_marker_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
            * EditorJS code plugin 
            */
            const EditorCodePlugin = withState({
                checked: props.attributes.editor_code_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="Code block"
                    id="editor_code_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_code_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));

            /**
             * EditorJS delimiter plugin 
             */
            const EditorDelimiterPlugin = withState({
                checked: props.attributes.editor_delimiter_plugin,
            })(({ checked, setState }) => (
                <ToggleControl
                    label="Delimiter block"
                    id="editor_delimiter_plugin"
                    checked={checked}
                    onChange={() => setState(state => {
                        props.setAttributes({
                            editor_delimiter_plugin: !state.checked,
                        })
                        return (
                            {
                                checked: !state.checked
                            }
                        )
                    }
                    )}
                />
            ));


            /**
             * EditorJS table plugin 
             */
            const EditorTablePlugin = withState({
                checked: props.attributes.editor_table_plugin,
            })(({ checked, setState }) => (
                <div className="editor_table_plugin  pro_version">
                    <ToggleControl
                        label="Table block (PRO)"
                        help={translations.only_in_pro}
                        id="editor_table_plugin"
                        checked={checked}
                        className={editor_pro_settings.table_block ? '' : "disabled"}
                        onChange={() => setState(state => {
                            props.setAttributes({
                                editor_table_plugin: !state.checked,
                            })
                            return (
                                {
                                    checked: !state.checked
                                }
                            )
                        }
                        )}
                    />
                </div>
            ));

            /**
             * EditorJS Warning plugin (PRO)
             */
            const EditorWarningPlugin = withState({
                checked: props.attributes.editor_warning_plugin,
            })(({ checked, setState }) => (
                <div className="editor_warning_plugin  pro_version">
                    <ToggleControl
                        label="Warning block (PRO)"
                        help={translations.only_in_pro}
                        id="editor_warning_plugin"
                        checked={checked}
                        className={editor_pro_settings.warning_block ? '' : "disabled"}
                        onChange={() => setState(state => {
                            props.setAttributes({
                                editor_warning_plugin: !state.checked,
                            })
                            return (
                                {
                                    checked: !state.checked
                                }
                            )
                        }
                        )}
                    />
                </div>
            ));

            /**
             * EditorJS gallery plugin 
             */
            const EditorGalleryPlugin = withState({
                checked: props.attributes.editor_gallery_plugin,
            })(({ checked, setState }) => (
                <div className="editor_gallery_plugin pro_version">
                    <ToggleControl
                        label="Gallery block (PRO)"
                        help={'Will be soon'}
                        id="editor_gallery_plugin"
                        checked={checked}
                        className={editor_pro_settings.gallery_block ? '' : "disabled"}
                        onChange={() => setState(state => {
                            props.setAttributes({
                                editor_gallery_plugin: !state.checked,
                            })
                            return (
                                {
                                    checked: !state.checked
                                }
                            )
                        }
                        )}
                    />
                </div>
            ));



            return (
                <div className="editor-block-settings">
                    <h3 className="title">{translations.title}</h3>
                    <div className="setting-wrap header-settings">
                        <SelectControl
                            label={translations.post_status}
                            value={props.attributes.editor_post_status}
                            title={translations.post_status_desc}
                            onChange={(value) => {
                                props.setAttributes({
                                    editor_post_status: value
                                })
                            }}
                            options={[
                                { value: 'publish', label: translations.publish },
                                { value: 'pending', label: translations.pending },
                            ]}
                        />
                        <SelectControl
                            label={translations.post_image}
                            value={props.attributes.post_image}
                            onChange={(value) => {
                                props.setAttributes({
                                    post_image: value
                                })
                            }}
                            options={[
                                { value: 'display', label: translations.display },
                                { value: 'require', label: translations.require },
                                { value: 'disable', label: translations.disable }
                            ]}
                        />
                        <SelectControl
                            label={translations.post_category}
                            value={props.attributes.post_category}
                            onChange={(value) => {
                                props.setAttributes({
                                    post_category: value
                                })
                            }}
                            options={[
                                { value: 'display', label: translations.display },
                                { value: 'require', label: translations.require },
                                { value: 'disable', label: translations.disable }
                            ]}
                        />

                        <SelectControl
                            label={translations.post_tags}
                            value={props.attributes.post_tags}
                            onChange={(value) => {
                                props.setAttributes({
                                    post_tags: value
                                })
                            }}
                            options={[
                                { value: 'display', label: translations.display },
                                { value: 'require', label: translations.require },
                                { value: 'disable', label: translations.disable }
                            ]}
                        />
                        <SelectControl
                            label={translations.add_new_button}
                            value={props.attributes.add_new_button}
                            onChange={(value) => {
                                props.setAttributes({
                                    add_new_button: value
                                })
                            }}
                            options={[
                                { value: 'display', label: translations.display },
                                { value: 'always_display', label: translations.always_display },
                                { value: 'disable', label: translations.disable }
                            ]}
                        />
                        <WP_Media_Uploader />
                    </div>
                    {(props.attributes.post_category !== 'disable') && <div>
                        <h5>{translations.category_settings_title}</h5>
                        <div className="setting-wrap">
                            <CategoryShowEmpty />
                            <CategoryMultiple />
                        </div>
                    </div>}
                    {(props.attributes.post_tags !== 'disable') && <div>
                        <h5>{translations.tags_settings_title}</h5>
                        <div className="setting-wrap">
                            <TagsAddNew />
                        </div>
                    </div>}
                    <h4 className="title">{translations.editor_settings_title}</h4>
                    <div className="setting-wrap editor-settings">
                        <EditorImagePlugin />
                        <EditorHeaderPlugin />
                        <EditorEmbedPlugin />
                        <EditorListPlugin />
                        <EditorChecklistPlugin />
                        <EditorQuotePlugin />
                        <EditorMarkerPlugin />
                        <EditorCodePlugin />
                        <EditorDelimiterPlugin />
                        <EditorWarningPlugin />
                        <EditorTablePlugin />
                        <EditorGalleryPlugin />
                    </div>
                </div >
            );
        },
        save: function (props) {
            return null;
        },
    });
})(window.wp.blocks, window.wp.i18n, window.wp.element, wp.blockEditor, window.wp.components, window.wp.compose, window.editor_block_data);
