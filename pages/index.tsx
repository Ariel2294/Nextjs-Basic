import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProducts(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
