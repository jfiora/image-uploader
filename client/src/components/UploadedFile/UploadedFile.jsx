import React from 'react';
import checkIcon from '../../assets/checkIcon.svg';
import useImageStore from '../../zustand/stores/useImageStore';

const UploadedFile = () => {
    const photo = useImageStore((state) => state.photo);
    const url = import.meta.env.VITE_HOST + photo;
    return (
        <div className='Uploader-container'>
            <section className='header-uploaded'>
                <span>
                    <img src={checkIcon}></img>
                </span>
                <span>Uploaded Successfully!</span>
            </section>
            <section className='image-uploaded'>
                <img src={url}></img>
            </section>
            <section className='link-uploaded'>
                <input value={url} readOnly></input>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(url);
                    }}
                >
                    Copy link
                </button>
            </section>
        </div>
    );
};

export default UploadedFile;
