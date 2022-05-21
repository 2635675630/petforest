import { request, } from "network/request";
export function GetUserName() {
    return request({
        url: '/UserServlet/getusername',
    })
}