import { BaseResponse,BaseRequest } from './base';

export interface ReqSend extends BaseRequest{
    content: string,
}

export interface ResSend extends BaseResponse {
    time: Date
}

export const conf = {
    needLogin: true
}