import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-business-contact-list',
  templateUrl: './business-contact-list.component.html',
  styleUrls: ['./business-contact-list.component.scss']
})
export class BusinessContactListComponent {
  public loading = false;

  public BusinessContactList = [
    {
      "contactName": "Ashim",
      "contactNumber": "123-123",
      "emailAddress": "ashim@gmail.com"
    },
    {
      "contactName": "Regina",
      "contactNumber": "123-123",
      "emailAddress": "ashim@gmail.com"
    },
    {
      "contactName": "Shrestha",
      "contactNumber": "123-123",
      "emailAddress": "ashim@gmail.com"
    }
  ]
  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

}
