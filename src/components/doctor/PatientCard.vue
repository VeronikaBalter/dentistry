<template>
  <b-card class="user-card">
    <b-row>
      <b-col class="text-end">{{$t('regularCustomer')}}</b-col>
    </b-row>
    <b-avatar icon="people-fill" size="3rem"></b-avatar>
    <b-row>
        <b-col class="first-name">{{patient.firstName}}</b-col>
        <b-col class="last-name">{{patient.lastName}}</b-col>
    </b-row>
    <b-row class="text-center">
        <b-col class="phone-number">{{patient.phoneNumber}}</b-col>
    </b-row>
    <b-row>
      <b-col class="text-start">{{$t('lastReception')}}:</b-col>
      <b-col class="text-start">10.11.2021</b-col>
    </b-row>
    <b-row>
      <b-col class="text-start">{{$t('recordedOn')}}:</b-col>
      <b-col class="text-start">22.02.2022</b-col>
    </b-row>
    <b-button-group>
      <b-button class="btn-left" variant="outline-secondary">{{$t('makeAnAppointment')}}</b-button>
      <b-button class="btn-right" variant="outline-secondary">{{$t('viewProfile')}}</b-button>
    </b-button-group>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {PatientModel} from '@/models/patient/PatientModel'

@Component
export default class PatientCard extends Vue {
    @Prop() private patient!: PatientModel;
}
</script>
<style>

</style>