import {BaseFilterModel} from './BaseFilterModel'
export class VisitFilterModel extends  BaseFilterModel {
    public search: string = '';
    public from:null|number = null;
    public to:null|number = null;
}