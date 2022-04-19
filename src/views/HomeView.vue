<template>
  <div class="home">
   <HeaderView>
     <div class="btn" @click="sendJob">发布招聘</div>
   </HeaderView>
   <div class="seacher">
     <input type="text" placeholder="实习招聘" v-model="select.jobName">
    <img class="icon-search" src="../assets/search.png" alt="" @click="getJobList('')">
   </div>
  <div class="list-box">
    <div class="list" v-for="item of selectKey" :key="item.key">
      <span class="label">{{item.name}}</span>
      <span class="s_item" :class="{active:!select[item.inp]}" @click="getSelectData('',item.inp)">不限</span>
      <!-- <span v-for="(s_item,index) in option[item.key]" :key="index">{{s_item}}</span> -->
      <span class="s_item" :class="{active:select[item.inp] === s_item}"  v-for="(s_item,index) in option[getKey(item)]" :key="index" @click="getSelectData(s_item,item.inp)">{{s_item}}</span>
    </div>
     <div class="job-box">
       <div class="list" v-for="item of jobs" :key="item.id">
        <div>
          <div class="jobName">{{item.jobName}}</div>
          <div class="pay">{{item.payMin}}~{{item.payMax}}</div>
          <div>
            <span class="item" v-for="(i,index) of getWelfare(item.welfare)" :key="index">{{i}}</span>
          </div>
        </div>
        <div>
          <div>{{item.education}}</div>
          <div class="workPosition">{{item.workPosition}}</div>
          <div class="publishTime">{{item.publishTime}}</div>
        </div>
        <div>
          <span class="send">申请</span>
        </div>

    </div>
     </div>
  </div>
  <div class="foot"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRef, toRefs } from 'vue';
import HeaderView from '@/components/HeaderView.vue'; // @ is an alias to /src
import {getJob, getRequirement} from '../http/api'
import {selectKeyOptionInt, initData, selectInt} from '../types/index'
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  components: {HeaderView},
  setup() {
    const router = useRouter();
    const data = reactive(new initData())
    const selectKey:Array<selectKeyOptionInt> = [
      {
        key: 'WorkingYears',
        name: '工作经验:',
        inp: 'WorkingYears'
      },
       {
        key: 'Welfares',
        name: '福利:',
        inp: 'Welfares'
      },
       {
        key: 'PayMonths',
        name: '薪次:',
        inp: 'PayMonths'
      },
       {
        key: 'PayFilter',
        name: '薪资范围:',
        inp: 'PayFilter'
      },
    ]
    onMounted(() => {
      getJobList({});
      getRequirement().then((res:any) => {
        data.option = res.data;
      })
    });
    const getKey = (item:selectKeyOptionInt):keyof typeof data.option => {
      const k:string = item.key;
      return (k as any); // 断言
    }
    const getWelfare = (item:string):Array<string> => {
      return  item.split(',')
    }
    const sendJob = () => {
      router.push({
        path:'/release'
      })
    }
    let activeArr_type:any = ref([]);
    let activeObj:any = ref({})

    const getSelectData = (str:string,type:string):void => {
      // const sk:keyof selectInt = type as keyof selectInt
      // const v:never = str as never
      //data.select[sk] = v;
      data.select[type] = str;
      getJobList(data.select)
    }
    const getJobList = (values:any):void => {
      getJob(values).then((res:any) => {
        console.log(res.data)
        data.jobs = res.data
        console.log('数据收到了')
      }).catch((err:any) => {
        alert('网络错误')
      })
    }
    return {
      ...toRefs(data), // data中的所有变量都可用 不需要data.jobs
      selectKey,
      activeObj,
      getKey,
      getWelfare,
      sendJob,
      getJobList,
      getSelectData
    }
  }
});
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  .seacher{
    line-height: 30px;
    height: 30px;
    width: 60%;
    border: 1px solid #999;
    border-radius: 50px;
    justify-content: center;
    padding: 0 12px;
    margin: 20px auto 0;
    display: flex;
    align-items: center;
    input{
      outline: none;
      border: none;
      width: 100%;
    }
    .icon-search{
      width: 32px;
      height: 32px;
      flex: 0 0 32px;
      cursor: pointer;
    }
  }
  .list-box{
    margin-top: 20px;
    padding: 20px 40px;
    .list{
      .label{
        color: #999;
      }
      span{
        margin-right: 5px;
      }
      .s_item{
        cursor: pointer;
        margin-right: 10px;
        font-size: 14px;
      }
      & .active{
        color: rgb(63, 163, 167);
      }
    }
  }
  .job-box{
    margin-top: 20px;
    .list{
      padding: 20px 0;
      border-bottom: 1px solid rgb(216, 211, 211);
      display: flex;
      justify-content: center;
      align-items: center;
      .jobName{
        color: #000;
        font-weight: 500;
        padding-bottom: 5px;
      }
      .pay{
        color: rgb(245, 144, 50);
        margin-bottom: 5px;
      }
      div{
        flex: 1;
      }
      .item{
        border-radius: 30px;
        background: rgb(31, 209, 185);
        font-size: 12px;
        color: #fff;
        padding: 2px 5px;
      }
      .workPosition,.publishTime{
        color: rgb(158, 153, 153);
        padding-top: 5px;
        font-size: 14px;
      }
      .send{
        background: rgb(42, 192, 192,0.5);
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        border-radius: 30px;
        padding: 4px 15px;
        cursor: pointer;
        &:hover{
          background: rgb(42, 192, 192,1);
        }
      }
    }
  }
  // .foot{
  //   height: 100px;
  //   padding: 15px 0;
  //   background: #999;
  // }
}
</style>
