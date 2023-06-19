import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../service/service.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class QuizComponent implements OnInit {
  quiz: any;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private questionService:QuestionService //json
  ) { }

//json
  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      console.log(res.questions);
    })
  }

  ngOnInit() {
    this.loadQuizData();
    this.getAllQuestions(); //json
  }

  //php
  loadQuizData() {
    const quizId = this.route.snapshot.paramMap.get('id');
    this.quizService.getQuestions(quizId).subscribe(
      (data: any) => {
        console.log(data);
        this.quiz = data;
      },
      (error) => {
        console.log('An error occurred while fetching quiz data:', error);
      }
    );
  }
}
