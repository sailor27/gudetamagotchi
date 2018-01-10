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

  it('should have a hunger level of -20 after fed', function(){
    gudetama.feed();
    expect(gudetama.hungerLevel).toEqual(-20);
  });

  it('should die when hunger level reaches 100', function(){
    gudetama.hungerLevel = 100;
    gudetama.checkUp();
    expect(gudetama.status).toEqual("DEAD");
  });

  it('should gain 10 hunger when it poops', function(){
    gudetama.feed();
    gudetama.poop();
    jasmine.clock().tick(30000);
    expect(gudetama.hungerLevel).toBeGreaterThan(10);
  });

  it('should stop getting hungry and pooping when status is dead', function(){
    gudetama.status = "DEAD";
    expect(gudetama.hungerLevel).toBeLessThan(110);
  });
});
