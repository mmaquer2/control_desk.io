


//on load update function 
window.onload = function(){
  this.date();
  this.weather();
  this.initMap();
  this.stock_api();
   this.news_api();
   this.stock_news();
   this.five_day();
   this.stock_test();
   this.index();

}

function test() {
        console.log('hello world')
        alert('test is working')
        document.getElementById('search-out').innerHTML = "test test test"
    }
function date() {

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var today = dd + '/' + mm + '/' + yyyy;
        
document.getElementById("date").innerHTML = today;

 }


 function time() {

    
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        var clock = h + ":" + m + ":" + s;
      
        document.getElementById("time").innerHTML = clock;

        
      



 }


    

    async function stock_news() {
        const stock_news_url = ('https://api-v2.intrinio.com/companies/news?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')    
        const response = await fetch(stock_news_url);
        const news_data = await response.json();

        var output = ""
        let chars = news_data.news;
            for(let i =0; i < chars.length;i++){
            //console.log(chars[i])
        //    console.log(chars[i].title)
          //  console.log(chars[i].summary)
          //  console.log(chars[i].publication_date)
           // console.log(chars[i].url)

            output += '<h5>'+ chars[i].title+ '</h5>'+ chars[i].summary + '<br>' +'<a href="'+  chars[i].url + '">' + 'Link' +'</a><hr></hr>'

            

            }
    
        document.getElementById('stock_news').innerHTML = output; 
    }

    
    //const alpha_key = ('YIF9NU7FLVJWG46Q');
    async function stock_api() {
        const url = ('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=YIF9NU7FLVJWG46Q');
        const response = await fetch(url);
        const alpha_data = await response.json();  
        //console.log(alpha_data)
    }
    

    
     function stock_test(){
        
        //var watch = ['MSFT', 'APPL', 'INTC']
        
       // const url = ('https://api.tiingo.com/tiingo/daily/INTC/prices?token=d46085603f679fecf81ab67e8cb5582004659857')
        
       
    


        }

        


    

    //indicies search
    //how to automate this for each url

    async function index() {
            //Indexs of the USA Stock market DJI, SPX, NDX
            const url = ('https://api-v2.intrinio.com/indices/stock_market/$DJI/data_point/level/text?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')
            const index = await fetch(url);
            const dji = await index.json();

            const spx_url = ('https://api-v2.intrinio.com/indices/stock_market/$SPX/data_point/level/text?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')
            const spx_data = await fetch(spx_url);
            const spx = await spx_data.json();

            const ndx_url = ('https://api-v2.intrinio.com/indices/stock_market/$NDX/data_point/level/text?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')
            const ndx_data = await fetch(ndx_url);
            const ndx = await ndx_data.json();

            //const bond_url = ('https://api-v2.intrinio.com/indices/stock_market/$VBMDFX/data_point/level/text?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')
            //const bond_data = await fetch(bond_url);
            //const bond = await bond_data.json();


            //console.log(bond)


            
            //console.log(dji)
            //console.log(spx)

            //% change of stock or index price 

            document.getElementById('SPX').innerHTML = spx;
            document.getElementById('NDX').innerHTML = ndx;
            document.getElementById('DJI').innerHTML = dji;

            
            

    }


        //have news sources written in tag tags



    const news_key = ('a0797ceb9fc0435c9e7e691760ad4244')
    const news_url = ('https://newsapi.org/v2/top-headlines?country=us&apiKey=a0797ceb9fc0435c9e7e691760ad4244')
    async function news_api() {

        const response = await fetch(news_url);
        const news_data = await response.json();


        var post = ""
        let chars = news_data.articles;
            for(let i =0; i < chars.length;i++){
            //console.log(chars[i])
            //console.log(chars[i].title)
            //console.log(chars[i].description)

            post += '<h5>'+ chars[i].title+ '</h5>'+ chars[i].description + '<br>' +'<a href="'+  chars[i].source + '">' + 'Link' +'</a><hr></hr>'

            }
          
            document.getElementById('news_output').innerHTML = post  

             }

         
    async function weather() {

            const start = ('https://api.openweathermap.org/data/2.5/weather?q=')
            const id =('&APPID=a488d31fefafdc561500bdfd1b695f5d')
            const url =(start + "nashville" + id)
          
            const response = await fetch(url);
            const data = await response.json();
            var string = "";
            var k_temp = data.main.temp;
            var desc = data.weather[0].description;
            
            //convert kelvin to degrees F
            f_temp = ((k_temp - 273.15) * 1.8 + 32).toFixed(1);
            
            string ='<div> '+data.name+' <br> Currently is: '+f_temp+' F </<div><div>'+data.main.humidity+' % Humidity </div> <div> '+data.weather[0].description+'</div>';
            //console.log(data.weather[0].main)
            //console.log(data.main.temp)
            // console.log(data.main.humidity)
            // console.log(data.weather[0].main)
            // console.log(data.weather[0].description)
            // console.log(data.weather[0].icon)
            // console.log(data.name)
        
         document.getElementById('today_weather').innerHTML =string
         document.getElementById('Weather_ticker').innerHTML = f_temp + " F";  
         VisualWeather_test(k_temp) 
    
        }

        //five day weather forecast:
        const url3 = ('https://api.openweathermap.org/data/2.5/forecast?q=nashville&APPID=a488d31fefafdc561500bdfd1b695f5d')
        async function five_day() {
            const response = await fetch(url3);
            const display = await response.json();


          //console.log(display)
         
          var k_temp = display.list[0].main.temp_max
         f_temp = ((k_temp - 273.15) * 1.8 + 32).toFixed(1);

           var wthr = display.list[0].weather[0].main
           var desc = display.list[0].weather[0].description
           var time = display.list[0].dt_txt

            var tmrw1 = (time + '<br>' + f_temp +' , '+wthr + ', ' + desc)

            
           var wthr2 = display.list[4].weather[0].main
           var desc2 = display.list[4].weather[0].description
           var time2 = display.list[4].dt_txt
           k_temp2 = display.list[4].main.temp_max
        f_temp2 = ((k_temp2 - 273.15) * 1.8 + 32).toFixed(1);

           var wthr3 = display.list[8].weather[0].main
           var desc3 = display.list[8].weather[0].description
           var time3 = display.list[8].dt_txt
           k_temp3 = display.list[8].main.temp_max
        f_temp3 = ((k_temp3 - 273.15) * 1.8 + 32).toFixed(1);

           var wthr4 = display.list[12].weather[0].main
           var desc4 = display.list[12].weather[0].description
           var time4 = display.list[12].dt_txt
           k_temp4 = display.list[12].main.temp_max
        f_temp4 = ((k_temp4 - 273.15) * 1.8 + 32).toFixed(1);

           var wthr5 = display.list[18].weather[0].main
           var desc5 = display.list[18].weather[0].description
           var time5 = display.list[18].dt_txt
           k_temp5 = display.list[0].main.temp_max
        f_temp5 = ((k_temp5 - 273.15) * 1.8 + 32).toFixed(1);

            var tmrw2 = (time2 + '<br>' + f_temp2 +' , '+wthr2 + ', ' + desc2)

            var tmrw3 = (time3 + '<br>' + f_temp3 +' , '+wthr3 + ', ' + desc3)

            var tmrw4 = (time4 + '<br>' + f_temp4 +' , '+wthr4 + ', ' + desc4)

            var tmrw5 = (time5 + '<br>' + f_temp5 +' , '+wthr5 + ', ' + desc5)
            


            document.getElementById('tmrw1').innerHTML = tmrw1;
            document.getElementById('tmrw2').innerHTML = tmrw2;
            document.getElementById('tmrw3').innerHTML = tmrw3;
            document.getElementById('tmrw4').innerHTML = tmrw4;
            document.getElementById('tmrw5').innerHTML = tmrw5;

        }
       

        
    
    
        function VisualWeather_test (temp) {
        
            if (temp < 300) {
            document.getElementById('weather-icon').className = "fas fa-cloud fa-5x";
           // document.getElementById('weather').style.backgroundColor = "lightgrey";
            
            }
            else if ( temp > 300) {
             //  document.getElementById('weather').style.backgroundColor = "skyblue";
                document.getElementById('weather-icon').className = "fas fa-sun fa-5x";
            }
            
            else {
                document.getElementById('weather-icon').className = "fas fa-cloud fa-5x"
               // document.getElementById('weather').style.backgroundColor = "grey";
            }
            
         }



         function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 9,
              center: {lat: 36.1627, lng: -86.7816}
            });
    
            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);
          }



            //api tests in progress
         /*


         //wolfram_alpha api connection
        
         //24KJW8-K57P224TRW
        // const wolf_key = ('24KJW8-K57P224TRW')
          //  const wolf_url = ('')
         function wolf() {

            var query = ''
           query = document.getElementById('wolf_search').innerHTML;
    
           // const response = await fetch(wolf_url);
           // const calc_data = await response.json();
    
          //  console.log(calc_data);
           
           
            alert(query)
    
    
        }


    

    
    


    //sports api 

    async function sports() {
        const sport_url = ('')

        const response = await fetch(sport_url);
        const sport_data = await response.json();

        console.log(sport_data);

    //reddit api on load launch



    }

    */

   

