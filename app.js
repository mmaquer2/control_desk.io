
//on load update function 
window.onload = function(){
  this.time();
// this.test();
 this.weather();
  // this.stock_api();
   this.news_api();
   this.stock_news();
   this.five_day();

}

function test() {
        console.log('hello world')
        alert('test is working')
        document.getElementById('search-out').innerHTML = "test test test"
    }
function time() {

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
        
    document.getElementById("date_time").innerHTML = today;

 }

    const stock_news_url = ('https://api-v2.intrinio.com/companies/news?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')

    async function stock_news() {
        
        const response = await fetch(stock_news_url);
        const news_data = await response.json();

         
        console.log(news_data)

        var output = news_data.news[1].title +'<br>'+ news_data.news[1].summary +'<br>'+ news_data.news[1].publication_date +'<br>'+ news_data.news[1].url


        //output to front end 
        document.getElementById('stock_news').innerHTML = output 
    }

    //const watchlist = []
    //const alpha_key = ('YIF9NU7FLVJWG46Q');
    const url = ('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=YIF9NU7FLVJWG46Q');
    async function stock_api() {

        const response = await fetch(url);
        const stock_data = await response.json();  
        console.log(stock_data)

        var i = 0;
        var price = ''
      /*  for(i;i<stock_data.length;i++){
            price = stock_data.high[i]
            console.log(price)
        }
*/
      alert('hello world')

    }



    const news_key = ('a0797ceb9fc0435c9e7e691760ad4244')
    const news_url = ('https://newsapi.org/v2/top-headlines?country=us&apiKey=a0797ceb9fc0435c9e7e691760ad4244')
    async function news_api() {

        const response = await fetch(news_url);
        const news_data = await response.json();

        
        
        
      var post = news_data.articles[4].title + '<br>'+ news_data.articles[4].description + '<br>'+news_data.articles[4].publishedAt + '<br>'+ news_data.articles[4].source.name
      var string = ''
        for(var i = 0; i<news_data.length - 1;i++){
            
       string += news_data.articles[i].title + news_data.articles[i].description + news_data.articles[i].publishedAt + news_data.articles[i].source.name
                
         
         }
         console.log(string) 
         
         
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
            console.log(data.weather[0].main)
            //console.log(data.main.temp)
            //  console.log(data.main.humidity)
            //  console.log(data.weather[0].main)
             console.log(data.weather[0].description)
             console.log(data.weather[0].icon)
            // console.log(data.name)
        
         document.getElementById('today_weather').innerHTML =string
         document.getElementById('Weather_ticker').innerHTML = f_temp;  
         //VisualWeather_test(k_temp,desc) 
    
        }

        //five day weather forecast:
        const url3 = ('https://api.openweathermap.org/data/2.5/forecast?q=nashville&APPID=a488d31fefafdc561500bdfd1b695f5d')
        async function five_day() {
            const response = await fetch(url3);
            const display = await response.json();

            console.log(display)

        }
       

        //document.getElementById('five_day_weather').innerHTML = f_temp;
    
    
        function VisualWeather_test (temp) {
        
            if (temp < 300) {
           // document.getElementById('weather-icon').className = "fas fa-cloud fa-10x";
            document.getElementById('weather').style.backgroundColor = "lightgrey";
            
            }
            else if ( temp > 300) {
               document.getElementById('weather').style.backgroundColor = "skyblue";
              //  document.getElementById('weather-icon').className = "fas fa-sun fa-10x";
            }
            
            else {
               // document.getElementById('weather-icon').className = "fas fa-cloud fa-10x"
                document.getElementById('weather').style.backgroundColor = "grey";
            }
            
         }


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


    
/*
    
    


    //sports api 

    async function sports() {
        const sport_url = ('')

        const response = await fetch(sport_url);
        const sport_data = await response.json();

        console.log(sport_data);

    //reddit api on load launch



    }

    */

   

