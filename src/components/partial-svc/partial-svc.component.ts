import { PlanoService } from '../../services/planos/plano.service';
import { PlataformaService } from '../../services/plataformas/plataforma.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Plataforma } from '../../models/plataformas/plataforma.models';
import { Plano } from '../../models/planos/plano.models';

@Component({
    selector: 'partial-svc',
    templateUrl: 'partial-svc.component.html',
    styleUrls: ['partial-svc.component.sass']
})

export class PartialSvc {
    plataf: Array<Plataforma.IPlataforma>;
    plan: Array<Plano.IPlano>;
    plataformaSelecionada: string;
    
      
    constructor (
        private _plataformaService: PlataformaService,
        private _planoService: PlanoService,
    ) {
        
    }

    ngOnInit (): void {
        // this.getPlataformas();        
    }
    getPlataformas (): void {
        // this
        //     ._plataformaService
        //     .consultaPlataformas()
        //     .subscribe(plat => {
        //             this.plataf = plat;
        //         });
    }
    
    getPlanos(event: string): void {
        // if (event != ''){ 
        //     this.plataformaSelecionada = event;
        //     this
        //         ._planoService
        //         .consultaPlanos(event)
        //         .subscribe(plano => {
        //         this.plan= plano;
        //                 });
        //         }
        //         else
        //         {
        //             this.plan = [];
        //         }
    }

    cadastroUsuario(plano:string): void{
        // if(this.formulario.status === 'INVALID'){
        //     this.formulario.get('nome').markAsTouched()
        //     this.formulario.get('email').markAsTouched()
        //     this.formulario.get('cpf').markAsTouched()
        //     this.formulario.get('nascimento').markAsTouched()
        //     this.formulario.get('telefone').markAsTouched()
            
        // }
        // else {
        //     //Criando objeto a ser exibido no console
        //     let resultado = [{
        //         nome:this.formulario.get('nome').value,
        //         email:this.formulario.get('email').value,
        //         cpf:this.formulario.get('cpf').value,
        //         nascimento:this.formulario.get('nascimento').value,
        //         telefone:this.formulario.get('telefone').value,
        //         plataforma: this.plataformaSelecionada,
        //         plano: plano,
        //     }]
        //     console.log(resultado);
        // }
            
        }  
}