import * as Axios from 'axios';

export const postImage = (uploadUrl, data) => {
    Axios.post(uploadUrl, data)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
};
