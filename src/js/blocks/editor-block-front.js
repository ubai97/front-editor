import BfeEditor from './../inc/class-bfe-editor.js';

import SlimSelect from 'slim-select';

var $ = jQuery;

if ($("#bfe-editor-block")[0]) {
    const fe_data = window.editor_data;
    let category_select = $('#bfe-category'),
        tags_select = $('#bfe-tags'),
        deselectLabel = '<span >✖</span>',
        is_addable_tags = fe_data.editor_settings.tags_add_new;

    /**
     * SlimSelect for category
     */
    if (category_select.length > 0) {
        new SlimSelect({
            select: '#bfe-category',
            placeholder: category_select.data('placeholder'),
            deselectLabel: deselectLabel,
            allowDeselect: true,
            //addable:(value)=>{return AddableSlimSelect(value)}
        })
    }

    /**
     * SlimSelect for tags
     */
    if (tags_select.length > 0) {
        new SlimSelect({
            select: '#bfe-tags',
            placeholder: tags_select.data('placeholder'),
            hideSelectedOption: true,
            deselectLabel: deselectLabel,
            ...(is_addable_tags
                && { addable: (value) => { return AddableSlimSelect(value) } }
            )
        })
    }


    /**
     * New value adding function
     * @param {*} value 
     */
    function AddableSlimSelect(value) {
        // // return false or null if you do not want to allow value to be submitted
        // if (value.length < 3) {
        //     callback('Need 3 characters')
        //     return
        // }

        // Optional - Return a valid data object. See methods/setData for list of valid options
        return {
            text: value,
            value: value.toLowerCase()
        }
    }

    let button_menu = $('#bfe-editor-block-header .sub-header.top'),
        fixmeTop = button_menu.offset().top;

    $(window).scroll(function () {

        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixmeTop) {
            button_menu.addClass('sticky');
        } else {                                   // apply position: static
            button_menu.removeClass('sticky');
        }

    });


    /**
     * Saving button
     */
    const post_title = document.querySelector('#post_title'),
        saveButton = document.querySelectorAll('#save-editor-block')[0];

    /**
     * To initialize the Editor, create a new instance with configuration object
     * @see docs/installation.md for mode details
     */
    const bfe_page_editor = new BfeEditor();

    /**
     * on title click open caret to fist block
     */
    post_title.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            // Adding caret to fist block
            bfe_page_editor.bfee_editor.caret.focus();
            bfe_page_editor.bfee_editor.toolbar.open();
        }
    });

    /**
     * Saving example
     */
    saveButton.addEventListener('click', function () {
        bfe_page_editor.bfee_editor.save().then((savedData) => {
            bfe_page_editor.save_data(savedData);
        });
    });
}


