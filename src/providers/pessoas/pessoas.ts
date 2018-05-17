import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PessoasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PessoasProvider {

  private pessoas: any

  private apiUrl : string = "https://randomuser.me/api/?results=10&nat=br&seed=abc"

  constructor(public http: HttpClient) {
    console.log('Hello PessoasProvider Provider')
  }

  public load(): Promise<any> {
      if (this.pessoas) {
        return Promise.resolve(this.pessoas)
      }
      return new Promise(resolve => {
          this.http.get(this.apiUrl)
            .subscribe((data : any) => {
                this.pessoas = data.results
                resolve(this.pessoas)
            }), error => {
                console.log(error)
            }
      })
  }

  loadByEmail(email: string) {
    for (let pessoa of this.pessoas) {
      if (pessoa.email == email) {
        return pessoa
      }
    }
  }

}
