import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/service.service';
import { Quiz } from '../class/class';

@Component({
  selector: 'app-list-quiz',
  templateUrl: 'list-quiz.component.html',
  styleUrls: ['list-quiz.component.css']
})
export class QuizListComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuizzes().subscribe(
      data => {
        this.quizzes = data;
      },
      error => {
        console.log('Error retrieving quizzes:', error);
      }
    );
  }
}
