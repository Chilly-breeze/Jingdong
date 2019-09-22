<template>
    <div class="login-page">
        <navgation-bar :pageName="'登录'" :navStyle="navStyle" ></navgation-bar>

        <div class="login-page-content">
            <div class="input-container">
                <input v-model="username" type="text" placeholder="用户名">
            </div>

            <div class="input-container">
                <input v-model="password" type="password" placeholder="密码">
            </div>
            
            <div class="login-page-content-login page-commit" @click="onLoginClick">
                登录
            </div>

            <a class="login-page-content-register" @click="onToRegisterClick">注册新用户</a>
        </div>
        
    </div>
</template>

<script>
import NavgationBar from '@b/navigation/Navigation';
export default {
    components: {
        NavgationBar
    },
    data: function () {
        return {
              navStyle: {
                background: 'rgba(216, 30, 6,.8)',
                width: '100%'
            },
            username: '',
            password: '',
        }
    },
    methods: {
        onLoginClick: function () {
            if (this.username.length === 0 
             || this.password.length === 0) {
                 alert('用户名或密码未输入');
                 return;
            }
        },
        /**
         * 注册按钮点击事件
         */
        onToRegisterClick: function () {
            this.$router.push({
                path: '/register',
                params: {
                    routerType: 'push',
                },
            })
        },
       
    }

}
</script>


<style lang="scss" scoped>
@import "@css/dimens.scss";
@import "@css/colors.scss";
@import "@css/mixin.scss";
     .login-page {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: white;
        overflow: hidden;
        &-content {
            width: 100%;
            height: 100%;

          
            // 登录
            .input-container {
                width: 100%;
                height: 1.066667rem;
                padding-left: .4rem;
                font-size: .48rem;
                border-bottom:1px solid #e5e5e5; 
                  input {
                    width: 100%;
                    height: 1rem;
                }
            }

            &-login {
                font-size: .64rem;
                text-align:center;
                background: rgba(216, 30, 6,1);
                padding: 0 .266667rem;
                width: 80%;
                margin: 0 auto;
                height: .906667rem;
                line-height: .906667rem;
                color:#fff;
                border-radius:25px;
                margin-top: 30%;
            }

            &-register {
                font-size: $infoSize;
                color: $textHintColor;
                margin-top: $marginSize;
                display: inline-block;
                padding: $marginSize;
                float: right;
            }
        }
    }
</style>
