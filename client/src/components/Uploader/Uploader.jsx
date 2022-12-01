import React, { useState } from 'react';
import { postImage } from '../../services/api';
import { useDropzone } from 'react-dropzone';
import image from '../../assets/image.svg';

const Uploader = () => {
    const uploadUrl = import.meta.env.VITE_UPLOAD_URL;
    const [uploaded, setUploaded] = useState(false);
    // const { getRootProps, getInputProps } = useDropzone({
    //     accept: 'image/*',
    //     onDrop: (acceptedFiles) => {
    //         console.log(acceptedFiles);
    //         setFile(acceptedFiles[0]);
    //         send();
    //     },
    // });

    const send = (file) => {
        const data = new FormData();
        data.append('file', file);
        postImage(uploadUrl, data);
        setUploaded(true);
    };

    {
        return !uploaded ? (
            <div className='Uploader-container'>
                <h1 className='Uploader-title separator'>Upload your image</h1>
                <form className='Uploader-form' action='#'>
                    <span
                        className='Uploader-form-label separator'
                        htmlFor='file'
                    >
                        File should be Jpeg, Png...
                    </span>

                    {/* <div
                        className='Uploader-dad-container separator'
                        {...getRootProps()}
                    >
                        <img
                            src={image}
                            className='Uploader-input-image'
                            alt='dnd'
                        />
                        <input {...getInputProps()} type='file' id='file' />{' '}
                        <p className='Uploader-input-text'>
                            Drag & Drop your image here
                        </p>
                    </div> */}

                    <span className='Uploader-or separator'>Or</span>
                    <div className='Uploader-cs-container separator'>
                        <input
                            className='Uploader-input'
                            type='file'
                            id='file'
                            accept='.png, .jpg, .jpeg'
                            onChange={(e) => {
                                send(e.target.files[0]);
                            }}
                        />
                        <label
                            className='Uploader-input-label separator'
                            htmlFor='file'
                        >
                            Choose a file
                        </label>
                    </div>
                </form>
            </div>
        ) : (
            <div className='Uploader-container loading'>
                {' '}
                <span>Uploading...</span>
                <div className='progress-bar'></div>
            </div>
        );
    }
};

export default Uploader;
