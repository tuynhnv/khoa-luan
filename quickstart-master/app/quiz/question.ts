import {Answer} from './answer';

export class Question {
    name: string;
    answer: Answer[]=[];
    userAnswer: string;
    key: string;
    constructor(name: string, answer: Answer[],key:string){
        this.name=name;
        this.answer=answer;
        this.key=key;
    }
}