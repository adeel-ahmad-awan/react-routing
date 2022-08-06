import React from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";

function QuoteDetails() {
  const params = useParams();
  return (
    <React.Fragment>
      <h1>Quotes Details Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
}

export default QuoteDetails;
