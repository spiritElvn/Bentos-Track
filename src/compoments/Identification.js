import React from "react";
import '../styles/index.css';

const IdentificationWrapper = function () {
    return (
        <div className="section section_identification padding-0-6 bg-fixed">
            <div className="section_identification_wrappper wrapper text-white">
                <h2>Распознавание моллюска</h2>
                <form className="section_identification_form" id="upload-form" method="POST" encType="multipart/form-data" onClick={SubmitForm}>
                    <input className="section_identification_input" type="file" name="file" id="file-input"/>
                    <button className="section_identification_button" type="submit">Submit</button>
                </form>
                <div id="result">

                </div>
            </div>
        </div>
    )
}
function SubmitForm(){    const identificationForm = document.getElementById("upload-form");
    console.log(identificationForm)
    identificationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData();
        const fileInput = document.getElementById('file-input');
        formData.append('file', fileInput.files[0]);

        fetch('/process_image', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').innerHTML = '<img src="' + data.processed_image_url + '" alt="Processed Image">';
            })
            .catch(error => console.error('Error:', error));
    });

}


export default IdentificationWrapper;