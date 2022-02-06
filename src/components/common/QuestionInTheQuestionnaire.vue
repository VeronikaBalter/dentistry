<template>
    <b-row class="question-in-the-questionnaire  justify-content-md-center pb-2 pt-1">
        <b-col>{{$t(textQuestion)}}</b-col>
        <b-col class="col-md-auto">
            <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio-group
                    v-model="questionValue"
                    :options="options"
                    :aria-describedby="ariaDescribedby"
                ></b-form-radio-group>
            </b-form-group>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
@Component({
  components: {
    
  },
})
export default class QuestionInTheQuestionnaire extends Vue {
    @Prop() private id!:number;
    @Prop() private textQuestion!:string;   
    @Prop() private state!:boolean|null;   
    private value:boolean|null = null; 
    private options:any = [
          { text: this.$t('yes'), value: true },
          { text: this.$t('no'), value: false },
          { text: this.$t('IDoNotKnow'), value: null },
        ]
    private created() {
        this.value = this.state ; 
    }
    get questionValue(){
        return this.value;
    }
    set questionValue(value:boolean|null){
        this.value = value;
        this.$emit('newValue', {id:this.id,value:value});
    }
}
</script>
<style >
.question-in-the-questionnaire .bv-no-focus-ring{
    display: flex;
}
.question-in-the-questionnaire .custom-control-label{
    margin:0px 5px;
}
</style>