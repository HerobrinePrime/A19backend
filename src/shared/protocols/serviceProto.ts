import { ServiceProto } from 'tsrpc-proto';
import { ReqLogin, ResLogin } from './Login/PtlLogin';
import { ReqTestToken, ResTestToken } from './Login/PtlTestToken';
import { ReqSend, ResSend } from './PtlSend';

export interface ServiceType {
    api: {
        "Login/Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "Login/TestToken": {
            req: ReqTestToken,
            res: ResTestToken
        },
        "Send": {
            req: ReqSend,
            res: ResSend
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 6,
    "services": [
        {
            "id": 5,
            "name": "Login/Login",
            "type": "api",
            "conf": {
                "needLogin": false
            }
        },
        {
            "id": 6,
            "name": "Login/TestToken",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 1,
            "name": "Send",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        }
    ],
    "types": {
        "Login/PtlLogin/ReqLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "Login/PtlLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "role",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "Login/PtlTestToken/ReqTestToken": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "Login/PtlTestToken/ResTestToken": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "role",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSend/ReqSend": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSend/ResSend": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};