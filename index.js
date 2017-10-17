'use strict'

var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  chrome = require('selenium-webdriver/chrome');

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();


driver.get('http://localhost:9000').then(function(callBack,errBack){
  console.log(callBack);
    var element = driver.findElement(By.id('primero'));
    //console.log(element);
    driver.actions()
      .mouseMove(element).click();
});
