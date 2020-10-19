var myGradesCalculate = (function () {
  var student;
  var studentsCount = 0;

  var loadJSON = function (callback) {
      students = data;
      studentsCount = students.length;
  }

  var createTable = function() {
    loadJSON();
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tfoot = document.createElement('tfoot');

    table.setAttribute('class', 'students-table');
    // table head
    var headText = ['Имя','Фамилия','Возраст','Средний балл'];
    var tr = document.createElement('tr');
    for(var h = 0; h < headText.length; h++) {
      var th = document.createElement('th');
      th.innerText = headText[h];
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    // table body
    var items = ['name','subname','age','score'];
    for(var i = 0; i < studentsCount; i++){
      var tr = document.createElement('tr');
      for (var j = 0; j < items.length; j++) {
        var item = students[i][items[j]];
        var td = document.createElement('td');
        if (j === items.length - 1) {
          td.setAttribute('data-score', item);
        }
        td.innerHTML =  item;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    // table footer
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.setAttribute('colspan','4');
    tr.appendChild(td);
    tfoot.appendChild(tr);
    table.appendChild(tfoot);
    document.getElementById('data').appendChild(table);
  }

  var countScore = function() {
    var count = 0;
    var scoreElement = document.querySelector('[colspan="4"]');
    var scoreDataElement = Array.from(document.querySelectorAll('[data-score]'));
for (var c=0; c < scoreDataElement.length; c++) {
  count += +scoreDataElement[c].dataset.score;
}
    scoreElement.innerHTML = (count/scoreDataElement.length).toFixed(2);
  }

  return {
    createTable: createTable,
    countScore: countScore
  }

})();

myGradesCalculate.createTable();
myGradesCalculate.countScore();
