(function (blocks,i18n, element, EditorJS, bfee_data, $, BfeEditor) {
    var el = element.createElement,
        __ = i18n.__,
        bfee_data = JSON.parse(bfee_data),
        ajax_url = bfee_data.ajax_url,
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

            var initEditor = function () {
                if (new_editor) {
                    new_editor = false;
                    bfee_editor = new BfeEditor();
                }
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
})(window.wp.blocks,window.wp.i18n, window.wp.element, EditorJS, editor_data, jQuery, BfeEditor );
