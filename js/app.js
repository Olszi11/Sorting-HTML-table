document.addEventListener("DOMContentLoaded", function() {
  
  let allThead= document.querySelectorAll('th');

  function sort(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("tr");
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];

        if (n == 1 || n == 2 || n == 4) {
          if (dir == "asc") {
            if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        } else if (n == 0 || n == 3) {
          if (dir == "asc") {
            if (Number(x.innerText.toLowerCase()) > Number(y.innerText.toLowerCase())) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (Number(x.innerText.toLowerCase()) < Number(y.innerText.toLowerCase())) {
              shouldSwitch = true;
              break;
            }
          }
        } else if (n == 5) {
          if (dir == "asc") {
            if (parseDateString(x.innerText.toLowerCase()) < parseDateString(y.innerText.toLowerCase())) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (parseDateString(x.innerText.toLowerCase()) > parseDateString(y.innerText.toLowerCase())) {
              shouldSwitch = true;
              break;
            }
          }
        } else {
          alert("Wrong thead");
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchCount++;
      } else {
        if (switchCount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }


  function parseDateString(dateString) {
    let dateParts = dateString.split(' ');
    let dateOnlyString = dateParts[0];
    let dateOnlyParts = dateOnlyString.split('/');
    let year = dateOnlyParts[0];
    let month = dateOnlyParts[1] - 1;
    let day = dateOnlyParts[2];
    return new Date(day, month, year);
  }

  function events(){
    for(let i=0; i<allThead.length; i++){
      allThead[i].addEventListener('click', function(){
        sort(i);
      })
    }
  }

  events();





});
