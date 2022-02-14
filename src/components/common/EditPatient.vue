<template>
    <b-modal :title="$t('edit')"
        centered
        size="xl"
        @hide="hideEvent"
        v-model="localModalShow">

        <b-row class="mb-2">
            <b-col>
                <label>{{$t('firstName')}}</label>
                <b-input v-model="localPatient.firstName" />
            </b-col>
            <b-col>
                <label>{{$t('lastName')}}</label>
                <b-input v-model="localPatient.lastName"/>
            </b-col>
            <b-col>
                <label>{{$t('patronymic')}}</label>
                <b-input v-model="localPatient.patronymic"/>
            </b-col>
        </b-row>
        <b-row class="mb-2">
            <b-col>
                <label>Email</label>
                <b-input v-model="localPatient.email" />
            </b-col>
            <b-col>
                <label>{{$t('phoneNumber')}}</label>
                <b-input v-model="localPatient.phoneNumber"/>
            </b-col>
            <b-col>
                <label>{{$t('status')}}</label>
                <b-select v-model="localPatient.statusId">
                    <option v-for="status in statuses" :key="status.value" :value="status.value">{{ $t(status.text)}}</option>
                </b-select>
            </b-col>
        </b-row>
        <b-row class="mb-2">
            <b-col>
                <label>{{$t('dateOfBirth')}}</label>
                <b-input v-model="patient.dateOfBirth" />
            </b-col>
            <b-col>
                <label>{{$t('gender')}}</label>
                <b-select v-model="localPatient.genderId">
                    <option v-for="gender in genders" :key="gender.value" :value="gender.value">{{ $t(gender.text)}}</option>
                </b-select>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
        <hr/>
        <b-row class="mb-2">
            <b-col>
                <label>{{$t('address')}}</label>
                <b-input v-model="patient.address" />
            </b-col>
            <b-col>
                <label>{{$t('inn')}}</label>
                <b-input v-model="patient.inn"/>
            </b-col>
            <b-col>
                <label>{{$t('passport')}}</label>
                <b-input v-model="patient.passport"/>
            </b-col>
        </b-row>
        <b-row class="mb-2">
            <b-col>
                <label>{{$t('discount')}}</label>
                <b-input v-model="localPatient.discount" />
            </b-col>
            <b-col>
                <label>{{$t('doctor')}}</label>
                <b-select v-model="localPatient.doctorId" :options="doctors"></b-select>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
        <hr/>
        <b-row class="mb-2">
            <b-col>
                <label>{{$t('login')}}</label>
                <b-input :disabled="true" v-model="localPatient.login" />
            </b-col>
            <b-col>
                <label>{{$t('password')}}</label>
                <b-input v-model="password"/>
            </b-col>
            <b-col>
                <label>{{$t('repeatPassword')}}</label>
                <b-input v-model="repeatPassword"/>
            </b-col>
        </b-row>
        
        <template #modal-footer="{ cancel }">
            <b-button variant="outline-secondary"  @click="cancel()"> {{$t('cancel')}}</b-button>
            <b-button variant="primary" v-on:click="ok()" data-cy="save"> {{$t('save')}}</b-button>
        </template>
    </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {PatientModel} from '@/models/patient/PatientModel';
import {ListModel} from '@/models/common/ListModel';
//const lists
import genderList from '@/const/lists/genders'
import statusPatientList from '@/const/lists/statusesPatient'
@Component({
  components: {
    
  },
})
export default class EditPatient extends Vue {
    @Prop() private modalShow!:boolean;
    @Prop() private patient!:PatientModel;
    private localModalShow:boolean = false;   
    private localPatient:PatientModel = new PatientModel();
    private password:string = '';
    private repeatPassword:string = '';
    
    private genders: ListModel[] = genderList;
    private statuses: ListModel[] = statusPatientList;
    private doctors:any =[
        {
            value:1,
            text:"Trevor Derty"
        }
    ]
     
    @Watch('modalShow')
    private modalShowWatch(value:boolean){
      this.localModalShow = this.modalShow;
    }
    
    private created() {
      this.localPatient = Object.assign([], this.patient);
    }
    private ok(){
      this.$emit('changesSaved',this.localPatient);
    }
    private hideEvent(){
        this.localPatient = Object.assign([], this.patient);
        this.$emit('changesModalShow');
    } 
}
</script>
<style>

</style>