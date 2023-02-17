export class SigninModel{
    private username: string | undefined;
    private password: string | undefined;

    public constructor(username: string, password: string){
        this.setUsername(username);
        this.setPassword(password);
    }

    public getUsername(): string | undefined{
        return this.username;
    }
    public getPassword(): string | undefined{
        return this.password;
    }

    public setUsername(username: string): void{
        this.username = username;
    }
    public setPassword(password: string): void{
        this.password = password;
    }
    
}