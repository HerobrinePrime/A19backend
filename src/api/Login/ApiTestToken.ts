import { ApiCall } from "tsrpc";
import { ReqTestToken, ResTestToken } from "../../shared/protocols/Login/PtlTestToken";

export default async function (call: ApiCall<ReqTestToken, ResTestToken>) {
    // TODO
    call.succ({
        username:call.currentUser.username,
        role:call.currentUser.role
    })
}