import { request } from "network/request";
export function GetEchartData(data) {
    return request({
        url: '/MUserServlet/register_manage',
        params: {
            username: data.username,
            password: data.password,
            phonenumber: data.phonenumber
        }
    })
}
export function GetManageList() {
    return request({
        url: '/MUserServlet/show_user',
        params: {
            manage: 1
        }
    })
}