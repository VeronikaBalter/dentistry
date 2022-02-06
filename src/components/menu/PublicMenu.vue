<template>
  <b-row class="public-menu justify-content-md-center">
    <b-col class="col-md-auto">
      <b-row class="justify-content-md-center">
        <b-col class="col-md-auto"><img src="../../const/img/tooth-solid-svg.png"/></b-col>
        <b-col class="col-md-auto logo">Dentistry</b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-md-center menu-tabs">
        <b-col class="col-md-auto menu-tab">{{$t('home')}}</b-col>
        <b-col class="col-md-auto menu-tab">{{$t('aboutUs')}}</b-col>
        <b-col class="col-md-auto menu-tab">{{$t('services')}}</b-col>
        <b-col class="col-md-auto menu-tab">{{$t('prices')}}</b-col>
        <b-col class="col-md-auto menu-tab">{{$t('stock')}}</b-col>
        <b-col class="col-md-auto menu-tab">{{$t('contacts')}}</b-col>
      </b-row>
    </b-col>
    <b-col class="col-md-auto">
      <b-form-select v-model="$i18n.locale" class="mt-3">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.id">{{ lang.name }}</option>
      </b-form-select>
    </b-col>
    <b-col class="col-md-auto">
      <b-button variant="outline-primary" class="mt-3">{{$t('logIn')}}</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {IdNameModel} from '@/models/common/IdNameModel';
//const lists
import langsList from '@/const/langs'

@Component
export default class PublicMenu extends Vue {

  private langs:IdNameModel[] = langsList;
}
</script>
<style>
</style>