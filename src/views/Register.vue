<template>
    <div class="register-page">
        <navgation-bar :pageName="'注册'">
        </navgation-bar>

        <div class="register-page-content">
            <div class="input-container">
                <input v-model="username" type="text" placeholder="用户名">
            </div>

            <div class="input-container">
                <input v-model="password" type="password" placeholder="密码">
            </div>

            <div class="input-container">
                <input v-model="comfirmPassword" type="password" placeholder="确认密码">
            </div>
            
            <div class="register-page-content-login">
                注册
            </div>

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
            username: '',
            password: '',
            comfirmPassword: '',

        }
    },
    methods: {
  
        onRegisterClick: function () {
            if (this.username.length === 0) {
                alert('请完善用户名');
                return;
            }
            if (this.password.length === 0 
            || this.password != this.comfirmPassword) {
                alert('请完善密码');
                return;
            }

          
        },
    }

}
</script>


<style lang="scss" scoped>
@import "@css/dimens.scss";
@import "@css/colors.scss";
@import "@css/mixin.scss";
    .register-page {
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
