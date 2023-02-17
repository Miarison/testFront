export class RegistrationModel{
    private name: string | undefined;
    private lastname: string | undefined;
    private username: string | undefined;
    private password: string | undefined;

    public constructor(name: string, lastname: string, username: string, password: string){
        this.setName(name);
        this.setLastname(lastname);
        this.setUsername(username);
        this.setPassword(password);
    }

   
    public getName(): string | undefined{
        return this.name;
    }
    public getLastname(): string | undefined{
        return this.lastname;
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
    public setName(name: string): void{
        this.name = name;
    }
    public setLastname(lastname: string): void{
        this.lastname = lastname;
    }

}