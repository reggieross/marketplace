import React from 'react';
import Chrome from "../modules/chrome/Chrome";
import {Row} from "@rbross07/component-lib";

export class FourOhFour extends React.Component<{}> {
  render() {
    return (
      <Chrome selectedId={'products'}>
        <Row colSpan={12}> <div> It's a trap </div></Row>
        <Row colSpan={12}><div>Sorry this page doesn't exist </div> </Row>
      </Chrome>
    )
  }
}