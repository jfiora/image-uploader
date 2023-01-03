import React from 'react';
import checkIcon from '../../assets/checkIcon.svg';

const UploadedFile = ({ url }) => {
    url =
        'http://localhost:1337' +
        '/images/1672709085696-MicrosoftTeams-image.png';
    console.log(url);
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
