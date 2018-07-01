import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class ServicosService {    
    constructor (
        private _httpClient: Http,        
    ) {
        
    }

    /**
     * Consultando Planos
     * @author Paulo Eduardo - pauloems@yahoo.com.br
     */
    consultaServicos(): Observable<any> {
        //plano = sku
        return this
            ._httpClient
            .get(`http://fideliu.com.br/v1/genial/servicos/consultar`)
            .retry(3)
            .map(response => response.json());
    }

   
}
