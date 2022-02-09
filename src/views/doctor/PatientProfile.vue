<template>
    <div class="patient-profile">
        <b-card class="user-info">
            <b-row class="justify-content-md-center">
                <b-col class="col-md-auto p-0 px-1 breadcrumbs" v-on:click="$router.push('patients')">{{$t('patients')}}</b-col>
                <b-col class="col-md-auto p-0">/ {{patient.firstName}} {{patient.lastName}}</b-col>
                <b-col></b-col>
                <b-col class="col-md-auto"><b-button v-on:click="questionnaireShow = true">{{$t('questionnaire')}}</b-button></b-col>
                <b-col class="col-md-auto"><b-button>{{$t('treaty')}}</b-button></b-col>
                <b-col class="col-md-auto"><b-button v-on:click="editPatientShow = true">{{$t('edit')}}</b-button></b-col>
                <b-col class="col-md-auto"><b-button>{{$t('print')}}</b-button></b-col>
                <b-col class="col-md-auto"><b-button v-on:click="addVisitShow = true">{{$t('add')}}</b-button></b-col>
            </b-row>
            <profile-info :patient="patient" class="mt-4"/>
        </b-card>
        <b-card no-body class="card-tabs">
            <b-tabs card>
                <b-tab no-body :title="$t('visits')">
                    <visits
                        :visits="visits"
                        :patientId="patient.id"/>
                </b-tab>
                <b-tab no-body :title="$t('formula')">
                    <formula/>
                </b-tab>
                <b-tab no-body :title="$t('treatmentPlan')">
                    <treatment-plan/>
                </b-tab>
                <b-tab no-body :title="$t('snapshots')">
                    <snapshots/>
                </b-tab>
                <b-tab no-body :title="$t('notes')">
                    <notes/>
                </b-tab>
                <b-tab no-body :title="$t('documentation')">
                    <documentation
                        :patientId="patient.id"
                    />
                </b-tab>
            </b-tabs>
        </b-card>
        <questionnaire
            :modalShow="questionnaireShow"
            @changesModalShow="questionnaireChangesModalShow"
            @changesSaved="saveQuestionnaire"/>
        <edit-patient
            :modalShow="editPatientShow"
            :patient="patient"
            @changesModalShow="editPatientChangesModalShow"
            @changesSaved="saveEditPatient"/>
        <add-visit
            :modalShow="addVisitShow"
            @changesModalShow="addVisitChangesModalShow"
            @changesSaved="saveAddVisit"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {PatientModel} from '@/models/patient/PatientModel';
import {VisitModel} from '@/models/patient/VisitModel';
//components
import Documentation from '@/components/doctor/ProfileInfo/Documentation.vue';
import Formula from '@/components/doctor/ProfileInfo/Formula.vue';
import Notes from '@/components/doctor/ProfileInfo/Notes.vue';
import ProfileInfo from '@/components/doctor/ProfileInfo/ProfileInfo.vue';
import Snapshots from '@/components/doctor/ProfileInfo/Snapshots.vue';
import TreatmentPlan from '@/components/doctor/ProfileInfo/TreatmentPlan.vue';
import Visits from '@/components/doctor/ProfileInfo/Visits.vue';
import Questionnaire from '@/components/common/Questionnaire.vue';
import EditPatient from '@/components/common/EditPatient.vue';
import AddVisit from '@/components/common/AddVisit.vue';

@Component({
    components: {
        Documentation,
        Formula,
        Notes,
        ProfileInfo,
        Snapshots,
        TreatmentPlan,
        Visits,
        Questionnaire,
        EditPatient,
        AddVisit
    },
})
export default class PatientProfile extends Vue {
    private questionnaireShow:boolean = false;
    private editPatientShow:boolean = false;
    private addVisitShow:boolean = false;
    private patient:PatientModel = 
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
            
        };
    private visits:VisitModel[] = [{
        id:1234,
        date:1573052400000,
        doctorId:23, 
        doctorFullName:"Petter Gertuv",
        typeId:1,
        statusId:1,
        description: '',
        price:200,
        duration:30,
    },
   ];
    private questionnaireChangesModalShow(){
        this.questionnaireShow = false;
    }
    private saveQuestionnaire(questionnaire:any){
        //to do axios
        this.questionnaireShow = false;
    }
    private editPatientChangesModalShow(){
        this.editPatientShow = false;
    }
    private saveEditPatient(patient:any){
        //to do axios
        this.editPatientShow = false;
        this.patient = patient;
    }

    private addVisitChangesModalShow(){
        this.addVisitShow = false;
    }
    private saveAddVisit(visit:any){
        //to do axios
        this.addVisitShow = false;
        //this.visit = visit;
    }
}
</script>
<style>
.patient-profile .user-info .btn{
    border-radius: 36px;
    background-color: #F3F3F3;
    border-color: #F3F3F3;
    color: #6F7D8A;
}

.patient-profile .user-info .btn:hover{
    background-color: #e4e4e4;
    border-color: #d2d2d2;
    color: #767676;
}
.patient-profile .user-info .btn:focus{
    box-shadow: 0 0 0 0.1rem rgb(130 138 145 / 50%);
}
.patient-profile .card-tabs{
    min-height: 400px;
}
</style>