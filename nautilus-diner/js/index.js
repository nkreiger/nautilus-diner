$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });

});



(function (global) {

var dc = {};

// variables
var homeHtml = "snippets/home-snippet.html";
var NRfullMenu = "snippets/full-menu-snippet.html";
var contactUs = "snippets/contact-us-snippet.html";
var about = "snippets/about-snippet.html";
var NRdesserts = "snippets/desserts-and-shakes-snippet.html";
var NRdinner = "snippets/dinner-snippet.html";
var NRsandwiches = "snippets/sandwiches-snippet.html";
var NRbreakfast = "snippets/breakfast-snippet.html";



var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
}

//functions
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}


document.addEventListener("DOMContentLoaded", function (event) {

	// on first load, show home view
	// showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

dc.loadFullMenu = function () {
	//showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		NRfullMenu,
		function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
};   


dc.loadContactUs = function () {
	//showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		contactUs,
		function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
};  

dc.loadAbout = function () {
  //showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    about,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },
    false);
};

dc.loadDessert = function () {
  //showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    NRdesserts,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },
    false);
};

dc.loadDinner = function () {
  //showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    NRdinner,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },
    false);
};

dc.loadSandwiches = function () {
  //showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    NRsandwiches,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },
    false);
};

dc.loadBreakfast = function () {
  //showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    NRbreakfast,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText;
    },
    false);
};



global.$dc = dc;

})(window); 

