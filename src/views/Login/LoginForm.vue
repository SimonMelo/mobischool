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
        <h1 class="mt-12" id="text_login">Login</h1>
        <a-form  id="form" v-bind="layout" :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">

            <a-form-item name="email" :rules="[{ required: true, message: 'Insira seu email.' }]">
                <a-input id="input_email" prefix="✉️" placeholder="E-mail" v-model:value="formState.email">
                </a-input>
            </a-form-item>

            <a-form-item name="senha"
                :rules="[{ required: true, message: 'Insira sua senha!' }]">
                <a-input-password prefix="🔒︎" placeholder="Senha" v-model:value="formState.senha">  
                </a-input-password>
            </a-form-item>

            <a-form-item >
                <a-form-item name="remember" no-style>
                    <a-checkbox class="mt-5" v-model:checked="formState.remember">Lembrar de mim ?</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">Esqueceu a senha ?</a>
            </a-form-item>

            <a-form-item>
                <a-button style=" width: 18rem; font-size: 1.1rem; height: 2.3rem; font-weight: 700; background-color:#FFE925;" :disabled="disabled" type="primary" html-type="submit" class="login-form-button">Entrar</a-button>
            </a-form-item>
            
            <a-form-item>
                <strong>Não possui uma conta ?</strong> 
                <a href=""> Cadastra-se</a>
            </a-form-item>
        </a-form>
    </div>
</template>

<style>

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