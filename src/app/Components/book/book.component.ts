import { Component, Input } from '@angular/core';
import { BookEntity } from '../displaybooks/data';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
@Input() book!:any;
}
