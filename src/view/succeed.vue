<template>
    <div id="app">
        <van-icon name="success" size="80px" color="" class="top" />
        <h1 class="center">注册成功</h1>
        <van-button class="bottom" type="primary" v-on:click="confirm">确定</van-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            confirm() {
                this.$router.push({
                    path: `/`,
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .top {
        position: absolute;
        top: 30%;
    }

    .center {
        position: absolute;
        top: 45%;
    }

    .bottom {
        position: absolute;
        left: 10%;
        bottom: 30%;
        width: 80%;
    }

</style>
