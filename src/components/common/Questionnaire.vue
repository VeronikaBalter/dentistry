<template>
    <b-modal :title="$t('questionnaire')"
        centered
        size="xl"
        @hide="hideEvent"
        v-model="localModalShow">
        <div class="header-questionnaire">{{$t('pastAndAssociatedDiseases')}}</div>
        <div v-for="question in questions" v-bind:key="question.id">
          <question-in-the-questionnaire 
            :id="question.id"
            :textQuestion="question.translationId"
            :state="question.state"
            @newValue="newValueQuestion"/>
        </div>
        <template #modal-footer="{ cancel }">
        <b-button variant="outline-secondary"  @click="cancel()"> {{$t('cancel')}}</b-button>
        <b-button variant="primary" v-on:click="ok()" data-cy="save"> {{$t('save')}}</b-button>
      </template>
    </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import QuestionInTheQuestionnaire from '../common/QuestionInTheQuestionnaire.vue';
//models
import {QuestionModel} from '@/models/common/QuestionModel';
//const lists
import questionsList from '@/const/lists/questions';
@Component({
  components: {
    QuestionInTheQuestionnaire
  },
})
export default class Questionnaire extends Vue { 
    @Prop() private modalShow!:boolean;
    private localModalShow = false;
    private questions:QuestionModel[] = questionsList;
    private questionsOldState:QuestionModel[] = questionsList;
    @Watch('modalShow')
    private modalShowWatch(value:boolean){
      this.localModalShow = this.modalShow;
    }
    // private created() {
    //   this.questions.forEach((el:any) => this.questionsOldState.push(el));
    // }

    private newValueQuestion(item:any){
      this.questions[item.id-1].state = item.value
    }
    private ok(){
      this.questionsOldState = this.questions;
      this.$emit('changesSaved',this.questions);
    }
    private hideEvent(){
      this.questions = this.questionsOldState;
      this.$emit('changesModalShow');
    }   
}
</script>
<style>
  
  .header-questionnaire{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
</style>