import React from 'react';

//renders pagination buttons tonavigate between pages
const Pagination = ({ prev, next, onPrevious, onNext }) => {
  return (
    <div className="pagination">
      {prev && <button onClick={onPrevious}>Previous</button>}
      {next && <button onClick={onNext}>Next</button>}
    </div>
  );
};

export default Pagination;