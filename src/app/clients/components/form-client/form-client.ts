import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-form-client',
  imports: [FormsModule, ReactiveFormsModule, MatToolbarModule, MatButtonModule, MatDialogClose, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form-client.html',
  styleUrl: './form-client.css'
})
export class FormClient implements OnInit {
  title: string = ''
  group!: FormGroup

  constructor(private reference: MatDialogRef<FormClient>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? "EDITAR" : "NUEVO"
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      dni: new FormControl(this.data?.dni, Validators.required),
      firstName: new FormControl(this.data?.firstName, Validators.required),
      lastName: new FormControl(this.data?.lastName, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.data?.email, [Validators.required, Validators.email])
    })
  }

  save() {
  }
}
