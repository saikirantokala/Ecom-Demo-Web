import { controllerUrl } from '../Config';
import { internalErrorCode, internalErrorTitle } from './Strings';
import axios from 'axios';

export const GetUrl = (clientName, token,  history) => {

    const data = {
        client_name: clientName,
        demo_token: token
    }

    axios({
        method: 'post',
        url: controllerUrl + '/demo',
        data: data
    }).then((res) => {
        console.log("Error:" + JSON.stringify(res))
        if (res.data.status === "error") {
            sessionStorage.setItem('response_code', res.data.code);
            sessionStorage.setItem('response_title', res.data.title);
            sessionStorage.setItem('response_msg', res.data.msg);
            history.push("/error");
        }
        else {
            window.open(res.data.url, "_blank");
            //history.push("/process");
        }
    })
        .catch((error) => {
            console.log("Error:" + JSON.stringify(error))
            let errMsg = (error.message);
            sessionStorage.setItem('response_msg', error.message);
            sessionStorage.setItem('response_code', internalErrorCode);
            sessionStorage.setItem('response_title', internalErrorTitle);
            history.push("/error");
        });
}


export const isNullOrEmpty = (str) => {
    if ((str == "") || (str == null) || (str == "null") || (str == undefined) || (str == "undefined")) {
        return true;
    }
    return false;
}