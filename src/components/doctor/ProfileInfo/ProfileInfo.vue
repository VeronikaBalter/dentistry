<template>
    <b-row class="justify-content-md-center">
        <b-col class="col-md-auto">
            <b-avatar variant="success" icon="people-fill" size="4rem"></b-avatar>
        </b-col>
        <b-col>
            <div>{{patient.firstName}} {{patient.lastName}}</div>
            <div>{{patient.gender}}</div>
            <div>{{$t('activity')}}</div>
            <div>{{$t('dateOfBirth')}}  ({{$t('years')}})</div>
        </b-col>
        <b-col>
            <div>{{$t('cardNumber')}}: {{patient.id}}</div>
            <div>{{$t('status')}}</div>
            <div>{{$t('doctor')}}: {{patient.discount}}</div>
            <div>{{$t('discount')}}: {{patient.discount}}</div>
        </b-col>
        <b-col>
            <div>{{$t('lastVisit')}}</div>
            <div>{{$t('nextVisit')}}</div>
            <div>{{$t('deposit')}}: {{patient.deposit}}</div>
            <div>{{$t('duty')}}: {{patient.duty}}</div>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {PatientModel} from '@/models/patient/PatientModel'
@Component({
  components: {
  },
})
export default class ProfileInfo extends Vue {
    @Prop() private patient!: PatientModel;
    
}
</script>
<style>

</style>