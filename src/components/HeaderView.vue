<template>
  <div class="header-box">
      <div class="left">
          <img class="logo" src="../assets/logo.png" alt="">
          <h4>招聘网站</h4>
      </div>
      <div class="right">
          <slot/>
      </div>
  </div>
</template>

<script>
export default {


}
</script>

<style lang="scss" scoped>
.header-box {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid rgb(172, 170, 170);
    .left{
        display: flex;
        align-items: center;
        .logo{
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }
    .right{
     border: 1px solid rgb(37, 141, 119);;
     border-radius: 4px;
     color: rgb(37, 141, 119);
     font-weight: 500;
     padding: 6px 9px;
     cursor: pointer;
    }
}
</style>