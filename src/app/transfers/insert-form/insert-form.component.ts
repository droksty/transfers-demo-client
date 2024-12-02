import { Component, DestroyRef, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { TransferService } from '../../_services/transfer.service';
import { TRANSFER_TYPES } from "src/app/_models/transfer.model";
import { Transfer } from "src/app/_models/transfer.model";
import { AssociateService } from 'src/app/_services/associate.service';

@Component({
    selector: 'app-insert-form',
    templateUrl: './insert-form.component.html',
    styleUrls: ['./insert-form.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class InsertFormComponent {
  private associateService = inject(AssociateService);
  private transferService = inject(TransferService);
  private destroyRef = inject(DestroyRef);
  
  types = Object.keys(TRANSFER_TYPES);
  associates = this.associateService.associates;
  

  submit(insertForm: NgForm) {
    const transfer: Transfer = insertForm.value;
    if (!transfer.type)     transfer.type = undefined;
    if (!transfer.operator) transfer.operator = null;
    if (!transfer.client)   transfer.client = null;

    const subscription = this.transferService.insertTransfer(transfer).subscribe({
      next: resData => console.log(resData),
      error: err => console.log(err),
      complete: () => console.log('completed')
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    insertForm.resetForm({ type: '', client: '', operator: '' });
  }

}
