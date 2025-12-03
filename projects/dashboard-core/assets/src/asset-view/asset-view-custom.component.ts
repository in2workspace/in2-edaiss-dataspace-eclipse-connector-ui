import { Component, OnDestroy, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';
import { AsyncPipe } from '@angular/common';
import { Asset, IdResponse } from '@think-it-labs/edc-connector-client';
import { Subject, takeUntil } from 'rxjs';
import {
  DashboardStateService,
  FilterInputComponent,
  ItemCountSelectorComponent,
  ModalAndAlertService,
  PaginationComponent,
} from '@eclipse-edc/dashboard-core';
import { AssetCardComponent } from '../asset-card/asset-card.component';
import { AssetViewComponent } from './asset-view.component';
import { AssetCreateCustomComponent } from '../asset-create/asset-create-custom.component';

@Component({
  selector: 'lib-asset-view',
  standalone: true,
  imports: [AsyncPipe, FilterInputComponent, PaginationComponent, AssetCardComponent, ItemCountSelectorComponent],
  templateUrl: './asset-view-custom.component.html',
  styleUrl: './asset-view-custom.component.css',
})
export class AssetViewCustomComponent extends AssetViewComponent implements OnInit, OnDestroy {
  protected override readonly destroy$ = new Subject<void>();

  constructor(
    protected override readonly assetService: AssetService,
    protected override readonly modalAndAlertService: ModalAndAlertService,
    protected override readonly stateService: DashboardStateService,
  ) {
    super(assetService, modalAndAlertService, stateService);
    this.stateService.currentEdcConfig$.pipe(takeUntil(this.destroy$)).subscribe(this.fetchAssets.bind(this));
  }

  override createAsset() {
    const callbacks = {
      created: (id: IdResponse) => {
        this.modalAndAlertService.closeModal();
        this.modalAndAlertService.showAlert(`Asset with ID '${id.id}'`, 'created successfully', 'success', 5);
        this.fetchAssets();
      },
    };
    this.modalAndAlertService.openModal(AssetCreateCustomComponent, undefined, callbacks);
  }

  override editAsset(asset: Asset) {
    const callbacks = {
      updated: () => {
        this.modalAndAlertService.closeModal();
        this.modalAndAlertService.showAlert(`Asset with ID '${asset.id}'`, 'updated successfully', 'success', 5);
        this.fetchAssets();
      },
    };
    this.modalAndAlertService.openModal(AssetCreateCustomComponent, { asset: asset }, callbacks);
  }
}
