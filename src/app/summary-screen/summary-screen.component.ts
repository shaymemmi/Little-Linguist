import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MixedLettersComponent } from '../mixed-letters/mixed-letters.component';
@Component({
  selector: 'app-summary-screen',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './summary-screen.component.html',
  styleUrl: './summary-screen.component.css'
})
export class SummaryScreenComponent implements OnInit {
  @Input() words:any;
  @Input() results: boolean[] = [];
  @Input() data!:object;

  displayedColumns: string[] = ['Hebrew', 'English', 'Status'];
  wordsLeng: number = 0;
  successWords:number =0;
  points: number=0;
  catId:Number=0;
  constructor(public mixedLC: MixedLettersComponent) { }
  ngOnInit() {
    this.words = this.data
    this.wordsLeng = this.words.length; // number of words
    this.points = this.words[this.wordsLeng-1].points;
    this.catId = this.words[this.wordsLeng-1].catID;
    this.words.forEach((e:any)=> {
      if (e.status === 'Succeeded') {
        this.successWords++;
      }
  })
}
resetGame() {
  this.wordsLeng= 0;
  this.successWords=0;
  this.points=0;
  this.catId=0;
  this.words = [];
  this.mixedLC.isGameHasFinished = false; // return to mixedC
  this.mixedLC.currentWordIndex = 0;
  this.mixedLC.jumbledWord = this.mixedLC.jumbleWord(this.mixedLC.words[this.mixedLC.currentWordIndex].origin);
  this.mixedLC.points=0;
  this.mixedLC.userInput='';
  this.mixedLC.words[this.mixedLC.currentWordIndex].target = this.mixedLC.words[this.mixedLC.currentWordIndex].target
}
}
