export class PatientModel {
    public id: number | null = null;
    public firstName:string = '';
    public lastName:string = '';
    public patronymic:string|null = '';
    public email:string|null = '';
    public phoneNumber:string = '';
    public genderId: number | null = null;
    public dateOfBirth: number = 0;
    public statusId: number | null = null;
    public doctorId: number | null = null;
    public doctorFullName: string = '';
    public discount: number = 0;
    public lastVisit: number = 0;
    public nextVisit: number = 0;
    public deposit: number = 0;
    public duty: number = 0;
    public login: string = '';
}