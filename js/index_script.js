// script.js

function adjustLayoutForNew() {
    document.getElementById("newSection").classList.remove("col-md-3");
    document.getElementById("newSection").classList.remove("col-md-6");
    document.getElementById("newSection").classList.add("col-md-9");
    document.getElementById("recommendSection").classList.remove("col-md-9");
    document.getElementById("recommendSection").classList.remove("col-md-6");
    document.getElementById("recommendSection").classList.add("col-md-3");
  
    // Show full heading and content of the new section
    document.getElementById("newCardBody").style.display = "block";
    document.getElementById("newCardShort").style.display = "none";
  
    // Show only heading of the recommend section
    document.getElementById("recommendCardBody").style.display = "none";
    document.getElementById("recommendCardShort").style.display = "block";
  }
  
  function adjustLayoutForRecommend() {
    document.getElementById("newSection").classList.remove("col-md-9");
    document.getElementById("newSection").classList.remove("col-md-6");
    document.getElementById("newSection").classList.add("col-md-3");
    document.getElementById("recommendSection").classList.remove("col-md-3");
    document.getElementById("recommendSection").classList.remove("col-md-6");
    document.getElementById("recommendSection").classList.add("col-md-9");
  
    // Show only heading of the new section
    document.getElementById("newCardBody").style.display = "none";
    document.getElementById("newCardShort").style.display = "block";
  
    // Show full heading and content of the recommend section
    document.getElementById("recommendCardBody").style.display = "block";
    document.getElementById("recommendCardShort").style.display = "none";
  }
  
  document.getElementById("newLink").addEventListener("click", function () {
    adjustLayoutForNew();
  });
  
  document.getElementById("recommendLink").addEventListener("click", function () {
    adjustLayoutForRecommend();
  });
  
  document.getElementById("newSection").addEventListener("click", function () {
    adjustLayoutForNew();
  });
  
  document.getElementById("recommendSection").addEventListener("click", function () {
    adjustLayoutForRecommend();
  });
  