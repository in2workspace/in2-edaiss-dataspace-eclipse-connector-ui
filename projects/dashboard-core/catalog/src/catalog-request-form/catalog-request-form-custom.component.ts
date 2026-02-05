import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { CatalogRequestFormComponent } from './catalog-request-form.component';

@Component({
  selector: 'lib-catalog-request-form',
  templateUrl: './catalog-request-form-custom.component.html',
  imports: [ReactiveFormsModule, NgClass, AsyncPipe],
})
export class CatalogRequestFormCustomComponent extends CatalogRequestFormComponent implements OnInit {
  override async ngOnInit() {
    const conf = await firstValueFrom(this.stateService.currentEdcConfig$);
    if (conf?.did) {
      this.requestForm.removeControl('counterPartyId');
    } else {
      this.requestForm.removeControl('counterPartyId');
    }
  }
}
