<template>
    <b-row class="justify-content-md-center">
        <b-col class="col-md-auto">
            <b-avatar variant="success" icon="people-fill" size="4rem"></b-avatar>
        </b-col>
        <b-col>
            <div class="patient-name">{{patient.firstName}} {{patient.lastName}}</div>
            <div>{{patient.gender}}</div>
            <div>{{$t('status')}}: {{getActivity()}}</div>
            <div>{{$t('dateOfBirth')}} {{$moment(patient.dateOfBirth).format('L')}} ({{getAge()}} {{$t('years')}})</div>
        </b-col>
        <b-col>
            <div>{{$t('cardNumber')}}: {{patient.id}}</div>
            <div>{{$t('lastVisit')}}:  {{$moment(patient.lastVisit).format('L')}}</div>
            <div>{{$t('nextVisit')}}:  {{$moment(patient.nextVisit).format('L')}}</div>
            <div>{{$t('doctor')}}: {{patient.discount}}</div>
        </b-col>
        <b-col>
            <div>{{$t('discount')}}: {{patient.discount}}</div>
            <div>{{$t('deposit')}}: {{patient.deposit}}</div>
            <div>{{$t('duty')}}: {{patient.duty}}</div>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {PatientModel} from '@/models/patient/PatientModel';
import {ListModel} from '@/models/common/ListModel';
//const lists
import statusPatientList from '@/const/lists/statusesPatient';
@Component({
  components: {
  },
})
export default class ProfileInfo extends Vue {
    @Prop() private patient!: PatientModel;
    private statuses:ListModel[] = statusPatientList;
    private getActivity():string{
        let status = this.statuses.filter((item: ListModel)=>item.value == this.patient.statusId);
        return this.$t(status[0].text).toString();
    }
    private getAge():number{
        return new Date().getUTCFullYear() - new Date(this.patient.dateOfBirth).getUTCFullYear();
    }
    
}
</script>
<style scoped>
.patient-name{
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 3px
}

</style>