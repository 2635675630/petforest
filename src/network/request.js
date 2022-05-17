import axios from 'axios'
export function request(config) {
    //创建axios实例
    const instance1 = axios.create({
        // baseURL: "http:/127.0.0.1:8080",
        timeout: 50000
    })

    //发送真正网络请求
    return instance1(config)
}

export function request1(config) {
    //创建axios实例
    const instance1 = axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 5000
    })

    //发送真正网络请求
    return instance1(config)
}