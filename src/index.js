import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CharService from './js/api-service.js';

function clearFields() {
  $('#searchKey').val("");
  $('.showImages').text("");
}


$(document).ready(function() {
  $('#enterSearch').click(function() {
    const name = $('#searchKey').val();
    clearFields();
    let promise = CharService.getChar(name);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showImages').text(`${body.results[0].name}`);
      //.text or ????
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    
    });
  });
});




