import { users } from './../Global/types/user';
import { Global } from './../Global/index';
import { ApiCall } from "tsrpc";
import { ReqLogin, ResLogin } from "../shared/protocols/PtlLogin";
import { secret } from '../dev.json'
import { sign } from 'jsonwebtoken';

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
    // TODO
    const { username,password } = call.req

    const user = await Global.collection('users').findOne({
        name:username,
    })
    
    if(user === null) return call.error('unexist user')
    else if(user.password === password){
        const token = sign({
            username,
            id:user._id
        }, secret, { expiresIn: '5d', algorithm: 'HS512'})//HS256

        call.succ({
            token
        })
        
    }
    else return call.error('wrong password')
}