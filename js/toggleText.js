function toggleText(myId) {
    var text = document.getElementById(myId);
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }