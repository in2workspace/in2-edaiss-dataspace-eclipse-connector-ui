import { Component, OnChanges } from '@angular/core';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { JsonObjectTableComponent } from './json-object-table.component';

@Component({
  selector: 'lib-json-object-table',
  standalone: true,
  imports: [NgIf, NgForOf, JsonPipe],
  templateUrl: './json-object-table-custom.component.html',
  styleUrl: './json-object-table-custom.component.css',
})
export class JsonObjectTableCustomComponent extends JsonObjectTableComponent implements OnChanges {}
