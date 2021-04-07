import React from 'react';
import { TotalCount } from "./totalCount";
import './home.scss';
import SimpleReactValidator from 'simple-react-validator';
export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loginObj: {
        email: 'anvesh@123',
        passWord: ''
      },
      loginObj2: {
        email: 'anvesh@123',
        passWord: '',
        FileList: ''
      }
    }
    //validation set function start
    this.validator = new SimpleReactValidator({
      element: message => <span className="error-message text-danger validNo fs14">{message}</span>,
      autoForceUpdate: this,
    });
  }



  componentDidMount() {
    // this.validator = new SimpleReactValidator();
  }


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let { loginObj } = this.state;

    this.setState({
      loginObj: {
        ...loginObj,
        [name]: value
      }
    }, () => console.log('set state login obj --->', this.state.loginObj));

  }


  handleFormSubmit = () => {
    if (this.validator.allValid()) {
      this.validator.hideMessages();
      alert('You submitted the form and stuff!');
    } else {
      console.log('!valid')
      this.validator.showMessages();
      this.forceUpdate();
    }
  }



  render() {
    let { loginObj } = this.state;
    return (
      <div className="container">
        <h2>Stacked form</h2>

        <div className="form-group">
          <label for="email">Email:</label>
          <input type="email" className="form-control" placeholder="Enter email" value={loginObj.email} name="email" onChange={this.handleInputChange} />

          {this.validator.message('Email', loginObj.email, 'required|email')}
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" name='passWord' value={loginObj.passWord} onChange={this.handleInputChange} />
          {this.validator.message('password', loginObj.passWord, 'required|min:5|max:10')}
        </div>

        <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
      </div>

    )
  }



}



