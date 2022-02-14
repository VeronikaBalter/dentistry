<template>
    <b-modal :title="$t('newVisit')"
        centered
        @hide="hideEvent"
        v-model="localModalShow">
        <b-row class="mb-2">
            <b-col>
                <label>{{$t('type')}}</label>
                <b-select v-model="newVisit.typeId">
                    <option v-for="type in types" :key="type.value" :value="type.value">{{ $t(type.text)}}</option>
                </b-select>
            </b-col>
            <b-col>
                <label>{{$t('doctor')}}</label>
                <b-select v-model="newVisit.doctorId" :options="doctors"></b-select>
            </b-col>
        </b-row>
        <b-row class="mb-2">
            <b-col>
                <label>{{$t('dateOfVisit')}}</label>
                <datetime type="datetime" v-model="dateVisit"></datetime>
            </b-col>
            <b-col>
                <label>{{$t('duration')}}</label>
                <b-input v-model="newVisit.duration" type="number" />
            </b-col>
        </b-row>
        <b-row class="mb-2">
            <b-col>
                <label>{{$t('status')}}</label>
                <b-select v-model="newVisit.statusId">
                    <option v-for="status in statuses" :key="status.value" :value="status.value">{{ $t(status.text)}}</option>
                </b-select>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <label>{{$t('notes')}}</label>
                <b-form-textarea v-model="newVisit.description" rows="3" max-rows="6" ></b-form-textarea>
            </b-col>
        </b-row>
    <template #modal-footer="{ cancel }">
        <b-button variant="outline-secondary"  @click="cancel()"> {{$t('cancel')}}</b-button>
        <b-button variant="primary" v-on:click="ok()" data-cy="save"> {{$t('add')}}</b-button>
      </template>
    </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {VisitModel} from '@/models/patient/VisitModel';
import {ListModel} from '@/models/common/ListModel';
//const lists
import typesVisitList from '@/const/lists/typesVisit';
import statusesVisitList from '@/const/lists/statusesVisit';
@Component({
  components: {
  },
})
export default class AddVisit extends Vue { 
    @Prop() private modalShow!:boolean;
    private localModalShow:boolean = false;
    private newVisit:VisitModel =  new VisitModel();
    private doctors:any =[
        {
            value:1,
            text:"Trevor Derty"
        }
    ]
    private types:ListModel[] =  typesVisitList;
    private statuses:ListModel[] = statusesVisitList;
    @Watch('modalShow')
    private modalShowWatch(value:boolean){
      this.localModalShow = this.modalShow;
    }
    get dateVisit():string{
        if(this.newVisit.date && this.newVisit.date>0)
            return new Date(this.newVisit.date).toISOString();
        else 
            return new Date(Date.now()).toISOString();
    }
    set dateVisit(value:string){
        this.newVisit.date = new Date(value).getTime();
    }


    private newValueQuestion(item:any){
      //this.questions[item.id-1].state = item.value
    }
    private ok(){
      //this.questionsOldState = this.questions;
      //this.$emit('changesSaved',this.questions);
    }
    private hideEvent(){
      //this.questions = this.questionsOldState;
      this.$emit('changesModalShow');
    }   
}
</script>
<style>
</style>