(function (blocks, i18n, element, blockEditor) {
    var el = element.createElement,
        __ = i18n.__,
        new_editor = true,
        AlignmentToolbar = blockEditor.AlignmentToolbar,
        BlockControls = blockEditor.BlockControls;

    blocks.registerBlockType('bfe/bfe-block', {
        title: __('Editor Block', 'front-editor'),
        icon: 'edit',
        category: 'common',
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'p',
            },
            alignment: {
                type: 'string',
                default: 'none',
            },
        },
        example: {},
        edit: function (props) {
            
            const {
                attributes: {
                    content,
                    alignment,
                },
                className,
            } = props;
     
            const onChangeContent = ( newContent ) => {
                props.setAttributes( { content: newContent } );
            };
     
            const onChangeAlignment = ( newAlignment ) => {
                props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
            };

            return (
                <div class="bfee-guthen-editor-block">
                    {
                        <BlockControls>
                            <AlignmentToolbar
                                value={alignment}
                                onChange={onChangeAlignment}
                            />
                        </BlockControls>
                    }
                    <h2>Hey i am hear</h2>
                </div>
            );
        },
        save: function (props) {
            return null;
        },
    });
})(window.wp.blocks, window.wp.i18n, window.wp.element, wp.blockEditor);
