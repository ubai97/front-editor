(function (blocks, i18n, element, bfee_data, BfeEditor) {
    var el = element.createElement,
        __ = i18n.__,
        bfee_data = BfeEditor.get_bfee_data,
        new_editor = true,
        bfee_editor;

    blocks.registerBlockType('bfe/bfe-block', {
        title: __('Editor Block', 'BFE'),
        icon: 'edit',
        category: 'common',
        attributes: {
            selectedDepartment: {
                type: 'string'
            },
        },
        example: {},
        edit: function (props) {
            return (
                <div class="bfee-guthen-editor-block">
                    <h2>{BfeEditor.get_bfee_data.translations.gutenberg_editor_block_text}</h2>
                </div>
            );
        },
        save: function (props) {
            return null;
        },
    });
})(window.wp.blocks, window.wp.i18n, window.wp.element, editor_data, BfeEditor);
