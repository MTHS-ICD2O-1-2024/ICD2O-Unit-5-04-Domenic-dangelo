// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  // process
  const inputAge = parseInt(document.getElementById("userAge").value);
  const ticketPrice1 = document.getElementById("option-tuesday").checked;
  const ticketPrice2 = document.getElementById("option-thursday").checked;

  // input
  if (ticketPrice1 || ticketPrice2 || (inputAge >= 12 && inputAge <= 21)) {
    // output
    document.getElementById("result").innerHTML =
      "<p>You are eligible for student discount.</p>";
  } 
  else {
    document.getElementById("result").innerHTML =
      "<p>You must pay full price.</p>";
  }
}