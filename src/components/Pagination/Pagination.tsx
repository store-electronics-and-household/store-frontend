import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  itemsPerPage: number;
  items: string[] | JSX.Element[] | string;
}

const Items = ({ currentItems }: { currentItems: any }): any => {
  return currentItems.map((item: string | any[], index: any) => {
    if (item.length === 0) {
      return null;
    }
    const key = index;
    return <div key={key}>{item}</div>;
  });
};
export const PaginatedItems: React.FC<PaginationProps> = ({
  itemsPerPage,
  items,
}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event: { selected: number }): void => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel='-->'
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel='<--'
        renderOnZeroPageCount={null}
        containerClassName={'pagination'}
        activeClassName='pagination__active'
        pageLinkClassName='pagination__page-link'
        breakLinkClassName='pagination__break-link'
        nextLinkClassName='pagination__next-link'
        previousLinkClassName={'pagination__previous-link'}
        pageClassName='pagination__page-item'
        breakClassName='pagination__break-item'
        nextClassName='pagination__next-item'
        previousClassName='pagination__previous-item'
      />
    </>
  );
};
