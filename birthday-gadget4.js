	function showWelcome(content)
	{
		var html = '';
		html += '<table style="border: 1px solid #000000; border-collapse: true;"><tr>';
		html += '<td>Lite</td>';
		html += '<td>Full</td>';
		html += '</tr></table>';
		
		
		content.innerHTML = html;
	}
	
	function showChoice(content)
	{
		var html = '';
		html += 'Details';
		
		
		content.innerHTML = html;		
	}