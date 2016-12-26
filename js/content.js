
//Default State
var result='';
var Semester=5;
var BetchAccordingToYear = '';
var SemesterAccordingToBatch = '';
var selectedPosition=1;
var SubjectCodeWithNameShow ='Sorry Data Not Found';
var tbody ='Sorry Data Not Found';
var thead ='Sorry Data Not Found';
var table=false;
var sem_1=false;
var sem_2=false;
var sem_3=false;
var sem_4=false;
var sem_5=false;
var sem_6=false;
var 2015_2018_sem_1=false;
var year='2014';


LoadBranchYear();
LoadBranchSemesterSubject();
Default();
/*
thead='';
tbody='';

	thead='<tr>';
	for (var i = 0; i < TheadData.length; i++) 
	{
		thead +='<th>'+TheadData[i].Header+'</th>';
	
	}
	thead +='</tr>';
	$('#table_heading').html(thead);
*/
//Set Branch On Selection Menu
function LoadBranchYear()
{
	for (var i = 0; i < BatchStatus.length; i++) 
	{
		
		if(i==1)
			BetchAccordingToYear +=' <option value='+BatchStatus[i].Batch+' selected>'+BatchStatus[i].BatchYear+'</option>';
		else
			BetchAccordingToYear +=' <option value='+BatchStatus[i].Batch+'>'+BatchStatus[i].BatchYear+'</option>';
	
	}
	$('#mca_year').html(BetchAccordingToYear);

	LoadBranchSemester();

}

//Set Semester On Selection Menu
function LoadBranchSemester()
{
	SemesterAccordingToBatch='';
	
	if(this.value!=undefined)
		{
			if(this.value=='2013')
			{
				year='2013';
				Semester=0;
			}
			if(this.value=='2014')
			{
				year='2014';
				Semester=5;
			}
			if(this.value=='2015')
			{
				year='2015';
				Semester=1;
			}
		}
	if(Semester==0)
		{
		HideData();
		}else
			{
			ShowData();
				for (var i = 0; i < Semester; i++) 
				{
					
					if(i==selectedPosition-1)
						SemesterAccordingToBatch +=' <option value='+(i+1)+' selected>Semester '+(i+1)+'</option>';
					else
						SemesterAccordingToBatch +='  <option value='+(i+1)+' >Semester '+(i+1)+'</option>';
				
				}
			}
	$('#mca_semester').html(SemesterAccordingToBatch);
}

//Set SemesterSubject On Selection Menu
function LoadBranchSemesterSubject()
{	
	
	SubjectCodeWithNameShow='';
	
	if(this.value!=null)
	{
	selectedPosition=this.value;
	}
		for (var j = 0; j < BatchSemesterWithSubject[selectedPosition-1].sem.length; j++) 
		{
			SubjectCodeWithNameShow +='[';
			SubjectCodeWithNameShow +=BatchSemesterWithSubject[selectedPosition-1].sem[j].SubCode;
			SubjectCodeWithNameShow +='-';
			SubjectCodeWithNameShow +=BatchSemesterWithSubject[selectedPosition-1].sem[j].SubName;
			SubjectCodeWithNameShow +=']		';
			
			if(j==2){
				SubjectCodeWithNameShow +='\n\n';
			}
		}
		$('#subject_code').html(SubjectCodeWithNameShow);
		if(year=='2013')
			{
			//2013
			}
		else if(year=='2014')
			DataSelection_MCA2014_2017();
		else if(year=='2015')
			DataSelection_MCA2015_2018
	
}


function DataSelection_MCA2014_2017()
{
	 
	if(selectedPosition==1)
		MCA2014_2017_SEM_1();
	else if(selectedPosition==2)
		MCA2014_2017_SEM_2();
	else if(selectedPosition==3)
		MCA2014_2017_SEM_3();
	else if(selectedPosition==4)
		MCA2014_2017_SEM_4();
	else if(selectedPosition==5)
		MCA2014_2017_SEM_5();
	else if(selectedPosition==6)
		MCA2014_2017_SEM_6();
}

function MCA2014_2017_SEM_1(){

	$("#data2").hide();
	$("#data3").hide();
	$("#data4").hide();
	$("#data5").hide();
	$("#data6").hide();
	$("#data1").show();
	
	            if(!sem_1){
	           $(document).ready(function() {
	               $('#dataTables-example1').DataTable( {
	                   data: sem1,
	                   columns: [
	                             { title: "SCH NUMBER" },
	             				{ title: "STUDENT NAME" },
	             				{ title: "SGPA" },
	             				{ title: "STATUS" }
	                   ]
	               } );
	           } )
	           sem_1=true;
	            }
}
function MCA2014_2017_SEM_2(){
	
	$("#data1").hide();
	$("#data3").hide();
	$("#data4").hide();
	$("#data5").hide();
	$("#data6").hide();
	$("#data2").show();
	
if(!sem_2){
    $(document).ready(function() {
        $('#dataTables-example2').DataTable( {
            data: sem2,
            columns: [
                      { title: "SCH NUMBER" },
      				{ title: "STUDENT NAME" },
      				{ title: "SGPA" },
      				{ title: "STATUS" }
            ]
        } );
    } )
    sem_2=true;
}
}
function MCA2014_2017_SEM_3(){
	
	$("#data1").hide();
	$("#data2").hide();
	$("#data4").hide();
	$("#data5").hide();
	$("#data6").hide();
	$("#data3").show();

if(!sem_3){
	$(document).ready(function() {
	        $('#dataTables-example3').DataTable( {
	            data: sem3,
	            columns: [
	                      { title: "SCH NUMBER" },
	      				{ title: "STUDENT NAME" },
	      				{ title: "SGPA" },
	      				{ title: "STATUS" }
	            ]
	        } );
	    } )
	    sem_3=true;
	}
}
function MCA2014_2017_SEM_4(){
	$("#data1").hide();
	$("#data2").hide();
	$("#data3").hide();
	$("#data5").hide();
	$("#data6").hide();
	$("#data4").show();
	
	if(!sem_4){
	 $(document).ready(function() {
	        $('#dataTables-example4').DataTable( {
	            data: sem4,
	            columns: [
	                      { title: "SCH NUMBER" },
	      				{ title: "STUDENT NAME" },
	      				{ title: "SGPA" },
	      				{ title: "STATUS" }
	            ]
	        } );
	    } )
	    sem_4=true;
	
	}
}
function MCA2014_2017_SEM_5(){
	
	$("#data1").hide();
	$("#data2").hide();
	$("#data3").hide();
	$("#data4").hide();
	$("#data6").hide();
	$("#data5").show();
	
	if(!sem_5){ 
	$(document).ready(function() {
	        $('#dataTables-example5').DataTable( {
	            data: sem5,
	            columns: [
	                      { title: "SCH NUMBER" },
	      				{ title: "STUDENT NAME" },
	      				{ title: "SGPA" },
	      				{ title: "STATUS" }
	            ]
	        } );
	    } )
	    sem_5=true;
	}
}
function MCA2014_2017_SEM_6(){
	$("#data1").hide();
	$("#data2").hide();
	$("#data3").hide();
	$("#data4").hide();
	$("#data5").hide();
	$("#data6").show();
	 
	if(!sem_6){
	$(document).ready(function() {
	        $('#dataTables-example6').DataTable( {
	            data: sem6,
	            columns: [
	            { title: "SCH NUMBER" },
				{ title: "STUDENT NAME" },
				{ title: "SGPA" },
				{ title: "STATUS" }
	            ]
	        } );
	    } )
	    sem_6=true;
	}
}

function DataSelection_MCA2015_2018()
{
	 
	if(selectedPosition==1)
		MCA2015_2018_SEM_1();
	
}


function MCA2015_2018_SEM_1(){
	$("#data1").hide();
	$("#data2").hide();
	$("#data3").hide();
	$("#data4").hide();
	$("#data5").hide();
	$("#data6").hide();
	$("#2015_2018_sem1").show();
	
	            if(!2015_2018_sem_1){
	           $(document).ready(function() {
	               $('#dataTables_2015_2018_sem1').DataTable( {
	                   data: MCA_2015_2018_Sem1,
	                   columns: [
								{ title: "SCH NUMBER" },
								{ title: "STUDENT NAME" },
								{ title: "SGPA" },
								{ title: "CGPA" },
								{ title: "STATUS" }
	                   ]
	               } );
	           } )
	           sem_1=true;
	            }
}
/*
//Load Data On Result Table
function ShowResult(result)
{	
	
	thead='';
	tbody='';

		thead='<tr>';
		for (var i = 0; i < TheadData.length; i++) 
		{
			thead +='<th>'+TheadData[i].Header+'</th>';
		
		}
		thead +='</tr>';
		$('#table_heading').html(thead);

		for (var i = 0; i < result.length; i++) 
		{
			var number =result[i].Number;
			var name =result[i].StudentName;
			var sgpa =result[i].SGPA;
			var cgpa =result[i].CGPA;
			var status =result[i].Status;
			
			
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
			
			tbody +="<td class='center;><a href='https://web.manit.ac.in'><button type='button' class='btn btn-info btn-circle'><i class='icon-search'></i></button></a></td>";
			tbody +="</tr>";
			
		}
		$('#table_data').html(tbody);
		
		
}

*/

function ShowData(){
	$("#data1").show();
	$("#subject_code").show();
	
}
function HideData(){
	$("#subject").hide();
	$("#data1").hide();
	$("#data2").hide();
	$("#data3").hide();
	$("#data4").hide();
	$("#data5").hide();
	$("#data6").hide();
	$("#2015_2018_sem1").hide();
	$("#subject_code").hide();
	alert("Soory Data Not Found");
	
}
function Default()
{
	$("#subject").hide();
	$("#data2").hide();
	$("#data3").hide();
	$("#data4").hide();
	$("#data5").hide();
	$("#data6").hide();
	$("#2015_2018_sem1").hide();
}
$(document).ready(function () {
	
	$("#mca_year").change(LoadBranchSemester);
	$("#mca_semester").change(LoadBranchSemesterSubject);
	
});

	
