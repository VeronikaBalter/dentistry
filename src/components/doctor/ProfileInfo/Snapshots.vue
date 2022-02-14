<template>
  <div>
    <div v-if="snapshots.length>0">
      <b-row class="justify-content-md-center p-2">
        <b-col></b-col>
        <b-col class="col-md-auto"><b-button variant="outline-primary">{{$t('add')}}</b-button></b-col>
      </b-row>
      <b-table
        ref="visitsTable"
        sticky-header
        :items="snapshots"
        :fields="getHeaders()"
        striped
        primary-key="a">
      </b-table>
    </div>
    <empty-page 
      :msg="$t('thisPatientDoesNotHaveDentalImagesButYouCanAddThemRightNow')"
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
export default class Snapshots extends Vue {    
  @Prop() private patientId!:number;    
  private snapshots:any=[];
  private getHeaders():TableHeaderModel[]{
    return [
        { key: 'id', label:"ID", sortable: false },
        { key: 'date', label:this.$t('dateOfDownload').toString(), sortable: false},
        { key: 'snapshot', label:this.$t('snapshot').toString(), sortable: false },
        { key: 'visitId', label:this.$t('visit').toString(), sortable: true },
        { key: 'teeth', label:this.$t('teeth').toString(), sortable: true },
        { key: 'description', label:this.$t('description').toString(), sortable: false},
        { key: 'actions', label: '', sortable: false}
      ]
  }
}
</script>
<style>

</style>