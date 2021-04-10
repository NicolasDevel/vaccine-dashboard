import axios from 'axios';

class Client {

    get(url:string){
        return axios.get(url).then(res=> res.data);
    }

}

export default new Client;