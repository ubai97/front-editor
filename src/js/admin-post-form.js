import './vendors/form-builder.min'

export default ($) => {

    var container = document.getElementById('form-builder');
    var localizeData = window.fe_post_form_data
    var formBuilderOptions = localizeData.formBuilder_options
    console.log(formBuilderOptions)

    var options = {
        templates: {
            EditorJS: function (fieldData) {
                return {
                    field: '<div id="EditorJS" class="' + fieldData.name + '"></div>',
                    onRender: function () {
                        $('.' + fieldData.name);
                    }
                };
            }
        }
    };

    console.log({ ...options, ...formBuilderOptions })

    $(container).formBuilder(
        { ...options, ...formBuilderOptions }
    );
}