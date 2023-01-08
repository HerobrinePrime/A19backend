import { BaseResponse,BaseRequest } from './base';

export interface ReqLogin extends BaseRequest {
    username:string,
    password:string
}

export interface ResLogin extends BaseResponse {
    token:string 
}

export const conf = {
    needLogin: false
}