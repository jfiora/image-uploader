import React, { useState } from 'react';
import { postImage } from '../../services/api';
import { useDropzone } from 'react-dropzone';
import image from '../../assets/image.svg';

const Uploader = () => {
    const uploadUrl = import.meta.env.VITE_UPLOAD_URL;
    const [file, setFile] = useState();
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles);
            setFile(acceptedFiles[0]);
            send();
        },
    });

    const send = (e) => {
        const data = new FormData();
        data.append('file', file);
        postImage(uploadUrl, data);
    };

    return (
        <div className='Uploader-container'>
            <h1 className='Uploader-title separator'>Upload your image</h1>
            <form className='Uploader-form' action='#'>
                <span className='Uploader-form-label separator' htmlFor='file'>
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
                    <input
                        {...getInputProps()}
                        type='file'
                        id='file'
                        accept='.jpg'
                    />{' '}
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
                        accept='.jpg'
                        onChange={(e) => {
                            const image = e.target.files[0];
                            setFile(image);
                            send();
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
    );
};

export default Uploader;
