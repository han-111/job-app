<template>
  <div>
    <HeaderView>
     <div class="btn" @click="backJob">招聘广场</div>
    </HeaderView>
    <div class="release-box">
      <h2 class="text-title">发布招聘</h2>
      <div class="inp-box">
        <div class="list">
          <div class="label">职位名称:</div>
          <input type="text" v-model="jobInpData.jobName" placeholder="请输入职位名称" name="" id="">
        </div>
        <div class="list">
          <div class="label">学历要求:</div>
          <select placeholder="请选择学历" name="" id="" v-model="jobInpData.education">
            <option value="">请选择学历</option>
            <option v-for="(item,index) of selectOption.Education" :key="index">{{item}}</option>
          </select>
        </div>
        <div class="list">
          <div class="label">经验要求:</div>
          <select placeholder="请选择经验" name="" id="" v-model="jobInpData.workingYears">
             <option value="">请选择经验</option>
            <option>1年以下</option>
            <option>1-3年</option>
            <option>3-5年</option>
            <option>5-10年</option>
          </select>
        </div>
        <div class="list">
          <div class="label">工资范围最低值:</div>
          <select placeholder="请选择工资范围最低值" name="" id="" v-model="jobInpData.payMin">
            <option value="">请选择工资范围最低值</option>
            <option v-for="(item,index) of selectOption.PayMin" :key="index">{{item}}</option>
          </select>
        </div>
        <div class="list">
          <div class="label">工资范围最高值:</div>
          <select placeholder="请选择工资范围最高值" name="" id="" v-model="jobInpData.payMax">
            <option value="">请选择工资范围最高值</option>
             <option v-for="(item,index) of selectOption.PayMax" :key="index">{{item}}</option>
          </select>
        </div>
        <div class="list">
          <div class="label">薪次:</div>
          <select placeholder="请选择薪次" name="" id="" v-model="jobInpData.payMonth">
            <option value="">请选择薪次</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>16</option>
          </select>
        </div>
        <div class="list">
          <div class="label">福利待遇:</div>
          <label v-for="(i,index) in selectOption.Welfares" :key="index">
              <input v-model="jobInpData.welfare" type="checkbox"  :value="i">
              {{i}}
          </label>
        </div>
         <div class="list">
          <div class="label">工作地点:</div>
           <select placeholder="请选择" name="" id="" v-model="jobInpData.cityId">
            <option value="0">请选择城市</option>
            <option v-for="item of selectOption.City" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
           <select placeholder="请选择" name="" id="" v-model="jobInpData.areaId">
              <option value="0">请选择区域</option>
              <option v-for="item of selectOption.Area" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="list">
          <div class="label">招聘企业:</div>
          <select placeholder="请选择招聘企业" name="" id="" v-model="jobInpData.companyId">
             <option value="">请选择招聘企业</option>
             <option v-for="item of selectOption.Company" :key="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="postRecruitment" @click="postRecruitment">发布招聘</div>
      </div>
    </div>
    

  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import {setJob,getRequirement} from '../http/api'
import HeaderView from '../components/HeaderView.vue'
import {InitData} from '../types/release'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
      const data = reactive(new InitData())
      const router = useRouter()
      onMounted(() => {
        getRequirement().then((res:any) => {
          data.selectOption = {...data.selectOption,...res.data} // 数据进行合并 重组
          console.log(res)
        })
      })
       const backJob = () => {
          router.go(-1)
       }
       const postRecruitment = () => {
         let key:keyof typeof data.jobInpData;
         for (key in data.jobInpData) {
           if (!data.jobInpData[key]) {
             alert('请完善信息'+ key)
             return
           }
         }
         const params = {...data.jobInpData,Welfares:data.jobInpData.welfare.join(',')}
         console.log(data.jobInpData)
         setJob({params}).then((res:any) => {
           alert('发布成功')
          router.go(-1)
         }).catch((err:any) => {
           console.log('出现网络错误')
         })
       }
       return {
           ...toRefs(data),
            backJob,
            postRecruitment
       }
    },
    components:{HeaderView}

}
</script>

<style lang="scss" scoped>
.release-box{
  padding: 0px 40px 20px;
  .text-title{
    padding: 5px 10px;
    border-bottom: 2px solid rgb(0, 134, 134);
    color:rgb(0, 134, 134); ;
  }
  .list{
    display: flex;
    margin-bottom: 20px;
    .label{
      width: 130px;
    }
  }
  .postRecruitment{
    background: rgb(11, 173, 160);
    color: #fff;
    border-radius: 4px;
    padding: 7px 40px;
    cursor: pointer;
    width: 100px;
    text-align: center;
    font-weight: 500px;
  }
}


</style>