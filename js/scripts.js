export class Pet {
  constructor(name){
    this.name = name;
    this.hungerLevel = 0;
    this.status = "";
  }
  introduction(){
    let sayName = () => {
    return `My name is ${this.name}`
  }
  return sayName()
  };

  checkUp(){
    if (this.hungerLevel >= 100){
      this.status = "DEAD";
    } else {
      this.status = "ALIVE";
    }
  }
  hunger(){
    setInterval(() => {
      this.hungerLevel++;
      this.checkUp();
      console.log(this.status);
    }, 1000);
  }
  // };

  feed(){
    this.hungerLevel -= 5;
  }

  poop(){
    this.hungerLevel += 10;
  }

};
// function checkIfDead() {
//   if (Pet.hungerLevel === 10){
//     console.log("DEAD");
//   } else {
//     console.log("NOT DEAD");
//   }
// };
