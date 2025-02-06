import React from 'react'
import SinglePorductDetailPage from '../../components/DroductDetail/SingleProductDetailPage.tsx/index.js'
import Tabs from '../../components/DroductDetail/tabs/index.js'
import MayAlsoLikedProducts from '../../components/DroductDetail/ProductsLiked/index.js'
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