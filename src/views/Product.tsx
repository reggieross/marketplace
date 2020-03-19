import React from 'react';
import Chrome from "../modules/chrome/Chrome";

export class Product extends React.Component<{}> {
  render() {
    return (
      <Chrome selectedId={'products'}>
        <div> Products </div>
      </Chrome>
    )
  }
}