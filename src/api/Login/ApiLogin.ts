import { Global } from '../../Global';
import { ApiCall } from "tsrpc";
import { ReqLogin, ResLogin } from "../../shared/protocols/Login/PtlLogin";
import { secret } from '../../dev.json'
import { sign } from 'jsonwebtoken';

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
    // TODO
    const { email, password } = call.req

    const user = await Global.collection('users').findOne({
        email,
    })



    if (user === null) return call.error('用户不存在')
    else if (user.password === password) {
        const token = sign({
            id: user._id,
            role: user.role
        }, secret, { expiresIn: '5d', algorithm: 'HS512' })//HS256

        call.succ({
            token,
            user
        })

    }
    else return call.error('密码错误')
}