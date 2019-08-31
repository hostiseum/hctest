import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedShirtComponent } from './selected-shirt/selected-shirt.component';
import { ShirttieMatchComponent } from './shirttie-match/shirttie-match.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SelectedShirtComponent,
    ShirttieMatchComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ShirttieMatchComponent
  ]
})
export class ProductModule { }
