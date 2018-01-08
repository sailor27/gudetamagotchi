export class Pet {
  constructor(name){
    this.name = name;
    this.hungerLevel = 0;
  }
  introduction(){
    let sayName = () => {
    return `My name is ${this.name}`
  }
  return sayName()
  };

  hunger(){
    setInterval(() => {
      this.hungerLevel++;
    }, 1000);
  }

  feed(){
    this.hungerLevel -= 5;
  }

  poop(){
    this.hungerLevel += 10;
  }
};
