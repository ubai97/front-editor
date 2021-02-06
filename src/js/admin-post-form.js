import './vendors/form-builder.min'

export default ($) => {
    let localizeData = window.fe_post_form_data,
        admin_form_builder_nonce = $('#admin_form_builder_nonce').val(),
        formBuilderContainer = false,
        current_forBuilder_controls,
        updated_forBuilder_controls,
        formBuilderOptions;



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
                console.log(response)
                let formBuilderId = `form-builder`;

                $(`#${formBuilderId}`).remove();
                $('.formBuilder-wrapper').empty().append(`<div id="${formBuilderId}"></div>`);

                formBuilderOptions = response.formBuilder_options;

                let templates_obj = formBuilderOptions.temp_back;

                /**
                 * Creating templates using data form backend
                 */
                Object.keys(templates_obj).map((key, index) => {
                    formBuilderOptions.templates[key] = (fieldData) => {
                        return {
                            field: templates_obj[key].field,
                            onRender: function () {
                                $(document.getElementById(fieldData.name));
                            }
                        }
                    }
                });

                /**
                * Init formBuilder
                */
                formBuilderContainer = $(`#${formBuilderId}`).formBuilder(
                    formBuilderOptions
                ).promise.then(formBuilder => {

                    // Remove controls on ajax request if there do not needed
                    builder_control_controls(formBuilderOptions);

                    //
                    add_groups()

                    // Disable pro fields
                    formBuilderOptions.disable_attr.map((val) => {
                        $(document).find(val).prop('disabled', true)
                    });
                });
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    /**
     * Update for builder on post type update
     */
    $('#fe_settings_post_type').on('change', function (ev) {
        ev.preventDefault();
        updateFormBuilder();
    });

    /**
     * Remove controls on ajax request if there do not needed
     * @param {*} formBuilderOptions 
     */
    function builder_control_controls(formBuilderOptions) {
        current_forBuilder_controls = [];
        updated_forBuilder_controls = [];

        // Getting current controls
        $('.frmb-control li').each((index, elem) => {
            let data_type = $(elem).attr('data-type');
            current_forBuilder_controls.push(data_type)
        })

        /**
         * Creat array with updated controls
         */
        Object.keys(formBuilderOptions.temp_back).map((key, index) => {
            updated_forBuilder_controls.push(key)
        });

        /**
         *  default fields and custom fields
         */
        updated_forBuilder_controls = [...formBuilderOptions.defaultControls, ...updated_forBuilder_controls]

        /**
         * Find difference between controls
         */
        let difference = current_forBuilder_controls.filter(x => !updated_forBuilder_controls.includes(x));

        difference.map((val)=>{
            $(`[data-type="${val}"]`).remove();
        })
    }

    function add_groups(){
        let controls_group = formBuilderOptions.controls_group
        Object.keys(controls_group).map((key, index) => {
            $(`<p class="group-name ${key}">${controls_group[key].label}</p>`).insertBefore(`[data-type="${controls_group[key].types[0]}"]`);
        })
        //jQuery("<p>Test</p>").insertBefore('[data-type="tax_post_tag"]');
    }
}