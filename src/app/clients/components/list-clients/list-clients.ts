import { Component } from '@angular/core';
import { Container } from '../../../components/container/container';
import { Table } from '../../../components/table/table';
import { IClient } from '../../../interfaces/iclient';
import { IMetaDataColumn } from '../../../interfaces/imeta-data-column';
import { Paginator } from '../../../components/paginator/paginator';
import { environment } from '../../../../environments/environment.development';
import { KeypadButton } from '../../../components/keypad-button/keypad-button';
import { IKeyPadButton } from '../../../interfaces/ikey-pad-button';

@Component({
  selector: 'app-list-clients',
  imports: [Container, Table, Paginator, KeypadButton],
  templateUrl: './list-clients.html',
  styleUrl: './list-clients.css'
})
export class ListClients {
  data: IClient[] = [
    {
      id: '1', dni: '12345678A', firstName: 'Juan', lastName: 'Flores', email: 'juan@gmail.com'
    },
    {
      id: '2', dni: '87654321B', firstName: 'Jane', lastName: 'Smith', email: 'jane@gmail.com',
    },
    {
      id: '3', dni: '11223344C', firstName: 'Alice', lastName: 'Paredes', email: 'alice@gmail.com',
    },
    {
      id: '4', dni: '44332211D', firstName: 'Bob', lastName: 'Lopez', email: 'bob@gmail.com'
    },
    {
      id: '5', dni: '55667788E', firstName: 'Charlie', lastName: 'Carrillo', email: 'charlie@gmail.com'
    },
    {
      id: '6', dni: '12345678A', firstName: 'Juan', lastName: 'Flores', email: 'juan@gmail.com'
    },
    {
      id: '7', dni: '87654321B', firstName: 'Jane', lastName: 'Smith', email: 'jane@gmail.com',
    },
    {
      id: '8', dni: '11223344C', firstName: 'Alice', lastName: 'Paredes', email: 'alice@gmail.com',
    },
    {
      id: '9', dni: '44332211D', firstName: 'Bob', lastName: 'Lopez', email: 'bob@gmail.com'
    },
    {
      id: '10', dni: '55667788E', firstName: 'Charlie', lastName: 'Carrillo', email: 'charlie@gmail.com'
    }
  ];

  metaDataColumnsClient: IMetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'dni', title: 'CEDULA' },
    { field: 'firstName', title: 'NOMBRE' },
    { field: 'lastName', title: 'APELLIDO' },
    { field: 'email', title: 'CORREO ELECTRONICO' }
  ]
  records:IClient[] = [];
  totalRecords:number
  keypadButtons:IKeyPadButton[] = [
    {icon:'cloud_download', color:'accent', tooltip:'DESCARGAR', action:'DOWNLOAD'},
    {icon:'add', color:'primary', tooltip:'AGREGAR', action:'NEW'},
    {icon:'edit', color:'warn', tooltip:'EDITAR', action:'EDIT'},
    {icon:'delete', color:'warn', tooltip:'ELIMINAR', action:'DELETE'}
  ]

  constructor() {
    this.totalRecords = this.data.length;
    this.ChangePage(0);
  }

  ChangePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = page * pageSize;
    this.records = this.data.slice(skip, skip + pageSize);
  }

  doAction(action: string) {
    console.log('Action:', action);
  }
}
