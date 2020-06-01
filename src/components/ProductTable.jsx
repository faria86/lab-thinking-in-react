import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product, index, originalArray) => {
          return (
            <ProductRow
            // key={product.name}
            // name={product.name}
            // category={product.category}
            // price={product.price}
            // stocked={product.stocked}
            // Avoiding accessing each prop individualy
            {...product}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;