
export class userCred {
    public email:string;
    public password:string;
    public userType:string;


public constructor ( email?: string, password?: string, userType?: string ) {
    this.email = email || '';
    this.password = password || '';
    this.userType = userType || '';
}
}