'use strict'

var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  chrome = require('selenium-webdriver/chrome');

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  //driver.get('http://www.google.es');
  //driver.get('http://localhost:9000/#!/');
  driver.get('http://USER:PASS@URL').then(function() {

    driver.getTitle().then(function(title) {
      console.log('Page title is: ' + title);
    });


    //var element = driver.findElement(By.className('glyphicon-menu-hamburger'));
    //element.click();
  });
