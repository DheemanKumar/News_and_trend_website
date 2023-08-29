// script.js

function adjustLayoutForNew() {
    document.querySelectorAll(".card-body.new-card-body").forEach(function (body) {
      body.style.display = "block";
    });
  
    document.querySelectorAll(".card-body.recommend-card-body").forEach(function (body) {
      body.style.display = "none";
    });
  
    document.getElementById("newSection").classList.remove("col-md-3");
    document.getElementById("newSection").classList.remove("col-md-6");
    document.getElementById("newSection").classList.add("col-md-9");
  
    document.getElementById("recommendSection").classList.remove("col-md-9");
    document.getElementById("recommendSection").classList.remove("col-md-6");
    document.getElementById("recommendSection").classList.add("col-md-3");
  }
  
  function adjustLayoutForRecommend() {
    document.querySelectorAll(".card-body.new-card-body").forEach(function (body) {
      body.style.display = "none";
    });
  
    document.querySelectorAll(".card-body.recommend-card-body").forEach(function (body) {
      body.style.display = "block";
    });
  
    document.getElementById("newSection").classList.remove("col-md-9");
    document.getElementById("newSection").classList.remove("col-md-6");
    document.getElementById("newSection").classList.add("col-md-3");
  
    document.getElementById("recommendSection").classList.remove("col-md-3");
    document.getElementById("recommendSection").classList.remove("col-md-6");
    document.getElementById("recommendSection").classList.add("col-md-9");
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
  