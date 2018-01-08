import { Pet } from './../js/scripts.js';

describe('Pet', function(){
  let gudetama = new Pet("gudetama");

  beforeEach(function(){
    jasmine.clock().install();
    gudetama.hunger();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
    gudetama.hungerLevel = 0;
  });

  it('should have an introduction that says the pet name', function(){
    expect(gudetama.name).toEqual("gudetama");
  });

  it('should have a hunger level of 7 after 7000 milliseconds', function(){
    jasmine.clock().tick(7001);
    expect(gudetama.hungerLevel).toEqual(7);
  });

  it('should have a hunger level of -5 after fed', function(){
    gudetama.feed();
    expect(gudetama.hungerLevel).toEqual(-5);
  });

  it('should die when hunger level reaches 100', function(){
    gudetama.hungerLevel = 100;
    gudetama.checkUp();
    expect(gudetama.status).toEqual("DEAD");
  });

});
