angular.module('SwipeComp')
.controller('compController', compController);

function compController() {


  this.priorState = [];
  this.happinessAverage = 0;
  this.add = addState;

  function addState() {
    let average =0;

    this.priorState.push({
      state: this.currentState.score,
      date: new Date().toDateString()
    });

    this.priorState.forEach((item,i) => {
      average += parseInt(item.state);
      this.happinessAverage = average / this.priorState.length;
    });
  }








  this.state = [
    {
      state: 'Happy',
      img: '😀',
      score: 1

    },
    {
      state: 'Meh',
      img: '😬',
      score: 0
    },
    {
      state: 'Sad',
      img: '😕',
      score: -1
    }
  ];

}
