import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardStateService } from '@eclipse-edc/dashboard-core';
import { AsyncPipe, NgClass } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { CatalogRequestFormComponent } from './catalog-request-form.component';

@Component({
  selector: 'lib-catalog-request-form',
  templateUrl: './catalog-request-form-custom.component.html',
  imports: [ReactiveFormsModule, NgClass, AsyncPipe],
})
export class CatalogRequestFormCustomComponent extends CatalogRequestFormComponent implements OnInit {
  public constructor(override readonly stateService: DashboardStateService) {
    super(stateService);
  }

  override async ngOnInit() {
    const conf = await firstValueFrom(this.stateService.currentEdcConfig$);
    if (conf?.did) {
      this.requestForm.removeControl('counterPartyId');
    } else {
      this.requestForm.removeControl('counterPartyId');
    }
  }
}
