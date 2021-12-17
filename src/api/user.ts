import http from '../utils/request';

/**
 * 登录
 * @param params
 */
export async function login(params:any){
    return http("/api/v1/user/login",{
        method:"POST",
        data:params
    })
}

/**
 * 获取用户信息
 * @param params
 */
export async function getUserInfo(params:any){
    return http("/api/v1/user/getUserInfo",{
        data:params
    })
}

/**
 * 退出登录
 */
export async function logout(){
    return http("/api/v1/user/logout",{
        method:"POST",
    })
}