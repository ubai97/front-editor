(function (blocks, components, i18n, element) {
    var el = element.createElement;
    var __ = i18n.__;

    blocks.registerBlockType('bfe/bfe-block', {
        title: __('Editor Block', 'BFE'),
        icon: 'admin-users',
        category: 'layout',
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

            if (!props.attributes.departments) {
                return 'Loading...';
            }

            if (!props.attributes.departments && props.attributes.departments.length === 0) {
                return 'No categories found... please add some!'
            }

            console.log(props.attributes);

            function updateDepartment(e) {
                props.setAttributes({
                    selectedDepartment: e.target.value,
                });
            }

            function updateTeamCount(e) {
                props.setAttributes({
                    teamShowCount: e.target.value,
                });
            }

            return (
                el(
                    "div",
                    null,
                    el(
                        "h5",
                        null,
                        "Choose options to display team"
                    ),
                    el("label", null, "Select department "),
                    el(
                        "select",
                        {
                            onChange: updateDepartment,
                            value: props.attributes.selectedDepartment
                        },
                        props.attributes.departments.map(department => {
                            return (
                                el("option", {
                                    value: department.term_id,
                                    key: department.term_id,
                                    data_key: department.term_id
                                }, department.name)
                            );
                        })
                    ),
                    el("label", null, " Count to show "),
                    el("input",
                        {
                            type: 'text',
                            placeholder: 'Default 5',
                            value: props.attributes.teamShowCount,
                            onChange: updateTeamCount
                        },
                        null)
                )
            );
        },
        save: function (props) {
            return null;
        },
    });
})(window.wp.blocks, window.wp.components, window.wp.i18n, window.wp.element);
