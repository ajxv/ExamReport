// Import_data.html
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

function formSubmit1() {
    filepath = $("#filePath").text();
    date = $("#date").val();

    eel.save_file(date, filepath)

    $('.alert').show()
}

// report.html
function formSubmit2() {
    date = $("#date").val();
    department = $("#deanery").val();

    eel.generate_report(date, deanery)

    // var anchor = document.createElement('a');
    // anchor.setAttribute('href', 'file:///D:\\WorkSpace\\ExamReport\\requirements.txt');
    // anchor.setAttribute('download', '');
    // anchor.text = "hello"
    // document.getElementById("downdiv").appendChild(anchor);
    // console.log(date)
    // console.log(department)
}