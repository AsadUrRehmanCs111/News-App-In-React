import React, { Component } from "react";
import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"
export class News extends Component {
  static defaultProps = {
    country: "in",
    category:"general"
  }
  static propsType = {
    country: PropTypes.string,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state= {
        articles: [],
        loading:false,
        page:1,
        totalResults:0
    }
  }

  async componentDidMount(){
      console.log("componentDidCatch")
      let url =`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=fce39b08e4814954ae6388753aeef2f8&page=${this.state.page - 1}&pageSize=20`
      this.setState({
        loading:true
      })
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData)
      this.setState({
          articles: parseData.articles,
          totalResults: parseData.totalResults,
          loading:false
      })
  }
  prevPage= async() =>{
    let url =`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=fce39b08e4814954ae6388753aeef2f8&page=${this.state.page - 1}&pageSize=20`
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    this.setState({
      articles: parseData.articles,
      page:this.state.page - 1,
      loading:false
    })
  }
  nextPage = async() =>{
    if(this.state.page > 4){
      console.log("no")
    }
    else{
      let url =`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=fce39b08e4814954ae6388753aeef2f8&page=${this.state.page - 1}&pageSize=20`
      this.setState({
        loading:true
      })
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData)
      this.setState({
        page:this.state.page + 1,
        articles: parseData.articles,
        loading:false
      })
    }
  }
  render() {
      console.log("render")
    return (
      <div>
        <div className="container">
          <h1 className="my-4 text-center">Top Headlines</h1>
         {this.state.loading && <Spinner /> }
          <div className="row">
              {!this.state.loading && this.state.articles.map((item)=>{
                  return <div className="col-md-4 " key={item.url}>
                  <NewsItem
                    title={!item.title?"":item.title}
                    description={!item.description?"":item.description}
                    imageUrl={!item.urlToImage?"https://media.nbcsandiego.com/2021/11/MCRD.jpg?quality=85&strip=all&resize=1200%2C675":item.urlToImage}
                    newsUrl={item.url}
                    author = {item.author}
                    publishDate={item.publishedAt}
                    source = {item.source.name}
                  />
                </div>
              })}
            
          </div>
        </div>
        <div className="container py-3">
          <div className="d-flex justify-content-between">
            <button className="btn btn-dark" disabled={this.state.page<=1} onClick={this.prevPage}>&larr; Previous</button>
            <button className="btn btn-dark" disabled={this.state.page > 4} onClick={this.nextPage}>Next &rarr;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
