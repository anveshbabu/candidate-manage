import React from 'react';
// import { TotalCount } from "./totalCount";
import './home.scss';
import { UserForm, UserList } from "../../component";
import axios from 'axios';
export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userList: []
    }

  }



  componentDidMount() {
    // this.validator = new SimpleReactValidator();
    // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data, status }) => {
      // handle success
      if (status === 200) {
        this.setState({ userList: data })
      }

    }).catch(function (error) {
      // handle error
      console.log(error);
    })

  }



  handleSetUserList = (data) => {
    console.log('home ---->', data)
    this.state.userList.push(data);

    this.setState({ userList: this.state.userList })

  }



  render() {
    let { userList } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <UserForm setUserList={this.handleSetUserList} />
          </div>
          <div className="col-12 mb-4">
            <UserList userList={userList} />
          </div>
        </div>



      </div>
    )
  }



}



