<template>
    <div>
        <b-row class="justify-content-md-center p-2">
            <b-col class="col-md-auto pt-2">{{$t('dateOfVisitFrom')}}</b-col>
            <b-col class="col-md-auto"><b-form-datepicker v-model="filters.from" :locale="$i18n.locale"/></b-col>
            <b-col class="col-md-auto pt-2">{{$t('to')}}</b-col>
            <b-col class="col-md-auto"><b-form-datepicker v-model="filters.to" :locale="$i18n.locale"/></b-col>
            <b-col><b-input v-model="filters.search" :placeholder="$t('searchByDoctorsNameAndLastName')+'...'"></b-input></b-col>
            <b-col class="col-md-auto"><b-button variant="outline-primary" v-on:click="addVisitShow = true">{{$t('add')}}</b-button></b-col>
        </b-row>
        <b-table
            ref="visitsTable"
            sticky-header
            :items="visits"
            :fields="headers"
            striped
            primary-key="a"
            @row-clicked="onRowClicked"
        >
            <template  #cell(statusId)="data" >
                <div>{{getStatus(data.item.statusId)}}</div>
            </template>
            <template  #cell(typeId)="data" >
                <div>{{getType(data.item.typeId)}}</div>
            </template>
        </b-table>
        <add-visit
            :modalShow="addVisitShow"
            @changesModalShow="addVisitChangesModalShow"
            @changesSaved="saveAddVisit"/>
        <edit-visit
            :visit="getSelectedVisit()"
            :modalShow="editVisitShow"
            @changesModalShow="editVisitChangesModalShow"
            @changesSaved="saveEditVisit"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {VisitModel} from '@/models/patient/VisitModel';
import {VisitFilterModel} from '@/models/filters/VisitFilterModel';
import {TableHeaderModel} from '@/models/common/TableHeaderModel';
import {ListModel} from '@/models/common/ListModel';
//const lists
import statusesVisitList from '@/const/lists/statusesVisit';
import typesVisitList from '@/const/lists/typesVisit';
//components
import AddVisit from '@/components/common/AddVisit.vue';
import EditVisit from '@/components/common/EditVisit.vue';
@Component({
  components: {
    AddVisit,
    EditVisit
  },
})
export default class Visits extends Vue {    
    @Prop() private visits!:VisitModel[];
    @Prop() private patientId!:number;
    private addVisitShow:boolean = false;
    private editVisitShow:boolean = false;
    private selectedVisitId:number = -1;
    private headers:TableHeaderModel[] = [
        { key: 'id', label:"ID", sortable: false },
        { key: 'date', label:this.$t('date').toString(), sortable: true },
        { key: 'doctorFullName', label:this.$t('doctor').toString(), sortable: false },
        { key: 'typeId', label:this.$t('type').toString(), sortable: true },
        { key: 'statusId', label:this.$t('status').toString(), sortable: true },
        { key: 'description', label:this.$t('description').toString(), sortable: false }
      ]
    private filters:VisitFilterModel = new VisitFilterModel();
    private statuses:ListModel[] = statusesVisitList;
    private types:ListModel[] = typesVisitList;
    private getStatus(id:number):string{
        let status = this.statuses.filter((item: ListModel)=>item.value == id);
        return this.$t(status[0].text).toString();
    }
    private getType(id:number):string{
        let type = this.types.filter((item: ListModel)=>item.value == id);
        return this.$t(type[0].text).toString();
    }
    private onRowClicked(item:VisitModel):void{
        this.selectedVisitId = item.id;
        this.editVisitShow = true;
    }
    private getSelectedVisit():VisitModel{
        return this.visits.filter((item: VisitModel)=>item.id == this.selectedVisitId)[0];
    }

    private addVisitChangesModalShow(){
        this.addVisitShow = false;
    }
    private saveAddVisit(visit:any){
        //to do axios
        this.addVisitShow = false;
        //this.visit = visit;
    }

    private editVisitChangesModalShow(){
        this.editVisitShow = false;
    }
    private saveEditVisit(visit:any){
        //to do axios
        this.editVisitShow = false;
        this.selectedVisitId = -1;
        //this.visit = visit;
    }
}
</script>
<style>

</style>