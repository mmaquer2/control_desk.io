
//on load update function 
window.onload = function(){
  this.time();
// this.test();
   // this.weather();
 //   this.stock_api();
 //   this.test_news_api();

}


    function test() {
        console.log('hello world')
        alert('test is working')
        
        document.getElementById('search-out').innerHTML = "test test test"
    }

    function time() {
        var d = new Date();
    document.getElementById("date_time").innerHTML = d;


    }

    const stock_news_url = ('https://api-v2.intrinio.com/companies/news?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')

    async function stock_news() {
        var string = ""
        const response = await fetch(stock_news_url);
        const news_data = await response.json();

        console.log(news_data)

        

        document.getElementById('stock_news_output').innerHTML =string 
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

        var string = ""
        var i = 0;
        var titles = ""
        var desc = ""
        
       string = news_data.articles[1].title + news_data.articles[1].description + news_data.articles[1].publishedAt + news_data.articles[1].source.name
        
        /*for(i; i<news_data.articles.length;i++){
                titles = news_data.articles[i].title;
                desc = news_data.articles[i].description;
                console.log(titles,desc)
            
         }
         */
            document.getElementById('news_output').innerHTML =string   
                //string ='<div class="card"> <div><span class=""> City: '+data.name+'</span></div><div class=""></div><div class="col-xs-5"> Currently is: '+f_temp+' F </div><div>'+data.main.humidity+' % Humidity </div> <div> '+data.weather[0].description+'</div> </div><br></br>';

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
            
            string ='<div class="card"> <div><span class=""> City: '+data.name+'</span></div><div class=""></div><div class="col-xs-5"> Currently is: '+f_temp+' F </div><div>'+data.main.humidity+' % Humidity </div> <div> '+data.weather[0].description+'</div> </div><br></br>';
            console.log(data.weather[0].main)
            //console.log(data.main.temp)
            //  console.log(data.main.humidity)
            //  console.log(data.weather[0].main)
             console.log(data.weather[0].description)
             console.log(data.weather[0].icon)
            // console.log(data.name)
        
         document.getElementById('weather_output').innerHTML =string  
         VisualWeather_test(k_temp,desc) 
    
        }
    
    
        function VisualWeather_test (temp,des) {
        
            if (temp < 300) {
            document.getElementById('weather-icon').className = "fas fa-cloud fa-10x"
            document.getElementById('weather').style.backgroundColor = "lightgrey";
            
            }
            else if ( temp > 300) {
                document.getElementById('weather').style.backgroundColor = "skyblue";
                document.getElementById('weather-icon').className = "fas fa-sun fa-10x"
            }
            
            else {
                document.getElementById('weather-icon').className = "fas fa-cloud fa-10x"
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

   

