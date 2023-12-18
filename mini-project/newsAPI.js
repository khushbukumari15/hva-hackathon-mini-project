const button = document.getElementById('search-icon')
const search = document.getElementById('search')
const go = document.getElementById('go')
const image = document.querySelectorAll('.imageTag')
const newsTitle = document.querySelectorAll('.title')
const newsdescription = document.querySelectorAll('.description')
const newsUrl = document.getElementsByTagName('a')

const apiKey = '5ecec9dee91d44ed9ca95720b7ec8b31'
// const defaulturl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`

go.addEventListener('click', async ()=> {
    const value = search.value
    const url = `https://newsapi.org/v2/everything?q=${value}&apiKey=${apiKey}`
    const newsData = await fetch(url)
    const news = await newsData.json()
    console.log(news)

    let count = 0;
    for (let i=0; i<news.articles.length; i++){
        // console.log(news.articles[i])
        image[i].src=news.articles[i].urlToImage
        newsTitle[i].innerHTML = news.articles[i].title
        newsdescription[i].innerHTML = news.articles[i].description
        newsUrl[i].href = news.articles[i].url

        count++
        if(count === 9){
            break;
        }
    }
})