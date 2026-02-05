import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { FilterInputComponent, ItemCountSelectorComponent, PaginationComponent } from '@eclipse-edc/dashboard-core';
import { ContractDefinitionCardCustomComponent } from '../contract-definition-card/contract-definition-card-custom.component';
import { ContractDefinitionsViewComponent } from './contract-definitions-view.component';

@Component({
  selector: 'lib-contract-definitions-view',
  imports: [
    AsyncPipe,
    PaginationComponent,
    FilterInputComponent,
    ContractDefinitionCardCustomComponent,
    ItemCountSelectorComponent,
  ],
  templateUrl: './contract-definitions-view-custom.component.html',
  styleUrl: './contract-definitions-view-custom.component.css',
  standalone: true,
})
export class ContractDefinitionsViewCustomComponent extends ContractDefinitionsViewComponent {}
