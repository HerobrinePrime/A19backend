import { Gender } from '../../../utils/Gender';
import { BaseResponse, BaseRequest } from '../base';

export interface ReqLogin extends BaseRequest {
    email: string,
    password: string
}

export interface ResLogin extends BaseResponse {
    token: string,
    user: {
        role: string,
        school: string,
        name: string,
        portrait: string,
        email: string,
        number: string,
        gender: number
    }
}

export const conf = {
    needLogin: false
}