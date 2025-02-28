import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { ClienteService } from '../../../services/cliente.service';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router'; // Importa RouterModule
declare var iziToast : any;
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-create-producto',
  standalone: true,
  imports: [SidebarComponent, CommonModule,FormsModule, RouterModule],
  templateUrl: './create-producto.component.html',
  styleUrl: './create-producto.component.css'
})
export class CreateProductoComponent implements OnInit{

  public producto : any ={};
  public file: File | undefined;
  imgSelect: any | ArrayBuffer = 'assets/img/01.jpg';


  constructor(){

  }

  ngOnInit(): void {
    
  }

  registro(registroForm:any){
    if (registroForm.valid){

    }else{
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

  fileChangeEvent(event:any): void{
    var file: any;
    if (event.target.files && event.target.files[0]){
       file = <File>event.target.files[0];

    } else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'No hay una imagen de envio'
      });
    }

    if (file.size <=  4000000){
        if (file.type== 'image/png' || file.type == 'image/jpg' || file.type == 'image/webp' || file.type == 'image/gif' || file.type == 'image/jpeg' ){
            const reader = new FileReader();
            reader.onload=e=>this.imgSelect = reader.result;
            reader.readAsDataURL(file);
            
            $('#imput-portada').text(file.name);

            this.file = file;
        }else{
          iziToast.show({
            title: 'ERROR',
            titleColor: '#FF0000',
            color: '#FFF',
            class: 'text-danger',
            position: 'topRight',
            message: 'Formato de imagen no permitido'
          });

            this.imgSelect = 'assets/img/01.jpg'
            this.file=undefined;
        }
      
    }else{
        iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'La imagen no puede superar los 4mb'
      });
      this.imgSelect = 'assets/img/01.jpg'
      this.file=undefined;
    }
      console.log(this.file);
    }

}


