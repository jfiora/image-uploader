import React, { useState } from 'react';
import { postImage } from '../../services/api';
import { useDropzone } from 'react-dropzone';
import image from '../../assets/image.svg';
import useImageStore from '../../zustand/stores/useImageStore';

const Uploader = () => {
    const uploadUrl = import.meta.env.VITE_UPLOAD_URL;
    const setImage = useImageStore((state) => state.addImage);
    const [uploaded, setUploaded] = useState(false);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            send(acceptedFiles[0]);
        },
    });
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const send = async (file) => {
        setUploaded(true);
        const data = new FormData();
        data.append('file', file);
        const postApiCall = postImage(uploadUrl, data);
        await delay(2000);
        postApiCall.then((res) => {
            setImage(res);
        });
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

                    <div
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
                    </div>

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
