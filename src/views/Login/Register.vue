<script>
import { reactive, computed } from 'vue';
import { DownloadOutlined } from '../../utils/email';

export default {
    data() {
        return {
            formState,
            layout,
            onFinish,
            onFinishFailed,
            disabled,
            configData,
            configEmail,
            configNome,
            configSenha,
            matchEmail,
        }
    },
}

const formState = reactive({
    email: '',
    senha: '',
    remember: false,
})

const configData = {
  rules: [
    {
      type: 'string',
      required: true,
      message: 'Selecione uma data!',
    },
  ],
}

const configNome = {
  rules: [
    {
      type: 'string',
      required: true,
      message: 'Insira seu nome!',
    },
  ],
}

const configEmail = {
  rules: [
    {
      type: 'string',
      required: true,
      message: 'Insira um e-mail!',
    },
  ],
  types: {
    email: matchEmail && '${label} não é um email válido!',
  }
}

const validateMessages = {
  types: {
    email: matchEmail && '${label} não é um email válido!'
  }
}

const configSenha = {
  rules: [
    {
      type: 'string',
      required: true,
      message: 'Insira uma senha!',
    },
  ],
}

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
    return !(formState.email && formState.senha && formState.nome && formState.data);
});
</script>


<template>
    <div id="container_form">
        <h1 class="mt-12" id="text_login">Cadastra-se</h1>
        <a-form id="form" v-bind="layout" :model="formState" name="normal_login" :validate-messages="validateMessages" class="login-form" @finish="onFinish"
            @finishFailed="onFinishFailed">

            <a-form-item class="mt-10" name="nome" v-bind="configNome">
                <a-input prefix="✉️" placeholder="Nome completo" v-model:value="formState.nome">
                    <template #icon>
                                                <DownloadOutlined />
                                            </template>
                </a-input>
            </a-form-item>

            <a-form-item class="mt-5" name="email" v-bind="configEmail">
                <a-input prefix="✉️" placeholder="Insira um e-mail" v-model:value="formState.email">
                </a-input>
            </a-form-item>

            <a-form-item name="senha" v-bind="configSenha">
                <a-input-password prefix="🔒︎" placeholder="Insira sua senha" v-model:value="formState.senha">
                </a-input-password>
            </a-form-item>

            <a-form-item name="data" label="" v-bind="configData">
                <a-date-picker v-model:value="formState.data" format="DD-MM-YYYY HH:mm:ss"
                    value-format="DD-MM-YYYY HH:mm:ss" />
            </a-form-item>

                <a-form-item class="mt-12">
                    <a-button
                        style=" width: 16.1rem; font-size: 1.1rem; height: 2.3rem; font-weight: 700; background-color:#FFE925;"
                        :disabled="disabled" type="primary" html-type="submit" class="login-form-button">Criar
                        conta</a-button>
                </a-form-item>


                <a-form-item class="mt-5">
                    <strong>Não possui uma conta ?</strong>
                    <a href="/register"> Cadastra-se</a>
                </a-form-item>
        </a-form>
    </div>
</template>

<style scoped>
img {
    position: absolute;
    top: 18.2%;
    left: 42.8%;
}

#form {
    margin-left: 4rem;
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
    font-size: 2.4rem;
    font-family: 'Cuprum', sans-serif;
    font-weight: 700;
}
</style>