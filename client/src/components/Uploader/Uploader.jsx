import * as Axios from "axios";
import React, {useState} from "react";
import image from '../../assets/image.svg';

const Uploader = () => {
    const uploadUrl = import.meta.env.VITE_UPLOAD_URL;
    const [file, setFile] = useState();
    const send = e => {
        const data = new FormData();
        data.append('file', file);

        Axios.post(uploadUrl, data)
             .then(res => console.log(uploadUrl))
             .catch(e => console.log(uploadUrl));
    }

    return (
        <div className="Uploader-container">
                <h1 className="Uploader-title">Upload your image</h1>
            <form className="Uploader-form" action="#">
                <label className="Uploader-form-label" htmlFor="file">File should be Jpeg, Png...</label>
                <div className="Uploader-dad-container"></div>
                <span className="Uploader-or">Or</span>
                <div className="Uploader-cs-container">
                    <input className="Uploader-input" type='file' id="file" accept=".jpg" onChange={e => {
                        const image = e.target.files[0];
                        setFile(image);
                        send();
                    }}/>
                    <label className="Uploader-input-label" for='file'>Choose a file</label>
                </div>
            </form> 
        </div>
    );
}

export default Uploader;