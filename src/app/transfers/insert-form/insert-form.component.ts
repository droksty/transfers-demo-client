import { Component, OnInit, Provider } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client, TransferDTO } from '../transfer.interface';
import { TransferService } from '../transfer.service';
import { ClientService } from 'src/app/clients/client.service';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {
  types = ['SHARED', 'PRIVATE', 'VIP'];
  clientList: Client[] = [];
  providerList: Provider[] = [];
  
  constructor(private service: TransferService, private clientService: ClientService) { }
  
  ngOnInit() {
    this.clientService.data$.subscribe(data => this.clientList = data);
    // this.providerService.data$.subscribe(data => this.providerList = data);
  }

  submit(insertForm: NgForm) {
    let transferDTO = new TransferDTO(insertForm.value);
    console.log(transferDTO);
    this.service.insertTransfer(transferDTO);
    insertForm.resetForm();
  }

}
