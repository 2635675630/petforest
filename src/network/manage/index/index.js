import { request } from "network/request";
export function GetEchartData() {
    return request({
        url: '/OrderServlet/show_allorder',
    })
}