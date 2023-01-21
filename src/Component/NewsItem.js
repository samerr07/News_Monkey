import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span class="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://images.indianexpress.com/2021/08/OnePlus-foldable-phone.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small class="text-muted">
              By {!author ? "Unknown" : author} on {date}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary card-link"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
