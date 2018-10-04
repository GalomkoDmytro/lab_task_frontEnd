	function fileSort() {
    	alert('sort');
        GetCellValues();
    };
    
    function sizeSort() {
    	alert('size');
    };
    
    function GetCellValues() {
    var table = document.getElementById('mytable');
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            alert(table.rows[r].cells[c].innerHTML);
        }
    };
