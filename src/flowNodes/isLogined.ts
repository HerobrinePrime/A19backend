import { ApiCall } from "tsrpc";
import { secret } from '../dev.json'
import { verify } from "jsonwebtoken";

export default function (call: ApiCall<any, any, any>) {
    const conf = call.service.conf
    if (!conf?.needLogin) return call
    else {
        console.log('auth test');
        const token = call.req?.token

        try {
            const res = verify(token, secret) as {
                username: string,
                id: string,
                iat: number,
                exp: number
            }
            
            //unexpired pass
            if(new Date(res.exp * 1000) > new Date()){
                return call
            }
            //expired
            else{
                call.error('expired token')
                return null
            }
        } catch (error) {
            call.error('invalid token')
            return null
        }

    }
}