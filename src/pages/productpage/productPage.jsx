import React, { useContext } from 'react'
import Card from '../../componentns/card/productCard'
import { Context } from '../../App'
import Raw from './raw'
import { useSelector } from 'react-redux'
import { shallowEqual } from 'react-redux'


const ProductPage = () => {
     const { isTable, setIsTable } = useContext(Context)

     const products = useSelector(store => store.products.value, shallowEqual)
     if (isTable) {
          return (
               <>
                    <table>
                         <thead>
                              <tr><th>Id</th><th>Name</th><th>Price</th><th>Art</th><th>URL</th></tr></thead>
                         <tbody>
                              {products.map(({ id, name, price, art, url, addFavorites }, index) => <Raw key={index} id={id} name={name} art={art} price={price} url={url} />)}
                         </tbody></table>
                    <button onClick={() => { setIsTable(prev => !prev) }}>Return to Cards format</button>
               </>
          )

     }
     else {

          return (
               <>
                    <button onClick={() => { setIsTable(prev => !prev) }}>Show table format</button>
                    
                    {products.map(({ id, name, price, art, url, addFavorites }, index) => <Card key={index} id={id} name={name} price={price} art={art} url={url} fill={addFavorites === true ? '#FFFF00' : '#fff'} index={index} products={products} ></Card>)}

               </>
          )
     }

}
export default ProductPage
