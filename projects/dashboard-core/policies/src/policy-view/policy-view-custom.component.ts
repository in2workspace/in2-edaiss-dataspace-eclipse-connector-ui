import { Component } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { FilterInputComponent, ItemCountSelectorComponent, PaginationComponent } from '@eclipse-edc/dashboard-core';
import { PolicyCardCustomComponent } from '../policy-card/policy-card-custom.component';
import { PolicyViewComponent } from './policy-view.component';

@Component({
  selector: 'lib-policy-view',
  standalone: true,
  imports: [
    AsyncPipe,
    FilterInputComponent,
    PaginationComponent,
    PolicyCardCustomComponent,
    ItemCountSelectorComponent,
  ],
  templateUrl: './policy-view-custom.component.html',
  styleUrl: './policy-view-custom.component.css',
})
export class PolicyViewCustomComponent extends PolicyViewComponent {}
