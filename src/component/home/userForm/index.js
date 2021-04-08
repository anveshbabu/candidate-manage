import React from 'react';
// import { TotalCount } from "./totalCount";
import SimpleReactValidator from 'simple-react-validator';
import DatePicker from "react-datepicker";
export class UserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userObj: {
        name: '',
        dob: '',
        gender: '',
        pNum: ''
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
    let { userObj } = this.state;

    this.setState({
      userObj: {
        ...userObj,
        [name]: value
      }
    }, () => console.log('set state login obj --->', this.state.userObj));

  }


  handleFormSubmit = () => {
    let { userObj } = this.state;
    let { setUserList } = this.props;

    if (this.validator.allValid()) {
      this.validator.hideMessages();
      console.log(userObj);
      setUserList(userObj);


      this.setState({
        userObj: {
          name: '',
          dob: '',
          gender: '',
          pNum: ''
        }
      })
    } else {
      console.log('!valid')
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  handleDob = (date) => {
    let { userObj } = this.state;
    this.setState({
      userObj: {
        ...userObj,
        dob: date
      }
    });

  }

  render() {
    let { userObj } = this.state;
    return (
      <div>
        <h2>User form</h2>
        <div className="form-group">
          <label >Name:</label>
          <input type="text" className="form-control" placeholder="Enter name" value={userObj.name} name="name" onChange={this.handleInputChange} />
          {this.validator.message('name', userObj.name, 'required')}
        </div>
        <div className="form-group">
          <label >DOB:</label>
          <DatePicker selected={userObj.dob} className="form-control" onChange={this.handleDob} />
          {/* <input type="text" className="form-control" placeholder="Enter DOB" value={userObj.dob} name="dob" onChange={this.handleInputChange} /> */}
          {this.validator.message('dob', userObj.dob, 'required')}
        </div>
        <div className="form-group">
          <label >Gender:</label>
          <select className="custom-select" value={userObj.gender} name="gender" onChange={this.handleInputChange}>
            <option selected>Open this select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {this.validator.message('Gender', userObj.gender, 'required')}
        </div>
        <div className="form-group">
          <label >Phone number:</label>
          <input type="text" className="form-control" placeholder="Enter Phone number" value={userObj.pNum} name="pNum" onChange={this.handleInputChange} />
          {this.validator.message('Phone number', userObj.pNum, 'required')}
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
      </div>

    )
  }



}



