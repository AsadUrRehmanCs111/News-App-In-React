import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,publishDate,source } = this.props;
    return (
      <div>
        <div className="card my-2">
          <img src={imageUrl} className="card-img-top" alt="Load Issue" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className=" top-0  badge bg-dark">{source}</span>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By Author: {!author?"Unknown":author} <br/>Date: {new Date(publishDate).toDateString()}</small></p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read Full News
            </a>
           
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
