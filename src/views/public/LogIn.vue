<template>
    <b-card class="card-login">
        <label>{{$t('login')}}</label>
        <b-input v-model="login"></b-input>
        <label class="mt-2">{{$t('password')}}</label>
        <b-input v-model="password" type="password"></b-input>
        <b-row>
            <b-col></b-col>
            <b-col class="text-end"><b-btn class="mt-3">{{$t('logIn')}}</b-btn></b-col>
        </b-row>
    </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';


@Component
export default class LogIn extends Vue {
    private login:string = '';
    private password:string = '';
}
</script>
<style>
.card-login{
    text-align: start;
    max-width: 500px;
    border-radius: 20px;
    margin: auto;
    margin-top: 10%;
    max-width: 350px;
}
</style>