export class userData{
    public email:string;
    public jwt:string;
    public clientID:number;

    public constructor ( email?: string, jwt?: string, clientID?: number ) {
        this.email = email || '';
        this.jwt = jwt || '';
        this.clientID = clientID || 0;
    }
}
