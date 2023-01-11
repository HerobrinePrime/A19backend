import { ApiCall } from "tsrpc";
import { ReqRegist, ResRegist } from "../../shared/protocols/Login/PtlRegist";
import upload from "../../utils/upload";

export default async function (call: ApiCall<ReqRegist, ResRegist>) {
    // TODO
    const { portrait: { fileDate, fileType } } = call.req
    const index = fileType.indexOf('/')
    const typeCate = fileType.slice(0, index)
    const type = fileType.slice(index + 1)
    // console.log(type);

    const name = `${typeCate}${call.currentUser._id}${new Date().getTime()}.${type}`// image63b8eed76bd85268791e2baf1673417134777.png
    // console.log(name);
    try {
        const ret = await upload(`portraits/${name}`, fileDate)
        call.succ({
            portrait: ret
        })
    } catch (error) {
        call.error('error');
    }
}