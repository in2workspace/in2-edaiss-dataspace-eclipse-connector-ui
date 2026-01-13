import { Component } from '@angular/core';
import { JsonObjectTableCustomComponent } from '../json-object-table/json-object-table-custom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonObjectInputComponent } from './json-object-input.component';

@Component({
  selector: 'lib-json-object-input',
  templateUrl: './json-object-input-custom.component.html',
  styleUrl: './json-object-input-custom.component.css',
  imports: [JsonObjectTableCustomComponent, ReactiveFormsModule],
})
export class JsonObjectInputCustomComponent extends JsonObjectInputComponent {}
