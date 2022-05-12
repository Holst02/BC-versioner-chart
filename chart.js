window.addEventListener('load', () => {
  registerSW()
})

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js')
    } catch (e) {
      console.log(`SW registration failed`)
    }
  }
}

/* DATA */
var betaArray = ['2022-03-01', '2022-02-01', '2022-01-01', '2021-12-01', '2021-11-01', '2021-10-01', '2021-09-01', '2021-08-01', '2021-07-01', '2021-06-01', '2021-05-01', '2021-04-01', '2021-03-01', '2021-02-01', '2021-01-01', '2020-12-01', '2020-11-01', '2020-10-01', '2020-09-01', '2020-08-01', '2020-07-01', '2020-06-01', '2020-05-01', '2020-04-01', '2020-03-01', '2020-02-01', '2020-01-01', '2019-12-01', '2019-11-01', '2019-10-01', '2019-09-01', '2019-08-01', '2019-07-01', '2019-06-01', '2019-05-01', '2019-04-01', '2019-03-01', '2019-02-01', '2019-01-01', '2018-12-01', '2018-11-01', '2018-10-01', '2018-09-01', '2018-08-01', '2018-07-01', '2018-06-01', '2018-05-01', '2018-04-01', '2018-03-01', '2018-02-01', '2018-01-01', '2017-12-01', '2017-11-01', '2017-10-01', '2017-09-01', '2017-08-01', '2017-07-01', '2017-06-01', '2017-05-01', '2017-04-01', '2017-03-01', '2017-02-01', '2017-01-01', '2016-12-01', '2016-11-01', '2016-10-01', '2016-09-01', '2016-08-01', '2016-07-01', '2016-06-01', '2016-05-01', '2016-04-01', '2016-03-01', '2016-02-01', '2016-01-01', '2015-12-01', '2015-11-01', '2015-10-01', '2015-09-01', '2015-08-01', '2015-07-01', '2015-06-01', '2015-05-01', '2015-04-01', '2015-03-01', '2015-02-01'];
var sizeArray = [ 89.35, 89.35, 89.35, 89.35, 81.23, 81.23, 81.23, 81.23, 81.23, 73.85, 73.85, 73.85, 73.85, 73.85, 73.15, 73.15, 66.50, 66.50, 66.50, 66.50, 66.50, 60.46, 60.46, 60.46, 60.46, 54.96, 54.96, 54.96, 78.45, 72.82, 49.74, 68.43, 65.88, 45.00, 40.91, 40.91, 40.91, 54.23, 36.52, 34.81, 31.64, 31.64, 28.77, 26.15, 23.77, 23.77, 33.31, 20.69, 20.69, 17.10, 17.10, 16.24, 15.61, 14.19, 12.90, 11.85, 10.77, 16.09, 9.29, 8.18, 6.76, 8.49, 9.95, 4.70, 6.80, 6.18, 5.62, 4.26, 4.26, 6.03, 6.03, 7.08, 5.85, 3.27, 3.27, 3.03, 3.03, 3.03, 1.92, 1.75, 1.75, 1.59, 1.59, 1.44, 1.44, 0.29];
betaArray.reverse();
sizeArray.reverse();
var mdArraySizeDate = [];
for (let dateIndex = 0; dateIndex < betaArray.length-1; dateIndex++) {
  const date = new Date(`${betaArray[dateIndex]}`);
  const month = date.toLocaleDateString('default', { month: 'long'});
  const year = date.toLocaleDateString('default', {year: 'numeric'});
  mdArraySizeDate.push([`${month + ' - ' + year}`]);
}

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: mdArraySizeDate,
      datasets: [
        {
          label: "",
          borderColor: "rgb(30,144,255)",
          backgroundColor: ["red", "green", "blue"],
          data: sizeArray,
        }
      ],
    },
    options: {
  
      //indexAxis: 'y',
      scales: {
        x: {
          //type: 'category',
          //labels: [],
        },
        y: {
        },
      },
    },
  });

/* CHART 2 */

var dateArray = [
  '2017-12-27',
'2018-01-01',
'2018-02-01',
'2018-03-01',
'2018-04-01',
'2018-05-01',
'2018-06-01',
'2018-07-01',
'2018-08-01',
'2018-09-01',
'2018-10-01',
'2018-11-01',
'2018-12-01',
'2019-01-01',
'2019-02-01',
'2019-03-01',
'2019-04-01',
'2019-05-01',
'2019-06-01',
'2019-07-01',
'2019-08-01',
'2019-09-01',
'2019-10-26',
'2019-11-01',
'2019-12-01',
'2020-01-01',
'2020-02-01',
'2020-03-26',
'2020-04-01',
'2020-05-01',
'2020-06-01',
'2020-07-01',
'2020-08-01',
'2020-09-01',
'2020-10-19',
'2020-11-01',
'2020-12-01',
'2021-01-01',
'2021-02-01',
'2021-03-01',
'2021-04-01',
'2021-05-01',
'2021-06-01',
'2021-07-01',
'2021-08-01',
'2021-09-01',
'2021-10-01',
'2021-11-01',
'2021-12-03',
'2022-01-01',
'2022-02-01',
'2022-03-22',
];
var versionsArray = [
  '9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'9',
'14.0.35570.0',
'14.0.35570.0',
'14.0.35570.0',
'14.0.35570.0',
'14.0.35570.0',
'14.0.37587.0',
'14.0.37587.0',
'14.0.37587.0',
'14.0.37587.0',
'14.0.37587.0',
'14.0.37587.0',
'14.0.37587.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'14.0.42627.0',
'16.9.20537.0',
'16.9.20537.0',
'16.9.20537.0',
'17.11.30469.0',
];
var lengthOfArrayRecieved = dateArray.length;
var removedDuplicates = [testSet = new Set(versionsArray)];
let arrayIndex = 0;
let satisfied = false;
while(satisfied == false){
  if(versionsArray[arrayIndex] == versionsArray[arrayIndex+1]){
    versionsArray.splice(arrayIndex+1, 1);
    dateArray.splice(arrayIndex+1, 1);
  } else {
    arrayIndex++;
  }
  if(testSet.size == versionsArray.length){
    satisfied = true;
  }
}

/* Initialize Chart */

var labels = ['test']
var mdArrayVersionDate = [];
var test = 0;
for (let dateIndex = 0; dateIndex < dateArray.length-1; dateIndex++) {
  const date = new Date(`${dateArray[dateIndex]}`);
  const month = date.toLocaleDateString('default', { month: 'long'});
  const year = date.toLocaleDateString('default', {year: 'numeric'});
  const date2 = new Date(`${dateArray[dateIndex+1]}`);
  const month2 = date2.toLocaleDateString('default', { month: 'long'});
  const year2 = date2.toLocaleDateString('default', {year: 'numeric'});
  mdArrayVersionDate.push([`${month + ' - ' + year}`, `${month2 + ' - ' + year2}`]);  
}
const ctx2 = document.getElementById("myChart2");
const myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: versionsArray,
    datasets: [
      {
        label: "",
        borderColor: "rgb(30,144,255)",
        backgroundColor: ["red", "green", "blue"],
        data: mdArrayVersionDate,
        datalabels: {
          color: "rgb(0,0,0)",
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          }
        }
      }
    ],
  },
  plugins: [ChartDataLabels],
  options: {

    indexAxis: 'y',
    scales: {
      x: {
        type: 'category',
        labels: [],
      },
      y: {
      },
    },
  },
});