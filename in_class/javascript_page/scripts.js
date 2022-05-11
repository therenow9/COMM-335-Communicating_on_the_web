/* Script 1 */
  function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.getElementById('date').innerHTML=(curr_date + "-" + curr_month + "-" + curr_year);
  }
  showDate("date");
/* Script 2 (Embedded) */