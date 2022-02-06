<template>
  <div>
    <div v-if="notes.length>0">
      <b-row class="justify-content-md-center p-2">
        <b-col></b-col>
        <b-col class="col-md-auto"><b-button variant="outline-primary">{{$t('add')}}</b-button></b-col>
      </b-row>
      <b-table
        ref="visitsTable"
        sticky-header
        :items="notes"
        :fields="headers"
        striped
        primary-key="a">
      </b-table>
    </div>
    <empty-page 
      :msg="$t('thisPatientHasNoNotesButYouCanAddThemRightNow')"
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
export default class Notes extends Vue {    
    @Prop() private patientId!:number;    
    private notes:any=[];
    private headers:TableHeaderModel[] = [
        { key: 'id', label:"ID", sortable: false },
        { key: 'name', label:this.$t('name').toString(), sortable: false },
        { key: 'description', label:this.$t('description').toString(), sortable: true },
        { key: 'date', label:this.$t('created').toString(), sortable: true },
        { key: 'priorities', label:this.$t('priorities').toString(), sortable: true },
        { key: 'actions', label: '', sortable: true }
      ]
}
</script>
<style>

</style>