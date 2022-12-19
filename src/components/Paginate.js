import React from 'react'
import ReactPaginate from 'react-paginate'

const Paginate = ({pages,count}) => {
    const handlePageClick=(data)=>{
      pages(data.selected + 1)
    }
    const pageCount=500
  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={count}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-center p-3"}
        pageClassName={"page-item"}
        nextClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  )
}

export default Paginate