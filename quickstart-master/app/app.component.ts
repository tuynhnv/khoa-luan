import { Component } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {Question} from './quiz/question';
import {Answer} from './quiz/answer';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    providers: [Question]
})
export class AppComponent {

    response: string;    
    public questions: Question[]=[];
    public getquized=false;
    public correctCount=0;
    public submitted=false; 

    constructor(public http: Http ){
        
    }
    public getQuiz(){

        this.http.get('https://tracnghiem-sample.firebaseio.com/dethi.json').
        subscribe(response => {
            var data: any = response.json();

            console.log(response);
            for(var i=0; i<data.questions.length; i++) {
                var answer: Answer[]=[];
                
                 for(var j=0; j<data.questions[i].answer.length; j++){
                    answer[j] = new Answer(data.questions[i].answer[j]) ;
                 }
                this.questions[i] = new Question(data.questions[i].name, answer, data.questions[i].key);
            }

            for(var i=0; i<data.questions.length; i++) {
                console.log('name: ' + this.questions[i].name);
                for(var j=0; j<data.questions[i].answer.length; j++){
                    console.log('answer:' + this.questions[i].answer[j].name);
                }
                console.log('key: ' + this.questions[i].key);
            }
        });
        this.getquized=true;
    }


    
    public showResult(){
        var qLength=this.questions.length;
        this.correctCount=0;
             for (var i=0; i< qLength; i++) {
                 if (this.questions[i].key == this.questions[i].userAnswer) {
                    this.correctCount++;
                 }
             }
        this.submitted=true;
    }

 }
