import Mock from 'mockjs'

Mock.mock(/\/mock\/Job.*/,'get', {
    'data|5':[ // 这样写生成一个长度为5条数据的数组
        {
            "jobName": "C#/.NET全栈工程师",
            "payMin": "10",
            "payMax": "15",
            "payMonth": "15薪",
            "welfare": "五险一金,员工旅游,年终奖金,定期体检",
            "education": "本科",
            "workingYears": "5年",
            "publishTime": "2022-01-25T00:00:00",
            "workPosition": "苏州-工业园区", 
            "companyName": "元讯趣编程",
            "id": 1
        }
    ]
} )   
Mock.mock('/mock/Requirement','get',{
    data:{
        "WorkingYears": [
          "1年",
          "2年",
          "3年",
          "4年",
          "5年以上"
        ], 
        "Welfares": [
          "五险一金",
          "专业培训",
          "免费班车",
          "绩效奖金",
          "员工旅游",
          "年终奖金"
        ],
        "PayMonths": [
          "12薪",
          "13薪",
          "14薪",
          "15薪"
        ],
        "PayFilter": [
          "3K以下",
          "3-5K",
          "5-10K",
          "10-15K",
          "15-20K",
          "20-30K",
          "30-50K",
          "50K以上"
        ]
      }
})
Mock.mock('/mock/Job','post',{code:200})