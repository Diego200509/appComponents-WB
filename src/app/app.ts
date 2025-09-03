import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Login } from "./auth/components/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appComponents');
}
