
import axios from 'axios';
import Qs from 'qs';


let http = axios.create({
    transformRequest: [function (data) {
        return Qs.stringify(data)
    }]
});

export default http