import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CharService from './js/api-service.js';

function clearFields() {
  $('#searchKey').val("");
  $('.showImages').text("");
  $('.logo').text("");
}


$(document).ready(function() {
  $('#enterSearch').click(function() {
    const currency = $('#searchKey').val();
    clearFields();
    let promise = CharService.getChar(currency);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showImages').text(`Name: ${body[0].name}`);
      $('.currentRank').text(`Rank: ${body[0].rank}`);
      $('.price').text(`Price:$ ${body[0].price} `);
      $('.logo').append(`<img src="${body[0].logo_url}">`);
      //.text or ????
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    
    });
  });
});




