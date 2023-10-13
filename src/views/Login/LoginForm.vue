<script>
export default {
    data() {
        return {
            formState,
            layout,
            onFinish,
            onFinishFailed,
            disabled,
            LockOutlined
        }
    },
    methods: {
    signInWithGoogle() {
      gapi.auth2.getAuthInstance().signIn().then(() => {
        const user = gapi.auth2.getAuthInstance().currentUser.get();
        const basicProfile = user.getBasicProfile();

        const userId = basicProfile.getId();
        const userName = basicProfile.getName();
        const userEmail = basicProfile.getEmail();
        const userImage = basicProfile.getImageUrl();

        this.$emit('user-signed-in', { userId, userName, userEmail, userImage });
      });
    },
},
created() {
    if (typeof gapi !== 'undefined') {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: 'SEU_CLIENT_ID',
        });
      });
    }
}
}
import { reactive, computed } from 'vue';
import { LockOutlined } from "@ant-design/icons-vue";
const formState = reactive({
    email: '',
    senha: '',
    remember: false,
});

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 20,
  },
};


const onFinish = values => {
    if(this.signInWithGoogle)
    return true
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const disabled = computed(() => {
    return !(formState.email && formState.senha);
});
</script>


<template>
    <div id="container_form">
        <img src="/image/MobiWhite.png" alt="">
        <h1 class="mt-12" id="text_login">Login</h1>
        <a-form  id="form" v-bind="layout" :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">

            <a-form-item class="mt-10" name="email" :rules="[{ required: true, message: 'Insira seu email.' }]">
                <a-input prefix="✉️" placeholder="E-mail" v-model:value="formState.email">
                </a-input>
            </a-form-item>

            <a-form-item name="senha"
                :rules="[{ required: true, message: 'Insira sua senha!' }]">
                <a-input-password prefix="🔒︎" placeholder="Senha" v-model:value="formState.senha">  
                </a-input-password>
            </a-form-item>

            <a-form-item >
                <a-form-item name="remember" no-style>
                    <a-checkbox v-model:checked="formState.remember">Lembrar de mim ?</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">Esqueceu a senha ?</a>
            </a-form-item>

            <a-form-item class="mt-12">
                <a-button style=" width: 16.1rem; font-size: 1.1rem; height: 2.3rem; font-weight: 700; background-color:#FFE925;" :disabled="disabled" type="primary" html-type="submit" class="login-form-button">Entrar</a-button>
            </a-form-item>
            
            
            <a-form-item class="mt-5">
                <strong>Não possui uma conta ?</strong> 
                <a href="/register"> Cadastra-se</a>
            </a-form-item>
        </a-form>
        <div>
<button @click="signInWithGoogle">Login com Google</button>
</div>
    </div>
</template>

<style scoped>

img{
    position: absolute;
    top: 18.2%;
    left: 42.8%;
}

#form{
    margin-left: 4rem ;
}

#container_form {
    text-align: center;
    margin: auto;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 25vw;
    height: 75vh;
    border-radius: 15px;
    margin-top: 5.5%;
    padding: 2px;
}

#text_login {
    font-size:2.4rem;
    font-family: 'Cuprum', sans-serif;
    font-weight: 700;
}
</style>