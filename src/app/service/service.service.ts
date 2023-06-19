import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../class/class';
import {Question,Answer} from '../class/class';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost/QuizBackEnd';

  constructor(private http: HttpClient) {}

  getQuizzes() {
    return this.http.get<Quiz[]>(`${this.apiUrl}/selectQuiz.php`);
  }

  getQuestions(quizId: any){
    // return this.http.get<Question[]>(`${this.apiUrl}/selectQuestion.php`);
    const url = `${this.apiUrl}/selectQuestion.php?quizId=${quizId}`;
    return this.http.get(url);
  }
}








