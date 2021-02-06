import { FormeoEditor, FormeoRenderer } from 'formeo'

export default ($) => {
    var localizeData = window.fe_post_form_data;
    var admin_form_builder_nonce = $('#admin_form_builder_nonce').val();
    var formBuilderContainer = false;

    var options = {
        templates: {
            EditorJS: function (fieldData) {
                return {
                    field: `<div id="EditorJS" class="${fieldData.name}"></div>`,
                    onRender: function () {
                        $(`.${fieldData.name}`);
                    }
                };
            },
        }
    };

    $(window).on('load', () => {
        updateFormBuilder();
    })

    function updateFormBuilder() {
        let post_type = $('#fe_settings_post_type').val();
        wp.ajax.send('fe_get_formBuilder_data', {
            data: {
                post_id: localizeData.post_id,
                post_type: post_type,
                admin_form_builder_nonce: admin_form_builder_nonce
            },
            success: function (response) {
                let formBuilderId = `form-builder`;
                formBuilderContainer = new FormeoEditor({
                    onUpdate: ()=>{
                        console.log('lelele')
                        console.log(formBuilderContainer.formData)
                    },
                    editorContainer: `#${formBuilderId}`,
                    debug: true
                })

                //$('.formBuilder-wrapper').empty().append(`<div id="${formBuilderId}"></div>`);

                var formBuilderOptions = response.formBuilder_options;
                console.log(response);
                /**
                * Init formBuilder
                */
                // $(`#${formBuilderId}`).formBuilder(
                //     { ...options, ...formBuilderOptions }
                // ).promise.then(formBuilder => {
                //     // Disable pro fields
                //     formBuilderOptions.disable_attr.map((val) => {
                //         $(document).find(val).prop('disabled', true)
                //     });
                // });
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    function render_form(){
        if(formBuilderContainer){
            return;
        }
        var formData = formBuilderContainer.formData
        console.log(formData)
        // Then, when you're ready to render the form, use
        var renderer = new FormeoRenderer({
            editorContainer: `#form-render`
        })
        renderer.render(formData)
    }

    $('#fe_settings_post_type').on('change', function (ev) {
        ev.preventDefault();
        updateFormBuilder();
    });

    $('.render').click((ev)=>{
        ev.preventDefault();
        var formData = formBuilderContainer.formData
        console.log(formData)
        // Then, when you're ready to render the form, use
        var renderer = new FormeoRenderer({
            editorContainer: '#form-render'
        })

        renderer.render(formData)
    })
}