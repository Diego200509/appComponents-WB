import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Button } from '../../../components/button/button';
import { Label } from '../../../components/label/label';

@Component({
  selector: 'app-login',
  standalone: true,                        
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, Button, Label],
  templateUrl: './login.html',
  styleUrls: ['./login.css']              
})
export class Login {
  
}
