import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
declare var iziToast: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public user: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm: any): void {
    if (loginForm.valid) {
      console.log(this.user);
      alert('si es valido');
    } else {
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      });
    }
  }
}