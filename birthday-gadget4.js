<script type="text/javascript">
	//google.load('visualization', '1', {packages: ['table']});
	google.setOnLoadCallback(init);
	
	var _prefs = new gadgets.Prefs();
	var _content = document.getElementsById("content");
	
	
	function init() 
	{
		var debug = _prefs.getString("debug");
		
		if(debug === "")
		{
			showWelcome();
		}
		else
		{
			showChoice();
		}
		
		// sendQuery();
	}
	
	function showWelcome()
	{
		var html = '';
		html += '<table style="border: 1px solid #000000; border-collapse: true;"><tr>';
		html += '<td>Lite</td>';
		html += '<td>Full</td>';
		html += '</tr></table>';
		
		
		_content.innerHTML = html;
	}
	
	function showChoice()
	{
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function sendQuery()
	{
		var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=pC4N73ZOVzvp9XsOBCaK7KA');
		
		// Send the query with a callback function.
		query.setQuery("select A,B,C format A 'yyyy/MM/dd'");
		query.send(handleQueryResponse);
	}
	
	function handleQueryResponse(response)
	{
		// Default error message handling
		var gadgetHelper = new google.visualization.GadgetHelper();
		if (!gadgetHelper.validateResponse(response))
		{
			return;
		}
		
		var data = response.getDataTable();
		
		var formatter0 = new google.visualization.DateFormat({pattern: "M/d"});
		formatter0.format(data, 0);
		
		var formatter = new google.visualization.PatternFormat('<a href="mailto:{1} target="_blank">{0}</a>');
		formatter.format(data, [1, 2]);
		
		data.setColumnLabel(0, "Date");
		data.setColumnLabel(1, "Name");
		
		document.getElementById('wrapper').innerHTML = "<p>"+data.toJSON()+"</p>";
		return;
		
		var table = new google.visualization.Table(document.getElementById('wrapper'));
		
		var view = new google.visualization.DataView(data);
		view.setColumns([0, 1]); 
		
		google.visualization.events.addListener(table, 'ready', doStuff);
		
		table.draw(view, {allowHtml: true});
	}
	
	function doStuff()
	{
		gadgets.window.adjustHeight;
	}
</script>