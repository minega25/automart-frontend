Element.prototype.toggle = function() {
  this.addEventListener("click", event => {
    event.preventDefault();
  });
  if (this.style.display == "" || this.style.display == "block") {
    this.style.display = "none";
  } else {
    this.style.display = "block";
  }
};
