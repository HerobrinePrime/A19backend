import { BaseResponse, BaseRequest } from '../base';

export interface ReqLogin extends BaseRequest {
    username: string,
    password: string
}

export interface ResLogin extends BaseResponse {
    token: string,
    role: string,
    username:string
}

export const conf = {
    needLogin: false
}