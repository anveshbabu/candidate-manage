import React from 'react';
import { ThemeContext } from "../../sevices/themeContext";

export class Profile extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);

    this.state = {
    }

  }




  componentDidMount() {


  }




  render() {
    return (
      <div>
     <h4>theme:{this.context.theme}</h4>
        <h4>Profile page</h4>
      </div>

    )
  }



}



