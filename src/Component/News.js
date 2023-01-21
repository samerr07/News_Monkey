import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // articles = [
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Ancient eel migration mystery unravelled",
  //   "description": "Eels are tracked to the Sargasso Sea on an epic migration, helping in their conservation.",
  //   "url": "http://www.bbc.co.uk/news/science-environment-63259738",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1124F/production/_91532207_thinkstockphotos-508815983.jpg",
  //   "publishedAt": "2022-10-15T03:07:21.5889341Z",
  //   "content": "Scientists have unravelled a mystery surrounding one of nature's most incredible journeys.\r\nEvery year, eels leave European rivers to travel in an epic migration to the Sargasso Sea in the North Atla… [+2904 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Slovakia LGBT attack: Thousands gather at vigil outside Bratislava bar",
  //   "description": "Thousands gathered in the Slovakian capital to remember two men killed in a suspected hate crime.",
  //   "url": "http://www.bbc.co.uk/news/world-europe-63267451",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10776/production/_127164476_gettyimages-1243965292.jpg",
  //   "publishedAt": "2022-10-15T03:07:19.1832826Z",
  //   "content": "Thousands of people gathered at a vigil in Slovakia on Friday to commemorate two people killed outside a gay bar. \r\nThe men were shot dead in the capital Bratislava on Wednesday, in a suspected hate … [+2211 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Nigerians escape massive floods on top of cars",
  //   "description": "Over one million people have left their homes after widespread flooding hits Nigeria.",
  //   "url": "http://www.bbc.co.uk/news/world-africa-63267440",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/160E/production/_127164650_p0d74l1z.jpg",
  //   "publishedAt": "2022-10-15T01:07:14.0739628Z",
  //   "content": "Around 90,000 Nigerian homes are submerged as a result of flooding in 27 of the country's 36 states.\r\nThe floods have killed around 500 people and 1.4m are displaced, according to authorities. \r\nMatt… [+160 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Turkish mine explosion kills 25 and leaves dozens trapped",
  //   "description": "Emergency workers are desperately searching for those still trapped hundreds of metres below ground.",
  //   "url": "http://www.bbc.co.uk/news/world-europe-63261746",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/151AE/production/_127164468_mediaitem127164467.jpg",
  //   "publishedAt": "2022-10-15T00:22:23.699559Z",
  //   "content": "At least 25 people have died and dozens remain trapped underground after an explosion in a coal mine in northern Turkey's Bartin province.\r\nAround 110 people were working in the mine at the time of t… [+1759 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Amanda Todd: Dutchman sentenced for fatal cyber-stalking",
  //   "description": "He showed no remorse in court as he learned his fate for tormenting the girl whose ordeal shocked Canada.",
  //   "url": "http://www.bbc.co.uk/news/world-us-canada-63218797",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0600/production/_127163510_gettyimages-154223922.jpg",
  //   "publishedAt": "2022-10-15T00:22:21.7706285Z",
  //   "content": "A Dutchman convicted of sexually extorting a teenage Canadian girl who later took her own life has been sentenced to 13 years in prison.\r\nAydin Coban, 44, will serve his sentence in the Netherlands, … [+2903 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Bakhmut: The Ukrainian city where Russia is still advancing",
  //   "description": "In the city of Bakhmut in the east, Russia continues to seize ground as it loses it elsewhere.",
  //   "url": "http://www.bbc.co.uk/news/world-europe-63261600",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/182D2/production/_127162099_groundedrocketinbakhmut.jpg",
  //   "publishedAt": "2022-10-15T00:07:24.0428903Z",
  //   "content": "Almost eight months on from Russia's invasion of Ukraine, its forces are struggling while Ukraine has advanced and regained territory in the east and south. In the eastern Donbas region, the city of … [+4127 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Iran: How we are uncovering the protests and crackdowns",
  //   "description": "BBC journalists are verifying videos that are crucial to establishing what is happening on the ground.",
  //   "url": "http://www.bbc.co.uk/news/world-middle-east-63264159",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/923C/production/_127163473_p0d71z71.jpg",
  //   "publishedAt": "2022-10-14T23:52:22.0745759Z",
  //   "content": "A woman dragged away by female special forces. Security forces shooting from a pick-up truck. Detained protesters being bussed away. Men ducking for cover from gunfire. \r\nThese are some of the shocki… [+6800 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Musk says SpaceX cannot keep funding Ukraine Starlink",
  //   "description": "The tycoon recently asked the US to fund the satellite service instead of him, according to reports.",
  //   "url": "http://www.bbc.co.uk/news/world-us-canada-63266142",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10B5E/production/_127164486_ce2dbda43e827863c193095686397c92724e0f8b0_491_5000_28141000x563.jpg",
  //   "publishedAt": "2022-10-14T23:37:17.7919943Z",
  //   "content": "Elon Musk has said his rocket firm SpaceX cannot continue indefinitely paying for Ukraine's Starlink internet service in his latest spat with Kyiv. \r\nIn February, Mr Musk, the world's richest man, ac… [+2721 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Tory MPs turn on Liz Truss after turbulent day",
  //   "description": "Many MPs are unhappy with the prime minister after she fired her chancellor and announced a second U-turn.",
  //   "url": "http://www.bbc.co.uk/news/uk-politics-63263319",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/35A8/production/_127163731_4273b0750d16b270b84adeec9e3b772ab9b2d3610_0_4191_27941000x667.jpg",
  //   "publishedAt": "2022-10-14T20:22:21.0485537Z",
  //   "content": "Media caption, WATCH: Watch Liz Truss answer questions on how she can stay on as PM now. I can change that if you like\r\nLiz Truss is facing a backlash from Conservative MPs after firing her chancello… [+5432 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "bbc-news",
  //   "name": "BBC News"
  //   },
  //   "author": "BBC News",
  //   "title": "Robbie Coltrane: Harry Potter actor dies aged 72",
  //   "description": "Actor Robbie Coltrane, who played Hagrid in the Harry Potter films, dies aged 72.",
  //   "url": "http://www.bbc.co.uk/news/entertainment-arts-63261204",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BE56/production/_127162784_coltranecrop.jpg",
  //   "publishedAt": "2022-10-14T17:07:23.3137576Z",
  //   "content": "Actor Robbie Coltrane, who played Hagrid in the Harry Potter films and for starring in ITV detective drama Cracker, has died at 72.\r\n\"Robbie will probably be best remembered for decades to come as Ha… [+428 chars]"
  //   }
  //   ]

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=86cbc37f87754046a6a07cb06f9e5a0f&page=${this.state.page}&pageSize=${props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log("Parsed data");
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    // document.title = `${props.category} - NewsMonkey`;
    updateNews();
  }, []);

  const handlePrevClick = async () => {
    // console.log("Previous")
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=86cbc37f87754046a6a07cb06f9e5a0f&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log("Parsed data");
    // this.setState({
    //   page : this.state.page-1,
    //   articles: parsedData.articles,
    //   loading: false
    // })

    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    //   console.log("Next");
    //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {

    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=86cbc37f87754046a6a07cb06f9e5a0f&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log("Parsed data");
    //   this.setState({
    //     page : this.state.page+1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    // }

    setPage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=86cbc37f87754046a6a07cb06f9e5a0f&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      {/* <div className="container my-4"> */}
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      {loading && <Spinner />}

      {/* //React infinite scroll google kro vhi se codesanbox se cpy h 
            iske liye vhi npm ka package diya hoga usko installkro
            https://www.npmjs.com/package/react-infinite-scroll-component */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
            {articles.map((element) => {
              return (
                <div className="col md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &laquo; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
