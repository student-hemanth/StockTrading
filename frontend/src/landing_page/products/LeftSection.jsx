import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <img src={imageURL} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} className="ms-5">
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} className="me-4">
              <img src="googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;