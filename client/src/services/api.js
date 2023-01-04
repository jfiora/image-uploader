import * as Axios from 'axios';

export const postImage = async (uploadUrl, data) => {
    try {
        const response = await Axios.post(uploadUrl, data);
        return response.data.fileName;
    } catch (err) {
        console.error(err);
        return '';
    }
};
