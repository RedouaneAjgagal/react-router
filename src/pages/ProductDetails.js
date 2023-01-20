import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
    return (
        <div>
            {params.productId}
            <br />
            <Link to='..' relative='path'>back</Link>
        </div>
    )
}

export default ProductDetails