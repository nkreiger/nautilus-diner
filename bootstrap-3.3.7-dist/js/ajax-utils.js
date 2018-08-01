/*(function (global) {

	// set up a namespace for our utility
	var ajaxUtils = {};

	// returns an http request object

	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject) {
			// for very old ie browsers
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported");
			return(null);
		}
	}
// makes an Ajax GET request to "requestUrl"

	ajaxUtils.sendGetRequest = function(requestUrl, responseHandler) {
		var request = getRequestObject();
		request.onreadystatechange = function() { // must do it this way because we just want functino value
			handleResponse(request, responseHandler); //set up parameters of request
		};
		request.open("GET", requestURL, true);
		request.send(null); // for post only // executes request 
		// null is where you put the bodies of the request 
	};

	// only calls user provided 'responseHandler'
	// function if response is ready and not an error

	function handleResponse(request, responseHandler) {
if ((request.readyState == 4) && (request.status == 200)) {
	responseHandler(request); // passing it the reuqest if its legal
	}
}

// expose utility to the global object
global.$ajaxUtils = ajaxUtils;




})(window);
*/

(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, 
                       responseHandler,
                       isJsonResponse); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler,
                        isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {

    // Default to isJsonResponse = true
    if (isJsonResponse == undefined) {
      isJsonResponse = true;
    }

    if (isJsonResponse) {
      responseHandler(JSON.parse(request.responseText));
    }
    else {
      responseHandler(request.responseText);
    }
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);
