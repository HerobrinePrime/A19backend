import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqRegist extends BaseRequest {
    portrait: {
        fileDate: Uint8Array,
        fileType: string
    }

}

export interface ResRegist extends BaseResponse {
    portrait: string
}

export const conf: BaseConf = {
    needLogin: true
}