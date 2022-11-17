import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList('Bukhari', [
    new TodoItem('Read Some Quran', true),
    new TodoItem('Do some Work'),
    new TodoItem('Pick up umm nafee')
  ]);
  showComplete: any;

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => !item.showComplete || !item.complete);
  }
  addItem(newItem: string) {
    if (newItem != '') {
      this.list.addItem(newItem);
    }
  }

  removeItem(olditem: any) {
    let index: number;
    index = this.list.items.indexOf(olditem);
    if (index > -1) {
      this.list.items.slice(index, 1);
    }
  }

  clearList() {
    this.list.items.slice(0, this.list.items.length);

  }
}
