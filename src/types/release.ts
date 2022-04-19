interface JonInpType {
    jobName: string ,
    payMin: string,
    payMax: string,
    payMonth: string,
    welfare: string[],
    education: string,
    workingYears: string,
    cityId: number,
    areaId: number,
    companyId: number
}
export class InitData{
    jobInpData:JonInpType = {
        jobName: '',
        payMin: '',
        payMax: '',
        payMonth: '',
        welfare: [],
        education: '',
        workingYears: '',
        cityId: 0,
        areaId: 0,
        companyId: 0
    }
    selectOption = {
        WorkingYears:[],
        Welfares: [],
        PayMonths: [],
        PayFilter: [],
        Education: ['大专', '本科', '学历不限'],
        PayMin: ['8','10','12','15','20'],
        PayMax: ['15','25','35','45'],
        City: [
            { name: "苏州", id: 1 },
            { name: "无锡", id: 1 },
            { name: "常州", id: 1 },
            { name: "镇江", id: 1 },
            { name: "南京", id: 1 },
        ],
        Area: [
            { name: "昆山", id: 6 },
            { name: "新区", id: 7 },
            { name: "新北区", id: 8 },
            { name: "玄武区", id: 9 }
        ],
        Company: [
            { name: "肖肖集训营", id: 2 },
            { name: "元讯趣编程", id: 1 },
            { name: "Ace全栈营", id: 3 },
        ]
    }
}