import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoasProvider } from '../../providers/pessoas/pessoas'
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pessoas: any

  constructor(public navCtrl: NavController,
              public pessoasProvider: PessoasProvider) {
      this.loadPessoas()
  }

  loadPessoas() {
    this.pessoasProvider.load().then(data => {
      this.pessoas = data
    })
  }

  public verDetalhes(pessoa: any) {
    this.navCtrl.push(DetalhesPage, {
      pessoa: pessoa,
      email: pessoa.email
    })
  }

}
