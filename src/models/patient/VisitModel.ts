export class VisitModel {
    public id: number = 0;
    public doctorId: number = 0;
    public date: number|null = new Date(Date.now.toString()).getTime();
    public doctorFullName: string = '';
    public typeId: number = 1;
    public statusId: number = 1;
    public price: number = 1;
    public description: string = '';
    public duration:number = 1;
}