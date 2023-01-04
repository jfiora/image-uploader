import React from 'react';
import checkIcon from '../../assets/checkIcon.svg';

const UploadedFile = ({ image }) => {
    return (
        <div className='Uploader-container'>
            <section className='header-uploaded'>
                <span>
                    <img src={checkIcon}></img>
                </span>
                <span>Uploaded Successfully!</span>
            </section>
            <section className='image-uploaded'>
                <img src={image}></img>
            </section>
            <section className='link-uploaded'>
                <input value={image} readOnly></input>
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
