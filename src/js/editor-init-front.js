var $ = jQuery;
if ($("#bfe-editor-block")[0]) {


    /**
     * Saving button
     */
    const saveButton = document.querySelectorAll('#save-editor-block')[0];

    var editor_data = JSON.parse(editor_data);

    /**
     * To initialize the Editor, create a new instance with configuration object
     * @see docs/installation.md for mode details
     */
    const bfe_page_editor = new BfeEditor();

    /**
     * Saving example
     */
    saveButton.addEventListener('click', function () {
        bfe_page_editor.bfee_editor.save().then((savedData) => {
            bfe_page_editor.save_data(savedData);
        });
    });
} 