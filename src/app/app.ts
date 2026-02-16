import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//imports components a and b so their content displays on the main page
import { A } from './a/a';
import { B } from './b/b';


@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, A, B],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  name: string ="Naomi";
  age: number= 21;
}
