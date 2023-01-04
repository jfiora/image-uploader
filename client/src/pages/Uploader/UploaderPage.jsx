import Uploader from '../../components/Uploader/Uploader';
import UploadedFile from '../../components/UploadedFile/UploadedFile';
import React from 'react';
import useImageStore from '../../zustand/stores/useImageStore';

const UploaderPage = () => {
    const photo = useImageStore((state) => state.photo);
    const url = import.meta.env.VITE_HOST + photo;

    if (photo === '') {
        return <Uploader />;
    } else {
        return <UploadedFile image={url} />;
    }
};

export default UploaderPage;
