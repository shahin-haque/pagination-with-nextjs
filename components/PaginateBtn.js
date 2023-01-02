import React from 'react';

const PaginateBtn = ({ PageBtn, setProductPage }) => {
  let element = [];
  for (let index = 1; index <= PageBtn; index++) {
    element.push(index);
  }
  return (
    <div className="btn-container">
      {element.map((btn) => (
        <button onClick={() => setProductPage(btn)} key={btn}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default PaginateBtn;
