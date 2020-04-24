var $ = jQuery;
if ($("#bfe-editor-block")[0]) {


    /**
     * Saving button
     */
    const saveButton = document.querySelectorAll('#bfe-editor-block button')[0];

    var editor_data = JSON.parse(editor_data);

    /**
     * To initialize the Editor, create a new instance with configuration object
     * @see docs/installation.md for mode details
     */
    var editor = new BfeEditor();

    /**
     * Saving example
     */
    saveButton.addEventListener('click', function () {
        editor.bfee_editor.save().then((savedData) => {
            editor.save_data(savedData);
        });
    });
} 