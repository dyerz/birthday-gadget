<script type="text/javascript">
google.load('visualization', '1', {packages: ['table']});
google.setOnLoadCallback(init);

function init() 
{
  var container = document.getElementById('visualization');
  sendQuery();
}

function sendQuery()
 {
  var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=pC4N73ZOVzvp9XsOBCaK7KA');

  // Send the query with a callback function.
  query.setQuery("select * format A 'yyyy/MM/dd'");
  query.send(handleQueryResponse);
}

function handleQueryResponse(response)
 {
  // Default error message handling
  var gadgetHelper = new google.visualization.GadgetHelper();
  if (!gadgetHelper.validateResponse(response))
    return;
  
  var data = response.getDataTable();
  
  var table = new google.visualization.Table(document.getElementById('visualization'));
  
  var formatter = new google.visualization.PatternFormat('<a href="mailto:{1}">{0}</a>');
  formatter.format(data, [1, 2]); // Apply formatter and set the formatted
									// value of the first column.

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1]); 
  
  data.setColumnLabel(0, "Date");
  data.setColumnLabel(1, "Name");
  
  table.draw(view, {allowHtml: true});
  
  gadgets.window.adjustHeight;
}   

</script>
