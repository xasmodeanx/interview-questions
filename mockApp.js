/*
Instructions to run this file:

1. Download Node.js

2. Run node mockApp.js in the same directory as this file
*/

/*
This code simulates the interaction between a server API endpoint (api()) that returns HTTP status codes, and our code handleHTTPData() that gets those status codes, massages them, and does work on them

Run the code and watch the output, observe the different way API responses are handled. Then...

Modify the handleHTTPData() function below to change the program output to the following behavior

1. Add a handler for 403 http return codes, 403 should print the message but not kill the function

2. Modify the behavior for 500 http return code to only end the program after 5 consecutive 500 codes are received

Do not modify the api() or app() functions.
*/

'use strict'

let applicationRunning = true;

//api returns a random http status code and message
function api(count) {

  if (count < 10) return {status: 200, message: 'OK', response: 'Spectral Data Enclosed...'};
    
  const num = Math.floor(Math.random() * Math.floor(10));

  switch(true) {

    case (num === 0): 
      return {status: 200, message: 'OK', response: 'Updated Data'};
    case (num === 1): 
      return {status: 404, message: 'Not Found'};
    case (num === 2): 
      return {status: 401, message: 'Unauthorized'};
    case (num === 3):
      return {status: 403, message: 'Forbidden'};
    case (num === 4):
      return {status: 500, message: 'Internal Server Error'};
    case (num > 4):
      return {status: 500, message: 'Internal Server Error'};
    default: 
      return {status: 9000, message: 'Physics broke!'};
  }
}

function app() {
  let apiCalls = 0;
  
  setInterval(() => {

    if (applicationRunning) {
      
      const data = api(apiCalls);
      apiCalls++;

      handleHTTPData(data);
    }
   
  }, 100);
}

function handleHTTPData(data) {  
  switch (data.status) {
    case 200:
      handleResponse(data);
      break;
    case 401:
      handleResponse(data); 
      shutdownApp();
      break;
    case 404:
      handleResponse(data); 
      break;
    case 500:
      handleResponse(data);
      shutdownApp();
      break;
    default:
      console.log('Something went wrong: ' + data.status + ' ' + data.message);
  }
} 

function handleResponse(data) {
  console.log(data.status + ' ' + data.message);
}

function shutdownApp() {
  console.log('Shutting down');
  applicationRunning = false;
}

app()
