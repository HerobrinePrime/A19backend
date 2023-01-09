import { users } from '../../Global/types/user';
import { Global } from '../../Global';
import { ApiCall } from "tsrpc";
import { ReqLogin, ResLogin } from "../../shared/protocols/Login/PtlLogin";
import { secret } from '../../dev.json'
import { sign } from 'jsonwebtoken';

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
    // TODO
    const { username, password } = call.req

    const user = await Global.collection('users').findOne({
        name: username,
    })

    if (user === null) return call.error('用户不存在')
    else if (user.password === password) {
        const token = sign({
            username,
            id: user._id,
            role: user.role
        }, secret, { expiresIn: '5d', algorithm: 'HS512' })//HS256

        call.succ({
            token,
            role: user.role,
            username
        })

    }
    else return call.error('密码错误')
}