import http from '../utils/request';

export async function login(params:any){
    return http("/api/v1/user/login",{
        method:"POST",
        data:params
    })
}
export async function getUserInfo(params:any){
    return http("/api/v1/user/getUserInfo",{
        data:params
    })
}