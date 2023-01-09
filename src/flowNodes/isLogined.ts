import { Global } from './../Global/index';
import { ApiCall, BaseServer } from "tsrpc";
import { secret } from '../dev.json'
import { verify } from "jsonwebtoken";
import { ServiceType } from "../shared/protocols/serviceProto";
import { ObjectId } from 'mongodb';

export default async function (server: BaseServer<ServiceType>) {
    server.flows.preApiCallFlow.push((call) => {
        const conf = call.service.conf
        //不需要登录验证
        if (!conf?.needLogin) return call
        //需要验证
        else {
            console.log('need auth');
            const token = call.req.__token
            
            try {
                const res = verify(token, secret) as {
                    username: string,
                    id: string,
                    iat: number,
                    exp: number
                }

                //unexpired pass
                if (new Date(res.exp * 1000) > new Date()) {
                    //拓展call currentUSer
                    // Global.collection('users').findOne({
                    //     _id:new ObjectId(res.id)
                    // }).then(res =>{
                    //     console.log(res);
                    // })
                    call.currentUser = {
                        username:res.username,
                        id:new ObjectId(res.id)
                    }
                    

                    return call
                }
                //expired
                else {
                    call.error('expired token')
                    return null
                }
            } catch (error) {
                call.error('invalid token')
                return null
            }

        }
    })


}