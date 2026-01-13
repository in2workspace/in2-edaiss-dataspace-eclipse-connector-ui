import { Component, OnChanges } from '@angular/core';
import {
  AssetInput,
  BaseDataAddress,
  compact,
  EdcConnectorClientError,
  IdResponse,
} from '@think-it-labs/edc-connector-client';
import { NgClass, NgIf } from '@angular/common';
import { AssetService } from '../asset.service';
import {
  AlertComponent,
  DataAddressFormComponent,
  DataTypeInputComponent,
  JsonObjectInputComponent,
  JsonObjectTableComponent,
} from '@eclipse-edc/dashboard-core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AssetCreateComponent } from './asset-create.component';

@Component({
  selector: 'lib-asset-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    AlertComponent,
    JsonObjectTableComponent,
    NgClass,
    DataTypeInputComponent,
    JsonObjectInputComponent,
    DataAddressFormComponent,
  ],
  templateUrl: './asset-create-custom.component.html',
  styleUrl: './asset-create-custom.component.css',
})
export class AssetCreateCustomComponent extends AssetCreateComponent implements OnChanges {
  override assetForm: FormGroup;

  constructor(assetService: AssetService, formBuilder: FormBuilder) {
    super(assetService, formBuilder);
    this.assetForm = this.formBuilder.group({
      id: [''],
      name: [''],
      contenttype: [''],
      description: [''],
    });
  }

  override async updateAssetAndSyncForm() {
    this.properties = await compact(this.asset!.properties);
    this.privateProperties = await compact(this.asset!.privateProperties);
    this.dataAddress = (await compact(this.asset!.dataAddress)) as unknown as BaseDataAddress;
    this.assetForm.get('id')?.setValue(this.asset!.id);
    this.assetForm.get('name')?.setValue(this.properties['name']);
    this.assetForm.get('contenttype')?.setValue(this.properties['contenttype']);
    this.assetForm.get('description')?.setValue(this.properties['description']);
  }

  override createAsset(): void {
    if (this.assetForm.valid) {
      const assetInput: AssetInput = this.createAssetInput();
      if (this.mode === 'create') {
        this.assetService
          .createAsset(assetInput)
          .then((idResponse: IdResponse) => {
            this.created.emit(idResponse);
          })
          .catch((err: EdcConnectorClientError) => {
            this.errorMsg = err.message;
          });
      } else if (this.mode === 'update') {
        this.assetService
          .updateAsset(assetInput)
          .then(() => this.updated.emit())
          .catch((err: EdcConnectorClientError) => (this.errorMsg = err.message));
      }
    } else {
      console.error('Create asset called with invalid form');
    }
  }

  protected override createAssetInput(): AssetInput {
    const asset: AssetInput = {
      dataAddress: this.dataAddress!,
      properties: this.properties,
      privateProperties: this.privateProperties,
    };
    if (this.assetForm.value.id) {
      asset['@id'] = this.assetForm.value.id;
    }
    if (this.assetForm.value.name) {
      asset.properties['name'] = this.assetForm.value.name;
    }
    if (this.assetForm.value.contenttype) {
      asset.properties['contenttype'] = this.assetForm.value.contenttype;
    }
    asset.properties['description'] = this.assetForm.value.description;
    return asset;
  }
}
