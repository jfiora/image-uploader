import * as Axios from "axios";
import React, {useState} from "react";
import image from '../assets/image.svg';

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
        <div className="Uploader">
                <h1 className="title">Upload your image</h1>
            <form action="#">
                <div>
                    <label htmlFor="file">File should be Jpeg, Png...</label>
                    <input type='file' id="file" accept=".jpg" onChange={e => {
                        const image = e.target.files[0];
                        setFile(image);
                    }}/>
                </div>
            </form> 
            <button onClick={send}>Send</button>
        </div>
    );
}

export default Uploader;