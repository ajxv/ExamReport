function getPathToFile() {
    eel.handleFileUpload()(
        r => {
            $(".file-upload").addClass('active');
            $("#noFile").text(r.split("\\").at(-1).substring(0, 30));
            $("#filePath").text(r);
        }
    );    
};
