import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  searchCategory: String='';
  categories: { name: string, imagePath: string }[] = [
    { name: 'Science', imagePath: 'assets/pic/biochimie.png'},
    { name: 'Sport', imagePath: 'assets/pic/musculation.png' },
    { name: 'History', imagePath: 'assets/pic/faire-defiler.png' },
    { name: 'Gaming', imagePath: 'assets/pic/manette.png' },
    { name: 'Movies and Series', imagePath: 'assets/pic/cinema.png' },
    { name: 'Technology', imagePath: 'assets/pic/la-technologie.png' },
    { name: 'Music', imagePath: 'assets/pic/musique.png' },
    { name: 'Food', imagePath: 'assets/pic/fast-food.png' },
    { name: 'Travel', imagePath: 'assets/pic/carte.png' },
    { name: 'Art', imagePath: 'assets/pic/photo.png' },
    { name: 'Geography', imagePath: 'assets/pic/geographie.png' },
    { name: 'Literature', imagePath: 'assets/pic/bibliotheque.png' },
    { name: 'Politics', imagePath: 'assets/pic/politique.png' }
  ];
}
