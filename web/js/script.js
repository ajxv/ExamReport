function getPathToFile() {
    eel.handleFileUpload()(
        r => {
            $(".file-upload").addClass('active');
            $("#noFile").text(r.split("\\").at(-1).substring(0, 30));
            $("#filePath").text(r);
            $('#submit-btn').removeAttr('disabled');
        }
    );    
};

function formSubmit() {
    filepath = $("#filePath").text();
    date = $("#date").val();

    eel.save_file(date, filepath)

    $('.alert').show()
    
    console.log(date)
    console.log(filepath)
}
