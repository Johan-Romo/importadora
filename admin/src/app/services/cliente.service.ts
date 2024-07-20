
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { GLOBAL } from './GLOBAL';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url: string;

  constructor(
    private _http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.url = GLOBAL.url;
  }

  listar_clientes_filtro_admin(tipo:any,filtro:any, token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_clientes_filtro_admin/'+tipo+'/'+filtro,{ headers: headers });
  }

  registro_cliente_admin(data:any,token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
    return this._http.post(this.url + 'registro_cliente_admin',data,{ headers: headers });
  }
  obtener_cliente_admin(id:any,token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
    return this._http.get(this.url + 'obtener_cliente_admin/'+id,{ headers: headers });
  }

  actualizar_cliente_admin(id:any,data:any,token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
    return this._http.put(this.url + 'actualizar_cliente_admin/' + id,data,{ headers: headers });
  }

  eliminar_cliente_admin(id:any,token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
    return this._http.delete(this.url + 'eliminar_cliente_admin/' + id,{ headers: headers });
  }
}

