import { users } from './Global/types/user';
import { Global } from './Global/index';
import * as path from "path";
import { HttpServer, WsServer } from "tsrpc";
import { serviceProto } from './shared/protocols/serviceProto';
import isLogined from './flowNodes/isLogined';
import { ObjectId } from 'mongodb';
import isGet from './flowNodes/isGet';
import { serverPort } from './dev.json'
// Create the Server
// export const server = new WsServer(serviceProto, {
//     port: 3000,
//     // Remove this to use binary mode (remove from the client too)
//     json: true,
//     logLevel:'warn',
// });
export const server = new HttpServer(serviceProto, {
    port: serverPort,
    json: true,
    logLevel: 'warn',
})

isLogined(server)
isGet(server)

// Initialize before server start
async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
    await Global.initDb()
};

// Entry function
async function main() {
    await init();
    await server.start();

    // let res = await server.callApi('Login', {
    //     username: 'zireael',
    //     password: 'herobine',
    // })
    // console.log(res);

    // let res = await server.callApi('Send',{
    //     content:'asedf',
    //     __token:'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InppcmVhZWwiLCJpZCI6IjYzYjc4NGI4MmM0MzNlNTBhYWViZjg4YSIsImlhdCI6MTY3MzEwNzQwMSwiZXhwIjoxNjczNTM5NDAxfQ.SdIF6Crr7hZcf8yCg56zATN0AENLhKbEde3vzZ-JNmlUkQjVoOUJmkyGV4pXjIP49iW_qwDadY0GEDQTxMGRGg'
    // })//eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9
    // console.log(res);

}
main();

declare module 'tsrpc' {
    export interface ApiCall {
        currentUser: users
    }
}