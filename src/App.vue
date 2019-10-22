<template>
  <div id="app">
    <router-view v-cloak></router-view>
    <!--        <home-bottom></home-bottom>-->
  </div>
</template>
<script>
  // 引用外部css
  // import "./asset/css/common.scss";
  export default {
    name: 'app'
    // components: {
    //     'home-bottom' : bottom /*注册自定义标签*/
    // }
  };
</script>
