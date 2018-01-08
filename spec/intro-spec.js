import { Pet } from './../js/scripts.js';

describe('Pet', function(){
  let gudetama = new Pet("gudetama");

  it('should have an introduction that says the pet name', function(){
    expect(gudetama.name).toEqual("gudetama");
  });
  // beforeEach(function(){
  //   jasmine.clock().install();
  // })
});
