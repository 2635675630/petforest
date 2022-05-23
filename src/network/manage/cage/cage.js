import { request } from "network/request";
export function GetCurrentCage(data) {
    return request({
        url: '/CageServlet/show_currentcagenum',
        params: {
            start_date: data.start_date,
            end_date: data.end_date,
        }
    })
}