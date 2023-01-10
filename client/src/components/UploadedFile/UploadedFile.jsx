import React from 'react';
import checkIcon from '../../assets/checkIcon.svg';

const UploadedFile = ({ image }) => {
    return (
        <div className='Uploader-container uploaded'>
            <section className='header-uploaded'>
                <div className='header-uploaded-image'>
                    <img src={checkIcon}></img>
                </div>
                <span>Uploaded Successfully!</span>
            </section>
            <section className='image-uploaded'>
                <img src={image}></img>
            </section>
            <section className='link-uploaded'>
                <input value={image} readOnly></input>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(image);
                    }}
                >
                    Copy Link
                </button>
            </section>
        </div>
    );
};

export default UploadedFile;
