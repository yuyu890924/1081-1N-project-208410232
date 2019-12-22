function change(index) {
  var p = document.getElementById("section");
  switch (index) {
    case 1:
      p.innerHTML =
        '<iframe width=100% height=100% src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      p.style.backgroundColor = "Yellow";
      break;

    case 2:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      p.style.backgroundColor = "azure";
      break;

    case 3:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      p.style.backgroundColor = "cornflowerblue";
      break;
    case 4:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      p.style.backgroundColor = "green";
      break;
    case 5:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      p.style.backgroundColor = "blue";
      break;
  }
}
