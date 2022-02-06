<template>
  <div>
    <div v-if="documentations.length>0">
      <b-row class="justify-content-md-center p-2">
        <b-col></b-col>
        <b-col class="col-md-auto"><b-button variant="outline-primary">{{$t('add')}}</b-button></b-col>
      </b-row>
      <b-table
        ref="documentationTable"
        sticky-header
        :items="documentations"
        :fields="headers"
        striped
        primary-key="a">
      </b-table>
    </div>
    <empty-page 
      :msg="$t('thisPatientHasNoAttachedDocumentsButYouCanDoItRightNow')"
      :msgBtn="$t('add')"/>
  </div>  
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {TableHeaderModel} from '@/models/common/TableHeaderModel';
//components
import EmptyPage from '../../common/EmptyPage.vue';
@Component({
  components: {
    EmptyPage
  },
})
export default class Documentation extends Vue {    
    @Prop() private patientId!:number;    
    private documentations:any=[];
    private headers:TableHeaderModel[] = [
        { key: 'id', label:"ID", sortable: false },
        { key: 'file', label:this.$t('file').toString(), sortable: false},
        { key: 'date', label:this.$t('dateOfDownload').toString(), sortable: false},
        { key: 'description', label:this.$t('description').toString(), sortable: false},
        { key: 'actions', label: '', sortable: false}
      ]
}
</script>
<style>

</style>