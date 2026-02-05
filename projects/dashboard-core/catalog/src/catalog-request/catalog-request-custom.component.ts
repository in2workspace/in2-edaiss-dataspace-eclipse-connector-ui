import { Component, OnDestroy } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CatalogRequest } from '@think-it-labs/edc-connector-client/dist/src/entities/catalog';
import { AsyncPipe, NgClass } from '@angular/common';
import { CatalogRequestComponent } from './catalog-request.component';
import { CatalogRequestFormCustomComponent } from '../catalog-request-form/catalog-request-form-custom.component';

@Component({
  selector: 'lib-catalog-request',
  standalone: true,
  imports: [FormsModule, AsyncPipe, NgClass],
  templateUrl: './catalog-request-custom.component.html',
})
export class CatalogRequestCustomComponent extends CatalogRequestComponent implements OnDestroy {
  override openRequestForm() {
    this.modalAndAlertService.openModal(CatalogRequestFormCustomComponent, undefined, {
      request: (request: CatalogRequest) => {
        this.modalAndAlertService.closeModal();
        this.getUnknownCatalog(request);
      },
    });
  }
}
