export class Pet {
  constructor(name){
    this.name = name;
    this.hungerLevel = 0;
    this.status;
  }
  introduction(){
    let sayName = () => {
    return `My name is ${this.name}`
  }
  return sayName()
  };

  checkUp(){
    if (this.hungerLevel === 0){
      this.status = "ALIVE"
      this.hunger();
    } else if(this.hungerLevel >= 100){
      this.status = "DEAD";
      return this.status;
    } else {
      this.status = "ALIVE";
      return this.status;
    }
  }

  hunger(){
    var timer = setInterval(() => {
      this.hungerLevel++;

      this.checkUp();

      if (this.status === "DEAD"){
        clearInterval(timer);
      }

      console.log(this.status);
      console.log("Hunger Level: " + this.hungerLevel);
    }, 1000);
  }
  // };

  feed(){
    this.hungerLevel -= 20;
  }

  poop(){
    let poopTime = (Math.random() * 10000);
    var poopTimer = setInterval(() => {
      this.hungerLevel += 10;

      this.checkUp();

      if (this.status === "DEAD"){
        console.log("yay i stopped pooping");
        clearInterval(poopTimer);
      }
      console.log("POOP");
    }, poopTime);
  }
};

export function getData(search, arg1, arg2){
  $.ajax({
    url: `http://api.giphy.com/v1/gifs/search?q=gudetama&api_key=BfYSecfMXlpv1i9L4XB4HChFSR8T59jo&limit=5`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      arg1(response);
      alert(`SUCCESS - GIPHY`);
    },
    error: function() {
      arg2();
      alert(`ERROR NO GIPHY`);
    }
  });
}
