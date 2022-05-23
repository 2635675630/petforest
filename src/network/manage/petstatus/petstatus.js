import { request, } from "network/request";
export function GetPetstatus() {
    return request({
        url: '/OrderServlet/show_allordering',
    })
}