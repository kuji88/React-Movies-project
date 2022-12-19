import React from 'react'
import { Col } from 'react-bootstrap'
import Cardb from './Cards'
import Paginate from './Paginate'


const Movieslist = ({movies,pages,count}) => {
  return (
    <div>
    <Col sm='12' className='flex flex-wrap'>
    
       {movies.length >= 1 ? (movies.map((mov)=>
        <Cardb key={mov.id} mov={mov}/>
       ))  : <h1 className='text-center m-auto p-14'>There's no Movies</h1>}
        
        </Col>
        <Paginate pages={pages} count={count}/>
        </div>
  )
}


export default Movieslist