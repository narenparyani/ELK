var MS_PER_MINUTE = 60000;
var durationInMinutes=15;
var endDateTimeRaw= new Date(2019,08,19,19,30,00);
var endDateTime=endDateTimeRaw.toISOString(); // .utc(new Date(2019,08,18,19,30,00)).format('YYYY-MM-DDTHH:mm:SS.434')+"Z";
var startDateTimeRaw= new Date(endDateTimeRaw - durationInMinutes * MS_PER_MINUTE);
var startDateTime=startDateTimeRaw.toISOString(); //moment.utc(new Date(2019,08,18,19,30,00)).subtract(15,'minute').format('YYYY-MM-DDTHH:mm:SS.434')+"Z"; //2019-10-02T03:03:00.000
	

var duration=Math.ceil((endDateTimeRaw.getTime() - startDateTimeRaw.getTime())/3600000);  //moment(endDateTime.substring(0,endDateTime.length -1)).diff(moment(startDateTime.substring(0,endDateTime.length -1)),"hours");
console.log(duration);
window.onload=load




// Response time chart variables
var avgResponseTimeList;
var apiListResponse=["U04008","U03006","U04006","U07006","U03012","U03082","U07002","U07009","U08002","U05004","U03014","U04002","U07004","U07042","U03086","U04004","U05146","U03034","U07022","U07034"];
var avgResponseTimeList=[1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1];


// Error code chart variables
//first function variables
var errTimeArr;
var errCodeArr;
//var daata = responsible;

//second function variables logic
var no_timeframe;
//var errCodeUniqArr=[];
var errCodeUniqArrLength;
var tempArr;
var temp2dArr;
var output;
var temkey;
var temcount;
var temindex;
var temp1;
var k;


//third function variables
var datasetsObj;


function load(){
	start();
	startResponse();
}

	

document.getElementById("submit").addEventListener("click",function(){
	console.log("------------------"+document.getElementById("start").value+"------------------");
	rawStart = new Date(document.getElementById("start").value+":00.000");		
    rawEnd = new Date(document.getElementById("end").value+":00.000");
    newStartDate=rawStart.toISOString(); 															//moment.utc(rawStart).format('YYYY-MM-DDTHH:mm:SS.434')+"Z";
    console.log(newStartDate);
    newEndDate= rawEnd.toISOString();																					//moment.utc(rawEnd).format('YYYY-MM-DDTHH:mm:SS.434')+"Z";
    console.log(newEndDate);
    
    startDateTimeRaw=  rawStart;
    endDateTimeRaw= rawEnd;
    
    startDateTime=newStartDate;
    endDateTime= newEndDate;
  
    
    start();
    startResponse();
    
});

var items= document.querySelectorAll(".drop-item");

for(var i=0;i< items.length; i++){
    items[i].addEventListener("click", function(){
        var rawSelectedTime = this.innerHTML;
        console.log(rawSelectedTime);
        selectedTimeRange=rawSelectedTime.substring(rawSelectedTime.indexOf(" "), rawSelectedTime.length).trim();
        
        endDateTimeRaw= new Date(2019,08,19,19,30,00);
        endDateTime=endDateTimeRaw.toISOString();

        if(selectedTimeRange == "15 min"){
            durationInMinutes=15;       
        }
        if(selectedTimeRange == "30 min"){
            durationInMinutes=30;       
        }
        if(selectedTimeRange == "1 hour"){
            durationInMinutes=1*60;       
        }
        if(selectedTimeRange == "2 hour"){
            durationInMinutes=2*60;       
        }
        if(selectedTimeRange == "6 hour"){
            durationInMinutes=6*60;       
        }
        if(selectedTimeRange == "12 hour"){
            durationInMinutes=12*60;       
        }
        if(selectedTimeRange == "24 hour"){
            durationInMinutes=24*60;       
        }

        startDateTimeRaw= new Date(endDateTimeRaw - durationInMinutes * MS_PER_MINUTE);
        startDateTime=startDateTimeRaw.toISOString();
        console.log(startDateTime);
        console.log(endDateTime);
        
        start();
        startResponse();
    });     
}

//setInterval(start, 10000);
//setInterval(startResponse, 10000);



function start(){
	document.getElementById("chartDiv").innerHTML= "";
	
	var xhttp=  new XMLHttpRequest();
	 xhttp.onreadystatechange= function(){
		 if(this.readyState !== 4){
			 
			 console.log("first data receiving.");
			 
		 }
		 if(this.readyState== 4 && this.status == 200){
			
			 console.log("first data received");
			
			 var response = JSON.parse(this.responseText);
			 console.log(response);
			 data= response;


			 let billerList=[];
			 var apiArray=[];
			 var apiListFinal=[];
			 var successCountFinal=[];
			 var failureCountFinal=[];
			 var successPercentage = [];

			 data.aggregations.biller.buckets.forEach((element,index) => {
			     billerList.push(element.key);

			      apiArray.push(element.api.buckets);

			 });

			 let chartNos = billerList.length;

			 for(var i=0; i<apiArray.length; i++){
			     var apiListForBiller =[];
			     var successCountForApi =[];
			     var failureCountForApi =[];
			     var successPercentageForApi =[];

			     for(var j=0; j<apiArray[i].length; j++){
			         
			         apiListForBiller.push(apiArray[i][j].key);
			         successCountForApi.push(apiArray[i][j].success.doc_count);
			         failureCountForApi.push(apiArray[i][j].failure.doc_count);
			         successPercentageForApi.push(apiArray[i][j].success.doc_count*100/(apiArray[i][j].failure.doc_count+apiArray[i][j].success.doc_count));
			     }
			     apiListFinal.push(apiListForBiller);
			     successCountFinal.push(successCountForApi);
			     failureCountFinal.push(failureCountForApi);
			     successPercentage.push(successPercentageForApi);
			 }


			 var chartData=sorting(billerList,apiListFinal,successCountFinal,failureCountFinal,successPercentage);
			 
			 console.log(chartData[0]);
			 console.log(chartData[1]);
			 console.log(chartData[2]);
			 console.log(chartData[3]);
			 
			 allChartBuiler(chartData[0],chartData[1],chartData[2],chartData[3]);
			 
			 
			 
		 }
	 }
	 xhttp.open("POST","http://localhost:8080/getResp/webapi/getData",true);
	 xhttp.setRequestHeader('Content-type', 'application/json');
	 xhttp.send(JSON.stringify(createDslQuery("biller")));
	 
		 		 
}


	


		 
		 
		 function createDslQuery(value){
			 

				var billerData= {
						  "aggs": {
							    "biller": {
							      
							      "terms": {
							        "field": "biller id.keyword",
							        "size": 2000,
							        "order": {
							          "_count": "desc"
							         }
							      },
							      "aggs": {
							        "api": {
							          "terms": {
							            "field": "Message code.keyword",
							            
							           
							            "size": 50,
							            "order": {
							              "_count": "desc"
							            }
							            
							          }, 
							           
							       "aggregations": {
							        
							        "success": {
							          "filter": {
							            "term": {
							              "Status.keyword": "SUCCESS"
							            }
							          }
							        },
							        "failure": {
							          "filter": {
							            "term": {
							              "Status.keyword": "FAILURE"
							            }
							          }
							        },
							         "ratiosu": {
							          "bucket_script": {
							            "buckets_path": {
							              
							              "su": "success._count",
							              "fa": "failure._count"
							            },
							            
							            "script": "params.su/(params.fa + params.su)"          }
							        },
							         "ratiofa": {
							          "bucket_script": {
							            "buckets_path": {
							              
							              "su": "success._count",
							              "fa": "failure._count"
							            },
							            
							            "script": "params.fa/(params.fa + params.su)"          }
							        }
							         
							       
							      }
							      
							    }
							  }
							  
							}
							},
							  "query": {
							    "bool": {
							      "must": [
							        {
							          "range": {
							            "log_timestamp": {
							              "format": "strict_date_optional_time",
							              "gte": startDateTime,
							              "lte": endDateTime
							            }
							          }
							        }
							      ],
							      "filter": [
							        {
							          
							          "match": {
							            "Message_type":"Response"
							          }
							          
							        }
							      ],
							      "should": [],
							      "must_not": []
							    }
							  }

							  
							};
				
				if(value == "biller")
				return billerData;
			}	 
		 
		 
		 
		 
		 

function allChartBuiler(billerList,apiListFinal,successCountFinal,failureCountFinal){
    billerList.forEach((element,index) => {

        successPercent = (successCountFinal[index][0]*100)/(successCountFinal[index][0]+failureCountFinal[index][0]);
         
        console.log(successCountFinal[index][0]);
        console.log(failureCountFinal[index][0]);  
        console.log(successPercent); 
        if(successPercent<=30)
            divColor="danger";
        if(successPercent>30 && successPercent<=40)
            divColor="warning";
        if(successPercent>40 && successPercent<=50) 
            divColor="primary"; 
              
        var outDiv= document.createElement("div");
        outDiv.setAttribute("class","pp-3 col-12 col-sm-6 col-lg-4");
        var inDiv= document.createElement("div");
        var inDivClass=`p-0 col-12 border border-${divColor} border-2 rounded`;
        inDiv.setAttribute("class",inDivClass);
        var canvas=document.createElement("div");
        canvas.setAttribute("id","biller"+index);
        inDiv.appendChild(canvas);
        
        var errorDiv= document.createElement("div");
        
        
        //errorDiv.style.height="18vw";
        
        
        errorDiv.setAttribute("class","col-12");
        var canvas=document.createElement("div");
        canvas.setAttribute("id","error"+index);
        
        errorDiv.appendChild(canvas);
        
        inDiv.appendChild(errorDiv);
        
        outDiv.appendChild(inDiv);
        var body = document.getElementById("chartDiv");
        body.appendChild(outDiv);
        billerGraphBuilder("biller"+index,billerList[index],apiListFinal[index],successCountFinal[index],failureCountFinal[index],index);
        //errorCodeDsl(billerList[index],"error"+index);
    })

}

function billerGraphBuilder(canvasId,billerId,apiListFinal,successCountFinal,failureCountFinal,index){
	
	
	
	
	var chart = {
	        type: 'column'   
	        
	     };
	    var title = {
	       text: billerId,
	       style: {
	    	   color: '#000000',
	    	   fontWeight: 'bold',
	    	   fontFamily: 'Arial'
	       }
	    };
	    var xAxis ={
	        categories: apiListFinal
	        
	    };
	    var yAxis= {
	        title :{
	            text: "Count"
	        } 
	    };
	    var tooltip = {
	               valueSuffix: ''
	            };
	    var legend = {
	    		align: 'center',
	             verticalAlign: 'bottom',
	             floating: false,
	             x: 0,
	             y: 15,
	             itemStyle: {
	            	 fontFamily:'Arial',
	            	 fontSize: '15px'
	             }
	    };
	    var credits = {
	        enabled: false
	    };
	    var plotOptions = {
	        bar: {
	           dataLabels: {
	              enabled: true
	           }
	        }
	    };
	    var series =  [{
	    	  color: "#66ff66",	
	          name: 'Success',
	          data: successCountFinal
	       }, 
	       {
	    	  color: "#cc0000",	 
	          name: 'Failure',
	          data: failureCountFinal
	       }
	    ];
	           

	    var json = {};   
	    json.chart = chart; 
	    json.title = title;   
	    // json.subtitle = subtitle; 
	    json.tooltip = tooltip;
	    json.xAxis = xAxis;
	    json.yAxis = yAxis;  
	    json.series = series;
	    json.plotOptions = plotOptions;
	    json.legend = legend;
	    json.credits = credits;
	    
	    Highcharts.chart(canvasId, json);
    
    errorCodeDsl(billerId,"error"+index);
    
}



function sorting(billerList,apiListFinal,successCountFinal,failureCountFinal,successPercentage){
    console.log(billerList);
    console.log(apiListFinal);
    console.log(successCountFinal);
    console.log(failureCountFinal);
    console.log(successPercentage);
    billerListCopy=billerList;
    apiListFinalCopy=apiListFinal;
    successCountFinalCopy=successCountFinal;
    failureCountFinalCopy=failureCountFinal;
    successPercentageCopy=successPercentage;
    var newBillerList=[];
    var newApiListFinal= [];
    var newSuccessCountFinal= [];
    var newFailureCountFinal= [];
    var newSuccessPercentage= [];

		lowest= successPercentage[0][0];
		
		
		for(var i=0; i<successPercentage.length; i++){
		    for(var j=0; j<successPercentage[i].length; j++){
		        for(k=0; k< successPercentage[i].length; k++ ){
		            if (successPercentage[i][k] > successPercentage[i][k+1]){
		                swap(successPercentage[i], k, k+1);
		                swap(apiListFinal[i], k, k+1);
		                swap(successCountFinal[i], k, k+1);
		                swap(failureCountFinal[i], k, k+1);
		            }
		        }
		    }
		}
		var min=successPercentage[0][0];
		var minArray=[];
		var indexOfMin=[];
		for(var i=0; i< successPercentage.length;i++){
		    if(successPercentage[i][0] <= 50){
		        minArray.push(successPercentage[i][0]);
		        indexOfMin.push(i);
		    }
		}
		
		console.log(minArray);
		console.log(indexOfMin);
		for(var i=0; i< minArray.length; i++){
		    for(j=0; j<minArray.length ; j++){
		        if(minArray[j] > minArray[j+1]){
		            swap(minArray, j, j+1);
		            swap(indexOfMin, j, j+1);
		        }
		    }
		}
		
		console.log(minArray);
		console.log(indexOfMin);
		
		var returnBillerList=[];
		var returnApiList=[];
		var returnSuccessList=[];
		var returnFailureList =[];
		
		for(var i=0; i<minArray.length; i++){
		    returnBillerList.push(billerList[indexOfMin[i]]);
		    apiList=[];
		    successList=[];
		    failureList= [];
		    for(var j=0; j<successPercentage[indexOfMin[i]].length; j++){
		        if(successPercentage[indexOfMin[i]][j] <=50){
		            apiList.push(apiListFinal[indexOfMin[i]][j]);
		            successList.push(successCountFinal[indexOfMin[i]][j]);
		            failureList.push(failureCountFinal[indexOfMin[i]][j]);
		        }
		    }
		    returnApiList.push(apiList);
		    returnSuccessList.push(successList);
		    returnFailureList.push(failureList);
		}

return [returnBillerList,returnApiList,returnSuccessList,returnFailureList]
}



function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}


//Error code chart functions will go here 
function errorCodeDsl(billerId, canvasId){
	var interval= getDslQueryInterval(startDateTimeRaw, endDateTimeRaw);
	console.log(interval);
	  var request = 
			{
	   "aggs" : {
	        "errors_over_time" : {
	            "date_histogram" : {
	            	"field": "log_timestamp",
	                "calendar_interval": interval,
	                "time_zone": "Asia/Calcutta",
	                "min_doc_count": 1 
	                
	            }
	      ,
	          "aggs": {
	            "err_code": {
	              "terms": {
	                "field": "Error_code.keyword",
	                "size": 50
	              }
	            }
	          
	        
	      }
	        }
	    },
	    "query": {
	      "bool": {
	        "must": [
	        {
	          "range": {
	            "log_timestamp": {
	              
	              "gte": startDateTime,
	              "lte": endDateTime
	            }
	          }
	        }
	      ],
	        "filter": [
	        {
	          "match": {
	            "biller id":billerId
	          }
	        }
	      ]
	      } 
	      
	    }
	    
	  
	};
	  
	  var xhttp=  new XMLHttpRequest();
		 xhttp.onreadystatechange= function(){
			 if(this.readyState !== 4){
				 
				 console.log("error code data receiving.");
				 
			 }
			 if(this.readyState== 4 && this.status == 200){
				
				 console.log("error code data received");
				 daata= JSON.parse(this.responseText);
				 myFunction(daata,canvasId,billerId);
			 }
	
		 }
		 xhttp.open("POST","http://localhost:8080/getResp/webapi/getData",true);
		 xhttp.setRequestHeader('Content-type', 'application/json');
		 xhttp.send(JSON.stringify(request));
		 
		 
}

function myFunction(daata,canvasId,billerId) {
	errTimeArr=[];
	errCodeArr=[];
	daata.aggregations.errors_over_time.buckets.forEach((element,index) => {

	//stores the time frames for the x-axis
	errTimeArr.push(element.key_as_string.substring(11,16));
	//different error codes and line graph for each to be shown by this data
	errCodeArr.push(element.err_code.buckets);

	});

	console.log("timestamps" + errTimeArr);
	//console.log(errCodeArr);

	logic(errTimeArr,errCodeArr,billerId,canvasId);


	}//end of first myFunction


	function logic(errTimeArr,errCodeArr,billerId,canvasId) {
		
		no_timeframe=errTimeArr.length;
		//console.log(no_timeframe);
		var errCodeUniqArr=[];
		
		////////////creating an array for the Unique Error Codes
		for(var i=0; i<no_timeframe; i++){
			for(var j=0; j<errCodeArr[i].length; j++) {
			//console.log(errCodeArr[i][j].key);
			//console.log(errCodeArr[i][j].doc_count);
			if( !(errCodeUniqArr.includes(errCodeArr[i][j].key)))
			{errCodeUniqArr.push(errCodeArr[i][j].key);}
			}
			
		}
		console.log(billerId);
		console.log(errCodeUniqArr);
		errCodeUniqArrLength=errCodeUniqArr.length;
		console.log(errCodeUniqArrLength);
		console.log(no_timeframe);
		
		///////////////Creating an empty 1d array for the time series graph
		tempArr=[];
		for(var i=0; i<errCodeUniqArrLength*no_timeframe; i++){
		tempArr.push(0);
		}
		/*
		
		for(var i=0; i<no_timeframe; i++){
		temp2dArr.push(tempArr);
		}
		*/
		console.log(tempArr);
		output=[];
		output=tempArr;
		
		
		//////////finding index of the unique error
		k=0;
		temp1=[];
		for(var i=0; i<no_timeframe; i++){ 
			for(var j=0; j<errCodeArr[i].length; j++) {
			
					temkey= errCodeArr[i][j].key;
					temcount=errCodeArr[i][j].doc_count;
					
					
					for(var z=0;z<errCodeUniqArrLength;z++)
					{
						if(temkey == errCodeUniqArr[z])
						{temindex=z;
							
							break;
						}
					}
					//console.log("time "+i);
					//console.log("errcode "+z);
					//console.log(temcount);
					//temp1.push([i,temindex,temcount]);
					temp1[k]= new Array (i,temindex,temcount);
					k++;
					//output[i][temindex]=temcount;
					//console.log(output[i][z]);
			
			}
			
		}
		console.log(temp1.length);
		
		console.log(temp1);
		
		//creating final 1d array for time series graph
		for(var i=0; i<temp1.length; i++)
		{
			var tem1=(temp1[i][0]);
			var tem2=(temp1[i][1]);
			var tem3=(temp1[i][2]);
			output[(tem1*errCodeUniqArrLength + tem2)] = tem3;
		}
		console.log(output);
		
		
		
		//////////////creating the final output 2d array for time series graph
		/*
		for(var i=0; i<temp1.length; i++)
		{
			var tem1=(temp1[i][0]);
			var tem2=(temp1[i][1]);
			var tem3=(temp1[i][2]);
			console.log(tem1);
			console.log(tem2);
			console.log(tem3);
			//output[tem1][tem2]=tem3;
			//output[(temp1[i][0])][(temp1[i][1])]=temp1[i][2];
			//console.log(temp1[i][2]);
			//console.log(i);
		}
		//console.log(output);
		*/
		
		createDatasets(errTimeArr,errCodeUniqArr,output,canvasId);
		
		
	}//end of logic function

	var dynamicColors = function() {
	            var r = Math.floor(Math.random() * 255);
	            var g = Math.floor(Math.random() * 255);
	            var b = Math.floor(Math.random() * 255);
	            return "rgb(" + r + "," + g + "," + b + ")";
	    };


	function createDatasets(errTimeArr,errCodeUniqArr,output,canvasId) {
		
		
		datasetsObj=[];
		for(var i=0; i<errCodeUniqArr.length; i++) {
			//datasetsObj= '{' + 'label: ' + 'errCodeUniqArr[i]' +
			
			var tempErrArray=[];
			for(var j=0; j<output.length; j++)
			{
				if( (j-i)%errCodeUniqArr.length == 0 )
					tempErrArray.push(output[j]);
			}
			
			
			var tempObj = new Object();
			tempObj.label=errCodeUniqArr[i];
			tempObj.data = tempErrArray;
			tempObj.fill = false;
			tempObj.borderColor = "#3e95fd";
	    tempObj.backgroundColor = tempObj.borderColor;
	    tempObj.lineTension =0;
			datasetsObj.push(tempObj);
		}
		
		console.log(datasetsObj);
		errLineChartBuilder(errTimeArr,datasetsObj,canvasId);
		console.log(errTimeArr);
		console.log(canvasId);
	}
		


	function errLineChartBuilder(errTimeArr,datasetsObj,canvasId) {
	console.log(errTimeArr);
	console.log(datasetsObj);
	
	series=[];
    for(var i=0; i<datasetsObj.length; i++){
        var obj= new Object();
        obj.name= datasetsObj[i].label;
        obj.data= datasetsObj[i].data;
        obj.color= "#0052cc";
        series.push(obj);
    }
    
    var title={
    	text: "Error codes",
    	style: {
	    	   color: '#000000',
	    	   fontWeight: 'bold',
	    	   fontFamily: 'Arial',
	    	   fontSize: '15px'
	    }
    };

     var xAxis = {
        categories: errTimeArr
     };
     var yAxis = {
        title: {
           text: 'Count'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
     };   
     var tooltip = {
        valueSuffix: ''
     }
     var legend = {
    		 align: 'center',
             verticalAlign: 'bottom',
             floating: false,
             x: 0,
             y: 15
     };
     var seriesfinal =  series;
     var credits = {
 	        enabled: false
 	 };
     var json = {};
     json.title = title;
     //json.subtitle = subtitle;
     json.xAxis = xAxis;
     json.yAxis = yAxis;
     json.tooltip = tooltip;
     json.legend = legend;
     json.series = seriesfinal;
     json.credits=credits;
     
     $("#"+canvasId).highcharts(json);
	
	
	}//end of chart builder








// For second report functions required are here------------------------------

function startResponse(){
	document.getElementById("responseDiv").innerHTML= "";
	var canvas=document.createElement("canvas");
	canvas.setAttribute("id","response");
	//document.getElementById("responseChartDiv").appendChild(canvas);
	
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
	    if(this.readyState !=4){
	        console.log("response data receiving.");
	    }
	    if(this.readyState ==4 && this.status == 200){
	        console.log(" response data received.");
	        var response = JSON.parse(this.responseText);
	        data1= response;
	        let actualData= data1.aggregations.date.buckets;

	        let xAxisValues=[];
	        
	        //hardcoded average response time values for each api
	        

	        //this is just for setting the response time default values to 1

//	        avgResponseTimeList.forEach((ele,indx) => {
//	            avgResponseTimeList[indx] = 1.5;
//	        })
	        ////////////////////////////////////////////////////////////////

	        let responseTimeList=[];
	        apiListResponse.forEach((element,index) =>{
	            let newList=[];
	           responseTimeList.push(newList);
	        });
	        actualData.forEach((element1,index1) => {

	            xAxisValues.push(element1.key_as_string.substring(11,16));

	            let msgArray=element1.messageCode.buckets;
	        
	            msgArray.forEach((element2,index2) =>{

	                var index=apiListResponse.indexOf(element2.key);
	                responseTimeList[index].push(element2.responseTime.value);

	            });
	            
	            for(var i=0; i<apiListResponse.length ;i++){

	                if(typeof(responseTimeList[i][index1]) == "undefined"){
	                    responseTimeList[i].push(null); 
	                }
	                    
	            }

	        })

	        //console.log(responseTimeList);

	        chartData=getChartDataResponse(xAxisValues, apiListResponse,responseTimeList);
	        
	  
	        allChartBuilerResponse("response",xAxisValues,chartData[0],chartData[1]);

	    }
	}
	xhttp.open("POST","http://localhost:8080/getResp/webapi/getData",true);
	xhttp.setRequestHeader('Content-type', 'application/json');
	xhttp.send(JSON.stringify(createDslQueryResponse()));

}





function createDslQueryResponse(){
	var interval= getDslQueryInterval(startDateTimeRaw, endDateTimeRaw);
	console.log(interval)
    var obj= {
        "aggs": {
          "date": {
            "date_histogram": {
              "field": "log_timestamp",
              "calendar_interval": interval,
              "time_zone": "Asia/Calcutta",
              "min_doc_count": 1
            },
            "aggs": {
              "messageCode": {
                "terms": {
                  "field": "Message code.keyword",
                  "order": {
                    "responseTime": "desc"
                  },
                  "size": 5
                },
                "aggs": {
                  "responseTime": {
                    "avg": {
                      "field": "Response time"
                    }
                  }
                }
              }
            }
          }
        },
        "size": 0,
        "_source": {
          "excludes": []
        },
        "stored_fields": [
          "*"
        ],
        "script_fields": {},
        "docvalue_fields": [
          {
            "field": "Timestamp",
            "format": "date_time"
          },
          {
            "field": "date1",
            "format": "date_time"
          },
          {
            "field": "log_timestamp",
            "format": "date_time"
          }
        ],
        "query": {
          "bool": {
            "must": [
              {
                "range": {
                  "log_timestamp": {
                    "format": "strict_date_optional_time",
                    "gte": startDateTime,
                    "lte": endDateTime
                  }
                }
              }
            ],
            "filter": [
              {
                "bool": {
                  "should": [
                    {
                      "match_phrase": {
                        "Message_type.keyword": "Response"
                      }
                    }
                  ],
                  "minimum_should_match": 1
                }
              }
            ],
            "should": [],
            "must_not": []
          }
        }
      }

      return obj;
}





function getChartDataResponse(xAxisValues, apiList,responseTimeList){

    let newApiList=[];
    let newResponseTimeList=[];
    
    for(var i=0; i< responseTimeList.length; i++){
        flag=0;
        count=0;
        for(var j=0; j<responseTimeList[i].length; j++){

            // This if condition checks if the response time at any instance is greater than the hardcoded response time
            if(responseTimeList[i][j] > avgResponseTimeList[i] && responseTimeList[i][j] != null ){
                flag=1;
            }
            // count variable is used to eliminate the apis which are not present in the given time interval
            if(responseTimeList[i][j] == null){
                count++;
            }
        }
        if(count != xAxisValues.length){
            if(flag== 1){
                newApiList.push(apiList[i]+"(average response time="+avgResponseTimeList[i]+"s)");
                newResponseTimeList.push(responseTimeList[i]);
            }
            
        }
    }

    // console.log(newApiList);
    // console.log(newResponseTimeList);
    return [newApiList, newResponseTimeList];
}









function allChartBuilerResponse(canvasId,xAxisValues,apiList,responseTimeList){

//    var ctx=document.getElementById(canvasId).getContext('2d');
//    var chart= new Chart(ctx,getChartObjectResponse(xAxisValues,apiList,responseTimeList));
	for(var i=0; i<apiList.length; i++){
		console.log(apiList[i]);
		var div= document.createElement("div");
		div.setAttribute("class","col-12 col-lg-6 my-1 border border-2 border-danger");
		var canvas=document.createElement("div");
		canvas.setAttribute("id","api"+i);
		div.appendChild(canvas);
		var responseDiv= document.getElementById("responseDiv");
		responseDiv.appendChild(div);
		getLineChart("api"+i, xAxisValues, apiList[i], responseTimeList[i]);
	}
}

function getLineChart(canvasId,xAxisValues,api,responseTime){
	console.log(canvasId);
	console.log(xAxisValues);
	console.log(api);
	console.log(responseTime);
	var avgResp=(Number(api.substring(29,30)));
	avgResponsetimeArray= [];
	for(var i=0; i< xAxisValues.length; i++){
		avgResponsetimeArray.push(avgResp);
	}
    console.log(avgResponsetimeArray);
    
    var title = {
        text: 'Response time graph for '+api,
        style: {
	    	   color: '#000000',
	    	   fontWeight: 'bold',
	    	   fontFamily: 'Arial'
	       }
     };
     var xAxis = {
        categories: xAxisValues
     };
     var yAxis = {
        title: {
           text: 'Response time in second'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
     };   
     var tooltip = {
        valueSuffix: ''
     }
     var legend = {
    		 align: 'center',
             verticalAlign: 'bottom',
             floating: false,
             x: 0,
             y: 15
     };
     var series =  [{
           name: api,
           data: responseTime,
           color: '#0052cc'
        }, 
        {
           name: 'Average response time',
           data: avgResponsetimeArray,
           color: '#cc0000'
        }
     ];
     
     var credits = {
 	        enabled: false
 	 };
     
     var plotOptions ={
    	series:{
    		gapSize: 0
    	}	 
     };
     var json = {};
     json.title = title;
     //json.subtitle = subtitle;
     json.xAxis = xAxis;
     json.yAxis = yAxis;
     json.tooltip = tooltip;
     json.legend = legend;
     json.series = series;
     json.credits= credits;
     json.plotOptions= plotOptions;
     
     $("#"+canvasId).highcharts(json);
}










function getChartObjectResponse(xAxisValues,apiList,responseTimeList){
	
	
	
	
	
    dset=[];
    for(var i=0; i< apiList.length; i++){
        dsetObj=new Object();
        dsetObj.data=responseTimeList[i];
        dsetObj.label= apiList[i];
        dsetObj.fill=false;
        dsetObj.borderColor= "#3e95fd";
        dsetObj.lineTension= 0;
        dset.push(dsetObj);
    }
    var obj={
        type: 'line',
        data: {
          labels:xAxisValues,
          datasets: dset
        },
        options: {
          title: {
            display: true,
            text: 'Response time graph for problematic apis',
            fontSize:20,
            fontColor:"#000000"
          },
          spanGaps: true,
          scales: {
        	    xAxes: [{
        	        gridLines: {
        	            display:true
        	        }
        	    }],
        	    yAxes: [{
        	        scaleLabel: {
        	            display: true,
        	            labelString: 'Response time in second',
        	            fontSize: 18,
        	            fontStyle:"bold"
        	          },
        	        ticks: {
        	            beginAtZero: true
        	        }  
        	    }]
        	},
          legend: {
            position: 'bottom',
            labels:{
                boxWidth:20,
                fontSize:14,
                padding:5,
                fontStyle:"bold"
            },
            onClick: function(e, legendItem) {
                var index = legendItem.datasetIndex;
                var ci = this.chart;
                var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;
    
                ci.data.datasets.forEach(function(e, i) {
                var meta = ci.getDatasetMeta(i);
    
                if (i !== index) {
                    if (!alreadyHidden) {
                    meta.hidden = meta.hidden === null ? !meta.hidden : null;
                    } else if (meta.hidden === null) {
                    meta.hidden = true;
                    }
                } else if (i === index) {
                    meta.hidden = null;
                }
                });
    
                ci.update();
          }
        }
        }
      }
      return obj;
}




function getDslQueryInterval(startDateTimeRaw, endDateTimeRaw){
	var duration= Math.ceil((endDateTimeRaw.getTime() - startDateTimeRaw.getTime())/3600000);
	console.log(duration);
	if(duration == 0){
		return "1m"
	}
	if (duration == 1){
		return "1m"
	}
	if (duration == 2){
		return "1m"
	}
	if (duration >=3 && duration <= 5){
		return "1m"
	}
	if (duration >5 && duration <= 12){
		return "1h"
	}
	if (duration >12 && duration <= 24){
		return "1h"
	}
	if (duration >24 && duration <= 48){
		return "1h"
	}
	if (duration >48){
		return "1d"
	}
}



