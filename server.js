const express = require("express");
const https = require("https");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.get("/", (req, res) => {


const dateO = new Date();
dateO.setDate(dateO.getDate() - 1);
const yearO = dateO.getFullYear();
const monthO = dateO.getMonth() + 1; 
const dayO = dateO.getDate();
const yesterdayO = yearO + '-' + (monthO < 10 ? '0' : '') + monthO + '-' + (dayO < 10 ? '0' : '') + dayO;


console.log(yesterdayO);



  const stockArray = ["MSFT", "AAPL", "ZETA", "NFLX", "DIS", "AMZN"];
  const apiKey = "kIUlLP8ZP84OhKadJZ3CKpjW937Lm4JP";
  const today = new Date().toISOString().slice(0, 10);
  const todayNew = new Date();
  const yesterday = new Date(todayNew);
  yesterday.setDate(todayNew.getDate() - 1);
  const formattedDate = yesterday.toISOString().slice(0, 10);
  console.log(formattedDate);
  console.log(today)
  console.log(todayNew)
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  firstCall();

  function firstCall() {
    console.log("First Call Check");
    const url1 =

      "https://api.polygon.io/v2/aggs/ticker/" +
      stockArray[0] +
      "/range/1/day/" +
      yesterdayO +
      "/" +
      formattedDate +
      "?adjusted=true&sort=asc&limit=120&apiKey=" +
      apiKey;
    https.get(url1, function (response) {
      response.on("data", function (data) {
        const stockData1 = JSON.parse(data);
        console.log(stockData1)
        const current1day = stockData1.results[0].c;
        const open1day = stockData1.results[0].o;
        const url2 =
          "https://api.polygon.io/v2/aggs/ticker/" +
          stockArray[0] +
          "/range/1/month/" +
          startOfMonth.toISOString().slice(0, 10) +
          "/" +
          startOfMonth.toISOString().slice(0, 10) +
          "?adjusted=true&sort=asc&limit=120&apiKey=" +
          apiKey;
        https.get(url2, function (response) {
          response.on("data", function (data) {
            const stockData2 = JSON.parse(data);
            const open1month = stockData2.results[0].o;

            const url3 =
            "https://api.polygon.io/v2/aggs/ticker/" +
            stockArray[1] +
            "/range/1/day/" +
            yesterdayO +
            "/" +
            formattedDate +
            "?adjusted=true&sort=asc&limit=120&apiKey=" +
            apiKey;
            https.get(url3, function (response) {
              response.on("data", function (data) {
                const stockData3 = JSON.parse(data);
                console.log(stockData3)
                const current2day = stockData3.results[0].c;
                const open2day = stockData3.results[0].o;
                const url4 =
                  "https://api.polygon.io/v2/aggs/ticker/" +
                  stockArray[1] +
                  "/range/1/month/" +
                  startOfMonth.toISOString().slice(0, 10) +
                  "/" +
                  startOfMonth.toISOString().slice(0, 10) +
                  "?adjusted=true&sort=asc&limit=120&apiKey=" +
                  apiKey;
                https.get(url4, function (response) {
                  response.on("data", function (data) {
                    const stockData4 = JSON.parse(data);
                    const open2month = stockData4.results[0].o;

                    const percentChange1 = (
                      current1day / open1month -
                      1
                    ).toFixed(2);
                    const dollarChange1 = (current1day - open1month).toFixed(2);

                    const percentChange2 = (
                      current2day / open2month -
                      1
                    ).toFixed(2);
                    const dollarChange2 = (current2day - open2month).toFixed(2);

secondChange( current1day,
  open1day,
  open1month,
  percentChange1,
  dollarChange1,
  current2day,
  open2day,
  open2month,
  percentChange2,
  dollarChange2)






                      

                    
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  function secondChange( current1day,
    open1day,
    open1month,
    percentChange1,
    dollarChange1,
    current2day,
    open2day,
    open2month,
    percentChange2,
    dollarChange2) {
      const secondCallTimeout = setTimeout(call2, 65000, current1day,
        open1day,
        open1month,
        percentChange1,
        dollarChange1,
        current2day,
        open2day,
        open2month,
        percentChange2,
        dollarChange2 ); 
         function call2(
    current1day,
    open1day,
    open1month,
    percentChange1,
    dollarChange1,
    current2day,
    open2day,
    open2month,
    percentChange2,
    dollarChange2
  ) {

    console.log("Second call check");
    const url5 =
    "https://api.polygon.io/v2/aggs/ticker/" +
    stockArray[2] +
    "/range/1/day/" +
    yesterdayO +
    "/" +
    formattedDate +
    "?adjusted=true&sort=asc&limit=120&apiKey=" +
    apiKey;
    https.get(url5, function (response) {
      response.on("data", function (data) {
        const stockData5 = JSON.parse(data);
        const current3day = stockData5.results[0].c;
        const open3day = stockData5.results[0].o;
        const url6 =
          "https://api.polygon.io/v2/aggs/ticker/" +
          stockArray[2] +
          "/range/1/month/" +
          startOfMonth.toISOString().slice(0, 10) +
          "/" +
          startOfMonth.toISOString().slice(0, 10) +
          "?adjusted=true&sort=asc&limit=120&apiKey=" +
          apiKey;
        https.get(url6, function (response) {
          response.on("data", function (data) {
            const stockData6 = JSON.parse(data);
            const open3month = stockData6.results[0].o;

            const url7 =
            "https://api.polygon.io/v2/aggs/ticker/" +
            stockArray[3] +
            "/range/1/day/" +
            yesterdayO +
            "/" +
            formattedDate +
            "?adjusted=true&sort=asc&limit=120&apiKey=" +
            apiKey;
            https.get(url7, function (response) {
              response.on("data", function (data) {
                const stockData7 = JSON.parse(data);
                const current4day = stockData7.results[0].c;
                const open4day = stockData7.results[0].o;
                const url8 =
                  "https://api.polygon.io/v2/aggs/ticker/" +
                  stockArray[3] +
                  "/range/1/month/" +
                  startOfMonth.toISOString().slice(0, 10) +
                  "/" +
                  startOfMonth.toISOString().slice(0, 10) +
                  "?adjusted=true&sort=asc&limit=120&apiKey=" +
                  apiKey;
                https.get(url8, function (response) {
                  response.on("data", function (data) {
                    const stockData8 = JSON.parse(data);
                    const open4month = stockData8.results[0].o;

                    const percentChange3 = (
                      current3day / open3month -
                      1
                    ).toFixed(2);
                    const dollarChange3 = (current3day - open3month).toFixed(2);

                    const percentChange4 = (
                      current4day / open4month -
                      1
                    ).toFixed(2);
                    const dollarChange4 = (current4day - open4month).toFixed(2);

                    
            

                  thirdChange(current1day,
                        open1day,
                        open1month,
                        percentChange1,
                        dollarChange1,
                        current2day,
                        open2day,
                        open2month,
                        percentChange2,
                        dollarChange2,
                        current3day,
                        open3day,
                        open3month,
                        percentChange3,
                        dollarChange3,
                        current4day,
                        open4day,
                        open4month,
                        percentChange4,
                        dollarChange4) 
               
                        
               
                    
                  });
                });
              });
            });
          });
        });
      });
    });
    clearTimeout(secondCallTimeout)
    function thirdChange(    current1day,
      open1day,
      open1month,
      percentChange1,
      dollarChange1,
      current2day,
      open2day,
      open2month,
      percentChange2,
      dollarChange2,
      current3day,
      open3day,
      open3month,
      percentChange3,
      dollarChange3,
      current4day,
      open4day,
      open4month,
      percentChange4,
      dollarChange4) {
        const thirdCallTimeout = setTimeout(call3, 61000,     current1day,
          open1day,
          open1month,
          percentChange1,
          dollarChange1,
          current2day,
          open2day,
          open2month,
          percentChange2,
          dollarChange2,
          current3day,
          open3day,
          open3month,
          percentChange3,
          dollarChange3,
          current4day,
          open4day,
          open4month,
          percentChange4,
          dollarChange4);
  function call3(     current1day,
    open1day,
    open1month,
    percentChange1,
    dollarChange1,
    current2day,
    open2day,
    open2month,
    percentChange2,
    dollarChange2,
    current3day,
    open3day,
    open3month,
    percentChange3,
    dollarChange3,
    current4day,
    open4day,
    open4month,
    percentChange4,
    dollarChange4

  ) {
    
    console.log("Third call check");
    const url9 =
    "https://api.polygon.io/v2/aggs/ticker/" +
    stockArray[4] +
    "/range/1/day/" +
    yesterdayO +
    "/" +
    formattedDate +
    "?adjusted=true&sort=asc&limit=120&apiKey=" +
    apiKey;
    https.get(url9, function (response) {
      response.on("data", function (data) {
        const stockData9 = JSON.parse(data);
        const current5day = stockData9.results[0].c;
        const open5day = stockData9.results[0].o;
        const url10 =
          "https://api.polygon.io/v2/aggs/ticker/" +
          stockArray[4] +
          "/range/1/month/" +
          startOfMonth.toISOString().slice(0, 10) +
          "/" +
          startOfMonth.toISOString().slice(0, 10) +
          "?adjusted=true&sort=asc&limit=120&apiKey=" +
          apiKey;
        https.get(url10, function (response) {
          response.on("data", function (data) {
            const stockData10 = JSON.parse(data);
            const open5month = stockData10.results[0].o;

            const url11 =
            "https://api.polygon.io/v2/aggs/ticker/" +
            stockArray[5] +
            "/range/1/day/" +
            yesterdayO +
            "/" +
            formattedDate +
            "?adjusted=true&sort=asc&limit=120&apiKey=" +
            apiKey;
            https.get(url11, function (response) {
              response.on("data", function (data) {
                const stockData11 = JSON.parse(data);
                const current6day = stockData11.results[0].c;
                const open6day = stockData11.results[0].o;
                const url12 =
                  "https://api.polygon.io/v2/aggs/ticker/" +
                  stockArray[5] +
                  "/range/1/month/" +
                  startOfMonth.toISOString().slice(0, 10) +
                  "/" +
                  startOfMonth.toISOString().slice(0, 10) +
                  "?adjusted=true&sort=asc&limit=120&apiKey=" +
                  apiKey;
                https.get(url12, function (response) {
                  response.on("data", function (data) {
                    const stockData12 = JSON.parse(data);
                    const open6month = stockData12.results[0].o;

                    const percentChange5 = (
                      current5day / open5month -
                      1
                    ).toFixed(2);
                    const dollarChange5 = (current5day - open5month).toFixed(2);

                    const percentChange6 = (
                      current6day / open6month -
                      1
                    ).toFixed(2);
                    const dollarChange6 = (current6day - open6month).toFixed(2);

                    clearTimeout(thirdCallTimeout)
                    render(
                      current1day,
                      open1day,
                      open1month,
                      percentChange1,
                      dollarChange1,
                      current2day,
                      open2day,
                      open2month,
                      percentChange2,
                      dollarChange2,
                      current3day,
                      open3day,
                      open3month,
                      percentChange3,
                      dollarChange3,
                      current4day,
                      open4day,
                      open4month,
                      percentChange4,
                      dollarChange4,
                      current5day,
                      open5day,
                      open5month,
                      percentChange5,
                      dollarChange5,
                      current6day,
                      open6day,
                      open6month,
                      percentChange6,
                      dollarChange6
                    );
                  });
                });
              });
            });
          });
        });
      });
    });

  }
  }
    }





  function render(
    current1day,
    open1day,
    open1month,
    percentChange1,
    dollarChange1,
    current2day,
    open2day,
    open2month,
    percentChange2,
    dollarChange2,
    current3day,
    open3day,
    open3month,
    percentChange3,
    dollarChange3,
    current4day,
    open4day,
    open4month,
    percentChange4,
    dollarChange4,
    current5day,
    open5day,
    open5month,
    percentChange5,
    dollarChange5,
    current6day,
    open6day,
    open6month,
    percentChange6,
    dollarChange6
  ) {
    res.render("list.ejs", {
      data: {
        one: {
          current1dayH: current1day,
          open1dayH: open1day,
          open1monthH: open1month,
          percentChange1H: percentChange1,
          dollarChange1H: dollarChange1,
        },
        two: {
          current2dayH: current2day,
          open2dayH: open2day,
          open2monthH: open2month,
          percentChange2H: percentChange2,
          dollarChange2H: dollarChange2,
        },
        three: {
          current3dayH: current3day,
          open3dayH: open3day,
          open3monthH: open3month,
          percentChange3H: percentChange3,
          dollarChange3H: dollarChange3,
        },
        four: {
          current4dayH: current4day,
          open4dayH: open4day,
          open4monthH: open4month,
          percentChange4H: percentChange4,
          dollarChange4H: dollarChange4,
        },
        five: {
          current5dayH: current5day,
          open5dayH: open5day,
          open5monthH: open5month,
          percentChange5H: percentChange5,
          dollarChange5H: dollarChange5,
        },
        six: {
          current6dayH: current6day,
          open6dayH: open6day,
          open6monthH: open6month,
          percentChange6H: percentChange6,
          dollarChange6H: dollarChange6,
        }
      }
    });
  }
}})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
