import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Option {
  text: string;
  value: string;
}

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  reactiveForm: FormGroup;
  submitted = false;
  options: Option[][] = [];
  questions: string[] = [];
  questionCounter = 1;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      Category: ['', Validators.required],
      NameQuiz: ['', Validators.required],
      CoinCost: ['', Validators.required]
    });

    this.addQuestion();
  }

  get f() {
    return this.reactiveForm.controls;
  }

  addQuestion(): void {
    this.questions.push(`Question ${this.questionCounter}`);

    const newOptions: Option[] = [];
    for (let i = 1; i <= 4; i++) {
      newOptions.push({ text: '', value: '' });
    }
    this.options.push(newOptions);

    this.reactiveForm.addControl(`question${this.questionCounter}`, this.formBuilder.control('', Validators.required));
    for (let i = 1; i <= 4; i++) {
      this.reactiveForm.addControl(`option${this.questionCounter}${i}`, this.formBuilder.control(''));
    }

    this.questionCounter++;
  }

  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
    console.log(this.reactiveForm.value);
  }

  // alertWithSuccess(){
  //   Swal.fire("Thank you ...",'Your quiz is added successfully','success');
  // }
}

