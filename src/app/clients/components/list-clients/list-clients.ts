import { Component } from '@angular/core';
import { Container } from '../../../components/container/container';
import { Table } from '../../../components/table/table';
import { IClient } from '../../../interfaces/iclient';
import { IMetaDataColumn } from '../../../interfaces/imeta-data-column';

@Component({
  selector: 'app-list-clients',
  imports: [Container, Table],
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
    }
  ];

  metaDataColumnsClient: IMetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'dni', title: 'CEDULA' },
    { field: 'firstName', title: 'NOMBRE' },
    { field: 'lastName', title: 'APELLIDO' },
    { field: 'email', title: 'CORREO ELECTRONICO' }
  ]
}
