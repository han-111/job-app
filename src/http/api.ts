import $http from './http'
export function getJob(params:any):any{
    return $http({
        url:'/Job',
        method:'get',
        params
    })
}
export function getRequirement():any{
    return $http({
        url:'/Requirement',
        method:'get',
        params:''
    })
}
export function setJob(params:any):any{
    return $http({
        url:'/Job',
        method:'post',
        params,
    })
}