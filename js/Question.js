class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
    this.input2 = createInput("Enter Correct option No");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.guess1 = createElement('h4');
    this.guess2 = createElement('h4');
    this.guess3 = createElement('h4');
    this.guess4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 80);
    this.guess1.html("1: Everyone " );
    this.guess1.position(150, 100);
    this.guess2.html("2: Envelope" );
    this.guess2.position(150, 120);
    this.guess3.html("3: Estimate " );
    this.guess3.position(150, 140);
    this.guess4.html("4: Example" );
    this.guess4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
