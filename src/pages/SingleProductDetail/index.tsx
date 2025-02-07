import React from 'react'
import SinglePorductDetailPage from '../../components/ProductDetail/SingleProductDetailPage.tsx/index.js'
import Tabs from '../../components/ProductDetail/tabs/index.js'
import MayAlsoLikedProducts from '../../components/ProductDetail/ProductsLiked/index.js'
import Newsletter from '../../components/layout/Footer/NewsLatter.js'

const SingleproductDetail = () => {
  return (
    <>
      <SinglePorductDetailPage />
      <Tabs />
      <MayAlsoLikedProducts />
      <Newsletter />
    </>
  )
}

export default SingleproductDetail