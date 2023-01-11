import fs from "fs/promises";
import { serverUrl, serverPort } from '../dev.json'
//path: uploads/...
export default async function (path: string, fileData: Uint8Array) {
    try {
        await fs.writeFile('uploads/' + path, fileData)
        const name = `${serverUrl}:${serverPort}/${path}`
        return name
    } catch (error) {
        console.log(error);
        throw new Error('Error')
    }
}