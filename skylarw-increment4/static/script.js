var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
  console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
  console.log(C);
} else if (C.length < z) {
  console.log(z);
} else {
  console.log("good job!");
}

// arrays + loops (alerts)
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Banana") {
      alert("Banana found!");
    }
  }
}

// findTheBanana(L1);
// findTheBanana(L2);

function findTheBananaForEach(arr) {
  arr.forEach(function (item) {
    if (item === "Banana") {
      alert("Banana found!");
    }
  });
}

// findTheBananaForEach(L1);
// findTheBananaForEach(L2);


//Part 3: greeting
var now = new Date();
var hour = now.getHours();

function greeting(h) {
  var greetingElement = document.getElementById("greeting");

  if (!greetingElement) {
    return;
  }

  if (h < 5 || h >= 20) {
    greetingElement.innerHTML = "Good night! Welcome to MonoMuse";
  } else if (h < 12) {
    greetingElement.innerHTML = "Good morning! Welcome to MonoMuse";
  } else if (h < 18) {
    greetingElement.innerHTML = "Good afternoon! Welcome to MonoMuse";
  } else {
    greetingElement.innerHTML = "Good evening! Welcome to MonoMuse";
  }
}

greeting(hour);

//Part 4: Dynamic Footer Year
function addYear() {
  var yearParagraph = document.getElementById("copyYear");

  if (yearParagraph) {
    yearParagraph.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
  }
}

//Active Navigation Bar
function ActiveNav() {
  var navLinks = document.querySelectorAll("nav a");
  var currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "") {
    currentPage = "index.html";
  }

  navLinks.forEach(function (link) {
    var linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

//Purchase Form reveal
function revealPurchaseForm(selectedDate) {
  var purchaseForm = document.getElementById("purchaseForm");
  var selectedDateInput = document.getElementById("selectedDate");
  var dateDisplay = document.getElementById("dateDisplay");

  if (purchaseForm) {
    purchaseForm.style.display = "block";
  }

  if (selectedDateInput) {
    selectedDateInput.value = selectedDate;
  }

  if (dateDisplay) {
    dateDisplay.innerHTML = "Selected visit date: " + selectedDate;
  }
}

function handlePurchaseSubmit(event) {
  event.preventDefault();
  alert("Redirecting to payment system.");
}

document.addEventListener("DOMContentLoaded", function () {
  addYear();
  ActiveNav();

  // jQuery toggle only if jQuery is loaded on this page
  if (typeof window.jQuery !== "undefined") {
    $("#readMore").click(function () {
      $("#longIntro").show();
      $("#readLess").show();
      $("#readMore").hide();
    });

    $("#readLess").click(function () {
      $("#longIntro").hide();
      $("#readLess").hide();
      $("#readMore").show();
    });
  }
});
