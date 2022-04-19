export interface jobsType{
    jobName: string ,
    payMin: string,
    payMax: string,
    payMonth: string,
    welfare: string,
    education: string,
    workingYears: string,
    publishTime: string,
    workPosition: string,
    companyName: string,
    id: number
}
export interface selectInt{
    WorkingYears: string[],
    Welfares:  string[],
    PayMonths:  string[],
    PayFilter:  string[],
}
export interface selectKeyOptionInt {
    key: string,
    name: string,
    inp: string
}
interface selectType{
    WorkingYears: string,
    Welfares:string,
    PayMonths:string,
    PayFilter:string,
    [key:string]:any,
}
export interface optionType{
    WorkingYears: Array<string>,
    Welfares:  Array<string>,
    PayMonths:  Array<string>,
    PayFilter:  Array<string>,
    // [propsName:string]: any,
}
export class initData{
    jobs: Array<jobsType> = [];
    select:selectType = {
        WorkingYears: '',
        Welfares:'',
        PayMonths:'',
        PayFilter:''
    };
    option:optionType = {
        WorkingYears: [],
        Welfares: [],
        PayMonths: [],
        PayFilter: []
    }
}