<script type="text/javascript">

	google.setOnLoadCallback(init);
	
	var _prefs;
	var _content;
	
	function init() 
	{
		_prefs = new gadgets.Prefs();
		_content = document.getElementById("content");
		 
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
</script>
