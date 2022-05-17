import { request, request1 } from "network/request";
export function Register(data) {
    return request({
        url: '/UserServlet/register',
        params: {
            username: data.username,
            password: data.password,
            checkcode: data.checkcode,
            phonenumber: data.phonenumber,
            manage: 0
        }
    })
}
export function Login(data) {
    return request({
        url: '/UserServlet/login',
        params: {
            username: data.username,
            password: data.password,
            checkcode: data.checkcode,
            manage: data.ismanage
        }
    })
}