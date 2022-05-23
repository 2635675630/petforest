import { request } from "network/request";
export function SubmitPreOrder(data) {
    return request({
        url: '/OrderServlet/submit_order',
        params: {
            username: data.username,
            start_date: data.start_date,
            end_date: data.end_date,
            cage: data.cage,
            address: data.address,
            address_flag: data.isaddress,
            pet_name: data.petname,
            pet_type: data.pettype
        }
    })
}

export function GetAllPreOrder(data) {
    return request({
        url: '/OrderServlet/show_allpreorder',

    })
}

export function TakeOverPreorder(data) {
    return request({
        url: '/OrderServlet/accept_order',
        params: {
            ordercode: data.ordercode,
            start_date: data.start_date,
            end_date: data.end_date,
            cage: data.cage
        }
    })
}

export function RefusePreorder(data) {
    return request({
        url: '/OrderServlet/cancle_order',

        params: {
            ordercode: data.ordercode,
            pet_name: data.pet_name,
            start_date: data.start_date,
            end_date: data.end_date,
            reason: data.reason
        }
    })
}

export function GetAllRpreorder(data) {
    return request({
        url: '/OrderServlet/show_allacceptorder',
    })
}

export function PetForest(data) {
    return request({
        url: '/OrderServlet/start_order',
        params: {
            ordercode: data.ordercode
        }
    })
}
export function CancleOrder(data) {
    return request({
        url: '/OrderServlet/refuse_order',
        params: {
            reason: data.reason,
            ordercode: data.ordercode,
            start_date: data.start_date,
            end_date: data.end_date,
            pet_name: data.pet_name,
            cage: data.cage
        }
    })
}
export function BillOrder(data) {
    return request({
        url: '/OrderServlet/bill_order',
        params: {
            ordercode: data.ordercode,
            start_date: data.start_date,
            end_date: data.end_date,
            money: data.money,
            cage: data.cage
        }
    })
}

export function GetAllOrdering() {
    return request({
        url: '/OrderServlet/show_allordering',
    })
}

export function SendMessage(data) {
    return request({
        url: '/SendMessageServlet/send',
        params: {
            startdate: data.start_date,
            enddate: data.end_date,
            ordercode: data.ordercode,
            petname: data.pet_name
        }

    })
}

export function GetAllOrdered() {
    return request({
        url: '/OrderServlet/show_allordered',
    })
}


export function SelectOrdered(data) {
    return request({
        url: '/OrderServlet/search_ordered',
        params: {
            username: data.username,
            pet_name: data.pet_name
        }
    })
}