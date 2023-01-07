export interface ReqLogin {
    username:string,
    password:string
}

export interface ResLogin {
    token:string 
}

export const conf = {
    needLogin: false
}