var thead = document.getElementById('table_heading');
	thead.innerHTML = "";
	thead.innerHTML +='<tr><th>S.NO</th><th>SCH NUMBER</th><th>STUDENT NAME</th> <th>SGPA</th><th>CGPA</th>  <th>STATUS</th> <th>MORE DETAILS</th></tr>';
	
	
	
	var tbody =" ";
	for (var i = 0; i < data.length; i++) {
		var number =data[i].Number;
		var name =data[i].StudentName;
		var sgpa =data[i].SGPA;
		var cgpa =data[i].CGPA;
		var status =data[i].Status;
		
		
		tbody +="<tr  class='oddgradeX'>";	
		tbody +="<td class='center'>"+(i+1)+"</td>";
		tbody +="<td>"+number+"</td>";
		tbody +="<td>"+name+"</td>";
		tbody +="<td>"+sgpa+"</td>";
		tbody +="<td class='center'>"+cgpa+"</td>";
		
		if(status=="PASS")
		tbody +="<td> <a class='btn btn-success btn-xs btn-circle' style='width: 10px;height: 12px;'></a></td>";
		else
		tbody +="<td> <a class='btn btn-danger btn-xs btn-circle' style='width: 10px;height: 12px;'></a></td>";
		
		tbody +="<td class='center;><a href='https://www.gmail.com'><button type='button' class='btn btn-info btn-circle'><i class='icon-search'></i></button></a></td>";
		tbody +="</tr>";
	}
	$('#table_data').append(tbody);
        	 

	