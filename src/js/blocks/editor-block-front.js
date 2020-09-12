import BfeEditor from './../inc/class-bfe-editor.js';

var $ = jQuery;

if ($("#bfe-editor-block")[0]) {

    /**
     * Select2 for category
     */
    $('#bfe-category').select2({
        theme: 'material',
        placeholder: () => {
            $(this).data('placeholder');
        }
    });

    $(".select2-selection__arrow")
        .addClass("material-icons")
        .html("arrow_drop_down");

    /**
     * Select2 for tags
     */
    $('#bfe-tags').select2({
        theme: 'material',
        multiple: true,
        width: 'resolve',
        //tags: true,
        placeholder: () => {
            $(this).data('placeholder');
        }
    });

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