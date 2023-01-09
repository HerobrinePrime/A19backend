import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqTestToken extends BaseRequest {
    
}

export interface ResTestToken extends BaseResponse {
    username:string
}

export const conf: BaseConf = {
    needLogin: true
}