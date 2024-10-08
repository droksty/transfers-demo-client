import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Associate } from '../_models/associate.model';
import { AssociateService } from '../_services/associate.service';
import { TransferListComponent } from "../transfers/transfer-list/transfer-list.component";

interface SearchParams {
  fromDate: '';
  toDate: '';
  client: '';
  operator: '';
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [FormsModule, TransferListComponent],
})
export class SearchBarComponent implements OnInit {
  associateList: Associate[] = [];

  constructor(
    private associateService: AssociateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.associateService.data$.subscribe(
      (data) => (this.associateList = data)
    );
  }


  /* Event Handlers */

  onSubmit(form: NgForm) {
    const formData: SearchParams = form.value;

    this.router.navigate(['list-transfers'], {
      queryParams: {
        from:     formData.fromDate,
        to:       formData.toDate,
        client:   formData.client,
        operator: formData.operator,
      }
    });

    /* this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        from: formData.pickupDateFrom,
        to: formData.pickupDateTo,
        client: formData.clientTitle,
        provider: formData.providerName
      },
    }) */
  }
}
