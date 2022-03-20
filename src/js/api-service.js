//Business Logic
export default class CharService {
  static getChar(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.giantbomb.com/api/search/?api_key=a45aa29cb87b8c4041a39249ef893c59643d041c&format=json&query=${name}&resources=game`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}


  