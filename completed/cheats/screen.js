<div id="availSizeWindow" className="alert alert-warning"></div>
<script>
  var availSizeWindow;
  availSizeWindow = "Доступная (свободная) ширина экрана: <strong>" + screen.availWidth + "</strong>";
  availSizeWindow += "<br/>";
  availSizeWindow += " Доступная (свободная) высота экрана: <strong>" + screen.availHeight + "</strong>";
  window.document.getElementById("availSizeWindow").innerHTML = availSizeWindow;
</script>
