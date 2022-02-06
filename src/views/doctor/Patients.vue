<template>
  <div>
    <div class="search-filters">
      <b-row class="justify-content-md-center">
        <b-col ><b-input class="search" :placeholder="$t('searchForClientByNameOrPhone')"></b-input></b-col>
        <b-col class="col-md-auto show-filters" v-on:click="showFilters = !showFilters">{{showFilters? $t('hideFilters') : $t('showFilters')}}</b-col>
      </b-row>
      <b-row>

      </b-row>
    </div>
    <b-row class="justify-content-md-center" >
      <b-col v-for="patient in patients" v-bind:key="patient.id" class="col-md-auto">
        <patient-card :patient="patient" class="my-3"/>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {PatientModel} from '@/models/patient/PatientModel';
//components
import PatientCard from '../../components/doctor/PatientCard.vue'
@Component({
  components: {
    PatientCard,
  },
})
export default class Patients extends Vue {
  private showFilters:boolean = false;
  private patients:PatientModel[] = [
    {
      id:1,
      firstName:"Jhon",
      lastName:"Thert",
      patronymic:"sdfsd",
      email:"jhon1234@gmail.com",
      phoneNumber:"+380653486823",
      genderId:1,
      dateOfBirth:0,
      statusId:1,
      doctorId:1,
      doctorFullName:"Petter Gertuv",
      discount:12,
      lastVisit:0,
      nextVisit:0,
      deposit:0,
      duty:200,
      login:"+380653486823"      
    },
  ]
}
</script>
<style>

</style>