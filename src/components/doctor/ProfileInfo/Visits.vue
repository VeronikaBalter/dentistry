<template>
    <div>
        <b-row class="justify-content-md-center p-2">
            <b-col class="col-md-auto pt-2">{{$t('dateOfVisitFrom')}}</b-col>
            <b-col class="col-md-auto"><b-form-datepicker v-model="filters.from" :locale="$i18n.locale"/></b-col>
            <b-col class="col-md-auto pt-2">{{$t('to')}}</b-col>
            <b-col class="col-md-auto"><b-form-datepicker v-model="filters.to" :locale="$i18n.locale"/></b-col>
            <b-col><b-input v-model="filters.search" :placeholder="$t('searchByDoctorsNameAndLastName')+'...'"></b-input></b-col>
            <b-col class="col-md-auto"><b-button variant="outline-primary">{{$t('add')}}</b-button></b-col>
        </b-row>
        <b-table
            ref="visitsTable"
            sticky-header
            :items="visits"
            :fields="headers"
            striped
            primary-key="a"
        >
            <!-- <template  #cell(actions)="data" id="actions-table">
            <div class="float-right">
                <b-row>
                <b-col class="edit">
                    <b-button class="btn-icon" v-on:click="selectUser(data.item)" v-b-modal.edit-internal-users variant="outline-secondary" :data-cy="'edit-' + item.name">
                    <div class="icon"><icon-ibs style="font-size: 24px" name="icon-edit"/></div>
                    <div>{{$t('systemdistributor.overview.table.buttons.edit')}}</div>
                    </b-button>
                </b-col>
                <b-col>
                    <b-button class="ml-n2 trash" v-on:click="selectedUser = data.item" v-b-modal.delete-user variant="outline-secondary"><icon-ibs name="icon-trash" :error="true"/></b-button>
                </b-col>
                </b-row>
            </div>
            </template> -->
        </b-table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
//models
import {VisitModel} from '@/models/patient/VisitModel';
import {VisitFilterModel} from '@/models/filters/VisitFilterModel';
import {TableHeaderModel} from '@/models/common/TableHeaderModel';
@Component({
  components: {
    
  },
})
export default class Visits extends Vue {    
    @Prop() private visits!:VisitModel;
    @Prop() private patientId!:number;
    private headers:TableHeaderModel[] = [
        { key: 'id', label:"ID", sortable: false },
        { key: 'date', label:this.$t('date').toString(), sortable: true },
        { key: 'doctorFullName', label:this.$t('doctor').toString(), sortable: false },
        { key: 'typeId', label:this.$t('type').toString(), sortable: true },
        { key: 'statusId', label:this.$t('status').toString(), sortable: true },
        { key: 'description', label:this.$t('description').toString(), sortable: false },
        { key: 'actions', label: '',sortable: false}
      ]
    private filters:VisitFilterModel = new VisitFilterModel();
    created() {
        
    }
}
</script>
<style>

</style>