<template>
    <div id="app">
        <img class="img" src="../assets/img/test.jpg" alt="">
        <van-field
                v-model="tel"
                required
                clearable
                label="手机号"
                right-icon="question-o"
                placeholder="请输入手机号"
                @click-right-icon="$toast('question')"
                class="tel"
        />

        <van-field
                v-model="code"
                required
                clearable
                label="验证码"
                right-icon="question-o"
                placeholder="请输入验证码"
                class="code"
        />
        <van-button type="primary" class="code-send">发送</van-button>
        <van-button class="sign-in" type="info" v-on:click="signIn">注册</van-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tel:"",
                code:""
            }
        },
        methods: {
            login() {
            },
            signIn() {
                this.$router.push({
                    path: `/succeed`,
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
    .img {
        position: absolute;
        top: 20%;
        width: 80%;
    }
    .tel {
        position: absolute;
        top: 60%;
        width: 80%;
    }
    .code {
        position: absolute;
        top: 70%;
        left: 10%;
        width: 50%;
    }
    .code-send {
        position: absolute;
        top: 70%;
        left: 65%;
        width: 20%;
    }
    .sign-in {
        position: absolute;
        bottom: 15%;
        width: 80%;
    }
</style>
