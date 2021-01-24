import './vendors/form-builder.min'

export default ($) => {
    jQuery(function ($) {
        var container = document.getElementById('formeo-editor');
        var fields;
        var templates = {

        };
        var options = {
            fields: [{
                label: 'EditorJS',
                attrs: {
                    type: 'EditorJS'
                },
                icon: '<svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="editorjs-logo-a"><stop stop-color="#39FFD7" offset="0%"></stop><stop stop-color="#308EFF" offset="100%"></stop></linearGradient></defs><g fill-rule="nonzero" fill="none"><circle fill="url(#editorjs-logo-a)" cx="42" cy="42" r="42"></circle><rect fill="#FFF" x="38" y="17" width="8" height="50" rx="4"></rect><rect fill="#FFF" x="17" y="38" width="50" height="8" rx="4"></rect></g></svg>'
            }],
            templates: {
                EditorJS: function (fieldData) {
                    return {
                        field: '<span id="' + fieldData.name + '">',
                        onRender: function () {
                            $(document.getElementById(fieldData.name)).html('hi');
                        }
                    };
                }
            },
            disabledFieldButtons: {
                text: ['remove'],
                select: ['edit']
            },
            defaultFields: [
                {
                    className: "form-control",
                    label: "Title",
                    placeholder: "Enter post title",
                    name: "post-title",
                    required: true,
                    type: "text",
                }
            ],
            // Добовление настроек эелемента
            typeUserAttrs: {
                EditorJS: {
                    className: {
                        label: 'Class',
                        options: {
                            'red form-control': 'Red',
                            'green form-control': 'Green',
                            'blue form-control': 'Blue'
                        },
                        style: 'border: 1px solid red'
                    },
                    activateTable: {
                        label: 'Activate Table',
                        value: false,
                        type: 'checkbox',
                    }
                }
            },
            // Удаление настроект элемента
            typeUserDisabledAttrs: {
                'EditorJS': [
                  'name',
                  'description',
                  'required',
                  'inline',
                  'toggle',
                  'placeholder',
                  'access',
                  'value',
                ]
              }
        };
        $(container).formBuilder(
            options
        );
    });
}