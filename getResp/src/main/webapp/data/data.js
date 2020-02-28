var data ={
  "took" : 1,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 10000,
      "relation" : "gte"
    },
    "max_score" : null,
    "hits" : [ ]
  },
  "aggregations" : {
    "biller" : {
      "doc_count_error_upper_bound" : 0,
      "sum_other_doc_count" : 3891,
      "buckets" : [
        {
          "key" : "AIRTELPRE",
          "doc_count" : 1085,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 356,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 355,
                "failure" : {
                  "doc_count" : 9
                },
                "success" : {
                  "doc_count" : 346
                },
                "ratiosu" : {
                  "value" : 0.9746478873239437
                },
                "ratiofa" : {
                  "value" : 0.02535211267605634
                }
              },
              {
                "key" : "U03005",
                "doc_count" : 112,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03006",
                "doc_count" : 105,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 105
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              },
              {
                "key" : "U03013",
                "doc_count" : 87,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03014",
                "doc_count" : 70,
                "failure" : {
                  "doc_count" : 43
                },
                "success" : {
                  "doc_count" : 27
                },
                "ratiosu" : {
                  "value" : 0.38571428571428573
                },
                "ratiofa" : {
                  "value" : 0.6142857142857143
                }
              }
            ]
          }
        },
        {
          "key" : "VODAFONPRE",
          "doc_count" : 828,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 346,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 344,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 344
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              },
              {
                "key" : "U03005",
                "doc_count" : 53,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03006",
                "doc_count" : 53,
                "failure" : {
                  "doc_count" : 7
                },
                "success" : {
                  "doc_count" : 46
                },
                "ratiosu" : {
                  "value" : 0.8679245283018868
                },
                "ratiofa" : {
                  "value" : 0.1320754716981132
                }
              },
              {
                "key" : "U03013",
                "doc_count" : 17,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03014",
                "doc_count" : 14,
                "failure" : {
                  "doc_count" : 7
                },
                "success" : {
                  "doc_count" : 7
                },
                "ratiosu" : {
                  "value" : 0.5
                },
                "ratiofa" : {
                  "value" : 0.5
                }
              },
              {
                "key" : "U03085",
                "doc_count" : 1,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              }
            ]
          }
        },
        {
          "key" : "IDEAPRE",
          "doc_count" : 683,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 318,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 318,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 318
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              },
              {
                "key" : "U03005",
                "doc_count" : 18,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03006",
                "doc_count" : 17,
                "failure" : {
                  "doc_count" : 5
                },
                "success" : {
                  "doc_count" : 12
                },
                "ratiosu" : {
                  "value" : 0.7058823529411765
                },
                "ratiofa" : {
                  "value" : 0.29411764705882354
                }
              },
              {
                "key" : "U03013",
                "doc_count" : 6,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03014",
                "doc_count" : 6,
                "failure" : {
                  "doc_count" : 3
                },
                "success" : {
                  "doc_count" : 3
                },
                "ratiosu" : {
                  "value" : 0.5
                },
                "ratiofa" : {
                  "value" : 0.5
                }
              }
            ]
          }
        },
        {
          "key" : "AIRCELPRE",
          "doc_count" : 672,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 336,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 336,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 336
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              }
            ]
          }
        },
        {
          "key" : "BSNLPRE",
          "doc_count" : 634,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 311,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 311,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 311
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              },
              {
                "key" : "U03005",
                "doc_count" : 6,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03006",
                "doc_count" : 6,
                "failure" : {
                  "doc_count" : 6
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : 0.0
                },
                "ratiofa" : {
                  "value" : 1.0
                }
              }
            ]
          }
        },
        {
          "key" : "MHGLMUOB",
          "doc_count" : 634,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U07008",
                "doc_count" : 289,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U07009",
                "doc_count" : 289,
                "failure" : {
                  "doc_count" : 35
                },
                "success" : {
                  "doc_count" : 254
                },
                "ratiosu" : {
                  "value" : 0.8788927335640139
                },
                "ratiofa" : {
                  "value" : 0.12110726643598616
                }
              },
              {
                "key" : "U05003",
                "doc_count" : 28,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U05004",
                "doc_count" : 28,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 28
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              }
            ]
          }
        },
        {
          "key" : "UNINORPRE",
          "doc_count" : 616,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 309,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 307,
                "failure" : {
                  "doc_count" : 9
                },
                "success" : {
                  "doc_count" : 298
                },
                "ratiosu" : {
                  "value" : 0.9706840390879479
                },
                "ratiofa" : {
                  "value" : 0.029315960912052116
                }
              }
            ]
          }
        },
        {
          "key" : "DOCOMOPRE",
          "doc_count" : 598,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 300,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 298,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 298
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              }
            ]
          }
        },
        {
          "key" : "MTNLDELPRE",
          "doc_count" : 294,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 147,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 147,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 147
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              }
            ]
          }
        },
        {
          "key" : "MTNLMUMPRE",
          "doc_count" : 294,
          "api" : {
            "doc_count_error_upper_bound" : 0,
            "sum_other_doc_count" : 0,
            "buckets" : [
              {
                "key" : "U03081",
                "doc_count" : 147,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 0
                },
                "ratiosu" : {
                  "value" : null
                },
                "ratiofa" : {
                  "value" : null
                }
              },
              {
                "key" : "U03082",
                "doc_count" : 147,
                "failure" : {
                  "doc_count" : 0
                },
                "success" : {
                  "doc_count" : 147
                },
                "ratiosu" : {
                  "value" : 1.0
                },
                "ratiofa" : {
                  "value" : 0.0
                }
              }
            ]
          }
        }
      ]
    }
  }
}
