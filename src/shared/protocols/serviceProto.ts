import { ServiceProto } from 'tsrpc-proto';
import { ReqLogin, ResLogin } from './Login/PtlLogin';
import { ReqRegist, ResRegist } from './Login/PtlRegist';
import { ReqTestToken, ResTestToken } from './Login/PtlTestToken';
import { ReqSend, ResSend } from './PtlSend';

export interface ServiceType {
    api: {
        "Login/Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "Login/Regist": {
            req: ReqRegist,
            res: ResRegist
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
    "version": 7,
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
            "id": 7,
            "name": "Login/Regist",
            "type": "api",
            "conf": {
                "needLogin": true
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
                    "id": 2,
                    "name": "email",
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
                    "id": 3,
                    "name": "user",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "role",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "school",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "name",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 3,
                                "name": "portrait",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 4,
                                "name": "email",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 5,
                                "name": "number",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 6,
                                "name": "gender",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "Login/PtlRegist/ReqRegist": {
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
                    "name": "portrait",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "fileDate",
                                "type": {
                                    "type": "Buffer",
                                    "arrayType": "Uint8Array"
                                }
                            },
                            {
                                "id": 1,
                                "name": "fileType",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "Login/PtlRegist/ResRegist": {
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
                    "name": "portrait",
                    "type": {
                        "type": "String"
                    }
                }
            ]
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
                    "id": 2,
                    "name": "user",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "role",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "school",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "name",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 3,
                                "name": "portrait",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 4,
                                "name": "email",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 5,
                                "name": "number",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 6,
                                "name": "gender",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
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