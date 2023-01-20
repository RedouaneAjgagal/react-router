import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'p-1', title: 'Tv' },
  { id: 'p-2', title: 'Sneakers' },
  { id: 'p-3', title: 'Desktop' }
]

const Products = () => {
  return (
    <div>
      <h1>Products Page Is Here!</h1>
      <ul>
        {products.map(item => <li key={item.id}><Link to={item.id}>{item.title}</Link></li>)}
      </ul>
    </div>
  )
}

export default Products