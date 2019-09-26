// sources for of APIs
    //-Api news (headlines)
    //alpha vantage (stocks)
    //espn (sports)
    //wolfram alpha api
    function test() {
        console.log('hello world')
        alert('test is working')
        
        document.getElementById('search-out').innerHTML = "test test test"
    }

    const alpha_key = ('YIF9NU7FLVJWG46Q');
    const url = ('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=YIF9NU7FLVJWG46Q');
    async function test_data() {

        const response =await fetch(url);
        const data = await response.json();


        console.log(data)

    }


    const news_key = ('a0797ceb9fc0435c9e7e691760ad4244')
    const news_url = ('https://newsapi.org/v2/top-headlines?country=us&apiKey=a0797ceb9fc0435c9e7e691760ad4244')
    async function test_news_api () {

        const response = await fetch(news_url);
        const news_data = await response.json();

        console.log (news_data)
    }



    //wolfram_alpha api connection
    //24KJW8-K57P224TRW
/*
    async function wolf() {
        const wolf_key = ('24KJW8-K57P224TRW')
        const wolf_url = ('')

        const response = await fetch(wolf_url);
        const calc_data = await response.json();

        console.log(calc_data);
        alert('hello world')

    }


    //sports api 

    async function sports() {
        const sport_url = ('')

        const response = await fetch(sport_url);
        const sport_data = await response.json();

        console.log(sport_data);



    }

    */