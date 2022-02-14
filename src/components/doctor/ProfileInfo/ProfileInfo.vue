<template>
    <b-row class="justify-content-md-center">
        <b-col class="col-md-auto">
            <b-avatar variant="success" icon="people-fill" size="4rem"></b-avatar>
        </b-col>
        <b-col>
            <div class="patient-name">{{patient.firstName}} {{patient.lastName}}</div>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('gender')}}:</b-col> 
                <b-col class="patient-info-data">{{getGender()}}</b-col> 
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('dateOfBirth')}}:</b-col> 
                <b-col class="patient-info-data">{{$moment(patient.dateOfBirth).format('L')}} ({{getAge()}} {{$t('years')}})</b-col> 
            </b-row>
        </b-col>
        <b-col>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('cardNumber')}}:</b-col> 
                <b-col class="patient-info-data">{{patient.id}}</b-col> 
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('status')}}:</b-col> 
                <b-col class="patient-info-data">{{getActivity()}}</b-col> 
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('lastVisit')}}:</b-col> 
                <b-col class="patient-info-data">{{$moment(patient.lastVisit).format('L')}}</b-col> 
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('nextVisit')}}:</b-col> 
                <b-col class="patient-info-data">{{$moment(patient.nextVisit).format('L')}}</b-col> 
            </b-row>
        </b-col>
        <b-col>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('doctor')}}:</b-col> 
                <b-col class="patient-info-data">{{patient.doctorFullName}}</b-col> 
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('discount')}}:</b-col> 
                <b-col class="patient-info-data">{{patient.discount}} %</b-col> 
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('deposit')}}:</b-col> 
                <b-col class="patient-info-data deposit">{{patient.deposit}} ₴</b-col> 
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto">{{$t('duty')}}:</b-col> 
                <b-col class="patient-info-data duty">{{patient.duty}} ₴</b-col> 
            </b-row>
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
import gendersList from '@/const/lists/genders';
@Component({
  components: {
  },
})
export default class ProfileInfo extends Vue {
    @Prop() private patient!: PatientModel;
    private statuses:ListModel[] = statusPatientList;
    private genders:ListModel[] = gendersList;
    private getGender():string{
        let gender = this.genders.filter((item: ListModel)=>item.value == this.patient.genderId);
        return this.$t(gender[0].text).toString();
    }
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
.patient-info-data{
    color: #303030;
    padding-left: 0px;
    margin-left: -5px;
}
.deposit{
    color: #49ca77;
}
.duty{
    color: #e47272;
}
</style>