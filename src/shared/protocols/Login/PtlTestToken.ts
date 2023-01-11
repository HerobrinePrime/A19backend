import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqTestToken extends BaseRequest {

}

export interface ResTestToken extends BaseResponse {
    user: {
        role: string,
        school: string,
        name: string,
        portrait: string,
        email: string,
        number: string,
        gender: number
    },
}

export const conf: BaseConf = {
    needLogin: true
}