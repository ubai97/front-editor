import { withState } from '@wordpress/compose';

(function (blocks, i18n, element, blockEditor, components, compose, editor_block_data) {
    var el = element.createElement,
        __ = i18n.__,
        AlignmentToolbar = blockEditor.AlignmentToolbar,
        FormToggle = components.FormToggle,
        Dropdown = components.Dropdown,
        Button = components.Button,
        BlockControls = blockEditor.BlockControls,
        SelectControl = components.SelectControl,
        withState = compose.withState,
        translations = editor_block_data.translations;

    blocks.registerBlockType('bfe/bfe-block', {
        title: __('Front Editor', 'front-editor'),
        icon: 'edit',
        category: 'common',
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
            post_tags: {
                type: 'string',
                default: 'display'
            }
        },
        example: {},
        edit: function (props) {

            return (
                <div className="editor-block-settings">
                    <h3 className="title">{translations.title}</h3>
                    <div className="setting-wrap">
                        <SelectControl
                            label={translations.post_status}
                            value={props.attributes.editor_post_status}
                            //title={translations.post_status_desc}
                            onChange={(value) => {
                                props.setAttributes({
                                    editor_post_status: value
                                })
                            }}
                            options={[
                                { value: 'pending', label: translations.pending },
                                { value: 'publish', label: translations.publish },
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
                    </div>

                </div>
            );
        },
        save: function (props) {
            return null;
        },
    });
})(window.wp.blocks, window.wp.i18n, window.wp.element, wp.blockEditor, window.wp.components, window.wp.compose, window.editor_block_data);
