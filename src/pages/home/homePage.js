import React from 'react';
// import { TotalCount } from "./totalCount";
import './home.scss';
import { UserForm, UserList } from "../../component";
import axios from 'axios';
import { ThemeContext } from "../../sevices/themeContext";


import Store,{COUNTER_INCREMENT,COUNTER_DECREMENT} from '../../redux';


export class Home extends React.Component {

  static contextType = ThemeContext;


  constructor(props) {
    super(props);

    this.state = {
      userList: []
    }

  }



  componentDidMount() {
    // this.validator = new SimpleReactValidator();
    // Make a request for a user with a given ID
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data, status }) => {
    //   // handle success
    //   if (status === 200) {
    //     this.setState({ userList: data })
    //   }

    // }).catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })

  }



  handleSetUserList = (data) => {
    console.log('home ---->', data)
    this.state.userList.push(data);

    this.setState({ userList: this.state.userList })

  }

  increment = () => {


  }

  render() {
    let { userList } = this.state;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 mb-4">
          {/* <button className="btn btn-primary btn-sm mt-2"  onClick={this.increment} >Increment</button>
                      <button className="btn btn-danger btn-sm mt-2 ml-2"  onClick={this.decrement} >Decrement</button>
            <h4>theme:{this.context.theme}</h4>
            <button type="button" class="btn btn-primary" onClick={()=>this.context.click.themeChange('primary')}>Primary</button>
            <button type="button" class="btn btn-secondary" onClick={()=>this.context.click.themeChange('Secondary')}>Secondary</button>
            <button type="button" class="btn btn-success" onClick={()=>this.context.click.themeChange('Success')}>Success</button>
            <hr></hr>
            <h4>language:{this.context.language}</h4>
            <button type="button" class="btn btn-primary" onClick={()=>this.context.click.languagechange('EN')}>EN</button>
            <button type="button" class="btn btn-secondary" onClick={()=>this.context.click.languagechange('MY')}>MY</button>
            <button type="button" class="btn btn-success" onClick={()=>this.context.click.languagechange('TN')}>TN</button> */}
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



