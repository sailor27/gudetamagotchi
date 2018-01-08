export class Pet {
  constructor(name, introduction){
    this.name = name;
    this.introduction();
  }
  introduction(){
    let sayName = () => {
    return `My name is ${this.name}`
  }
  return sayName()
  };
};

// let gudetama = new Pet;
//   gudetama.name = "Gudetama";
//
//   gudetama.introduction = function(){
//     console.log("Name in the outer function: " + this.name);
//     let sayName = () => {
//       console.log("Name in the inner function: " + this.name);
//       return `My name is ${this.name}`
//     }
//     return sayName()
//   }
//   gudetama.introduction();
//
