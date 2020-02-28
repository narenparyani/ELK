var data = {
    "took": 48,
    "timed_out": false,
    "_shards": {
      "total": 1,
      "successful": 1,
      "skipped": 0,
      "failed": 0
    },
    "hits": {
      "total": 106222,
      "max_score": null,
      "hits": []
    },
    "aggregations": {
      "agg": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 3891,
        "buckets": [
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 478
                },
                {
                  "key": "FAILURE",
                  "doc_count": 52
                }
              ]
            },
            "key": "AIRTELPRE",
            "doc_count": 1085
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 397
                },
                {
                  "key": "FAILURE",
                  "doc_count": 14
                }
              ]
            },
            "key": "VODAFONPRE",
            "doc_count": 828
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 333
                },
                {
                  "key": "FAILURE",
                  "doc_count": 8
                }
              ]
            },
            "key": "IDEAPRE",
            "doc_count": 683
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 336
                }
              ]
            },
            "key": "AIRCELPRE",
            "doc_count": 672
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 311
                },
                {
                  "key": "FAILURE",
                  "doc_count": 6
                }
              ]
            },
            "key": "BSNLPRE",
            "doc_count": 634
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 282
                },
                {
                  "key": "FAILURE",
                  "doc_count": 35
                }
              ]
            },
            "key": "MHGLMUOB",
            "doc_count": 634
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 298
                },
                {
                  "key": "FAILURE",
                  "doc_count": 9
                }
              ]
            },
            "key": "UNINORPRE",
            "doc_count": 616
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 298
                }
              ]
            },
            "key": "DOCOMOPRE",
            "doc_count": 598
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 147
                }
              ]
            },
            "key": "MTNLDELPRE",
            "doc_count": 294
          },
          {
            "bucket": {
              "doc_count_error_upper_bound": 0,
              "sum_other_doc_count": 0,
              "buckets": [
                {
                  "key": "SUCCESS",
                  "doc_count": 147
                }
              ]
            },
            "key": "MTNLMUMPRE",
            "doc_count": 294
          }
        ]
      }
    },
    "status": 200
  }
  
  let billerList =[];
  var bucketArray=[];
  var successArray=[];
  var failureArray=[];
  console.log(data.aggregations);
  var aggs = data.aggregations.agg.buckets;
  for (var key in aggs) {
    if (aggs.hasOwnProperty(key)) {
        bucketArray.push(aggs[key]);
        
    }
}
  
for(var i=0; i< bucketArray.length; i++){
    billerList.push(bucketArray[i].key);
    if(typeof(bucketArray[i].bucket.buckets[0]) !== "undefined"){
        successArray.push(bucketArray[i].bucket.buckets[0].doc_count);
    }else{
        successArray.push(0);
    }
    if(typeof(bucketArray[i].bucket.buckets[1]) !== "undefined"){
        failureArray.push(bucketArray[i].bucket.buckets[1].doc_count);
    }else{
        failureArray.push(0);
    }
    
}


console.log(billerList);
console.log(successArray);
console.log(failureArray);


const CHART= document.getElementById("lineChart");

let lineChart = new Chart(CHART,{
    type:'bar',
    data: {
        labels: billerList,
        datasets: [{
          label: 'Success',
          data: successArray,
          backgroundColor: "rgba(153,255,51,0.9)"
        }, {
          label: 'Failure',
          data:failureArray,
          backgroundColor: "rgba(255,153,0,0.9)"
        }],
        
      } 
});



var s1 = {
    label: 'INV_MSG63',
    borderColor: 'blue',
    data: [
      { x: '2019-01-06 18:39:30', y: 100 },
      { x: '2019-01-08 18:39:28', y: 101 },
    ]
  };
  
  var s2 = {
    label: 'INV_MSG70',
    borderColor: 'red',
    data: [
      { x: '2019-01-07 18:00:00', y: 90 },
      { x: '2019-01-08 18:00:00', y: 105 },
    ]
  };
  
  var ctx = document.getElementById('myChart'); 
  var chart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [s1, s2] },
    options: {
        legend: {
            position: 'right'
         },
      scales: {
        xAxes: [{
          type: 'time',
          scaleLabel: {
            display: true,
            labelString: 'Time',
            fontSize: 15
          }
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Count',
                fontSize: 15
              },
            ticks: {
                beginAtZero: true
            }
        }]
      },
      title: {
        display: true,
        text: 'Error code distribution',
        position: 'top',
        fontSize: 20
    }
    }
  });



// let dslQueryData = {
//     "aggs": {
//       "2": {
//         "terms": {
//           "field": "Source id.keyword",
//           "order": {
//             "_count": "desc"
//           },
//           "size": 10
//         }
//       }
//     },
//     "size": 0,
//     "_source": {
//       "excludes": []
//     },
//     "stored_fields": [
//       "*"
//     ],
//     "script_fields": {},
//     "docvalue_fields": [
//       {
//         "field": "@timestamp",
//         "format": "date_time"
//       },
//       {
//         "field": "Timestamp",
//         "format": "date_time"
//       },
//       {
//         "field": "date1",
//         "format": "date_time"
//       }
//     ],
//     "query": {
//       "bool": {
//         "must": [],
//         "filter": [
//           {
//             "match_all": {}
//           }
//         ],
//         "should": [],
//         "must_not": []
//       }
//     }
//   };


  
