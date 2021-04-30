import React from 'react';
// import { TotalCount } from "./totalCount";
import './home.scss';
import { UserForm, UserList } from "../../component";
import axios from 'axios';
import { ThemeContext } from "../../sevices/themeContext";

import { api } from "../../sevices/api";
import Store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../../redux';


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
    let query = `{
    chat_user_anv_test (where: { _and: [{ id:{ _neq: "60782350da50bf470cbca72b" }}] }) {
      id
      status
      email
      name
      createdAt
    }
  
}`
let variables,operationName;
let body=JSON.stringify({
  query
 })

    localStorage.setItem('AuthToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlzVmFsaWRQYXNzd29yZCI6dHJ1ZSwidXNlcl9pZCI6OCwiZW1haWxfaWQiOiJtaWtlQGtiemJhbmsuY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkVkVHZDhrRTRHQVRQdFNZNjdCTnVSdWt3bVV5MWhGMmdQMVRUSm5zYVZPTTZxb256Q0E0TmEiLCJtZXRhIjpudWxsLCJwYWdlcyI6W3siZ3JvdXBpZCI6MjMsImdyb3VwX25hbWUiOiJEYXNoYm9hcmQiLCJwYXRoIjoiL21hc3RlciIsInBhZ2VfbmFtZSI6Ik92ZXJ2aWV3IiwicGFnZV9wYXRoIjoiL2RlZXBzZWUvbWFzdGVyP2ZpbHRlcj1be1wibmFtZVwiOlwidGltZV9wZXJpb2RcIixcInZhbHVlXCI6XCJ0aGlzIG1vbnRoXCJ9LHtcIm5hbWVcIjpcImJyYW5jaFwiLFwidmFsdWVcIjpcIkFsbFwifV0iLCJwYWdlaWQiOjQxfSx7Imdyb3VwaWQiOjIzLCJncm91cF9uYW1lIjoiRGFzaGJvYXJkIiwicGF0aCI6Ii9tYXN0ZXIiLCJwYWdlX25hbWUiOiJBY3F1aXNpdGlvbiIsInBhZ2VfcGF0aCI6Ii9kZWVwc2VlL2tienBheS1hY3F1aXNpdGlvbi1tYXN0ZXI_ZmlsdGVyPVt7XCJuYW1lXCI6XCJ0aW1lX3BlcmlvZFwiLFwidmFsdWVcIjpcIm1vbnRoXCJ9LHtcIm5hbWVcIjpcImJyYW5jaFwiLFwidmFsdWVcIjpcIkFsbFwifV0iLCJwYWdlaWQiOjQyfSx7Imdyb3VwaWQiOjIzLCJncm91cF9uYW1lIjoiRGFzaGJvYXJkIiwicGF0aCI6Ii9tYXN0ZXIiLCJwYWdlX25hbWUiOiJFbmdhZ2VtZW50IiwicGFnZV9wYXRoIjoiL2RlZXBzZWUva2J6cGF5LWVuZ2FnZW1lbnQtbWFzdGVyP2ZpbHRlcj1be1wibmFtZVwiOlwidGltZV9wZXJpb2RcIixcInZhbHVlXCI6XCJ0aGlzIG1vbnRoXCJ9LHtcIm5hbWVcIjpcImJyYW5jaFwiLFwidmFsdWVcIjpcIkFsbFwifV0iLCJwYWdlaWQiOjQzfSx7Imdyb3VwaWQiOjIzLCJncm91cF9uYW1lIjoiRGFzaGJvYXJkIiwicGF0aCI6Ii9tYXN0ZXIiLCJwYWdlX25hbWUiOiJFbmdhZ2VtZW50IE92ZXJ2aWV3IiwicGFnZV9wYXRoIjoiL2RlZXBzZWUva2J6cGF5LWVuZ2FnZW1lbnQtb3ZlcnZpZXctbWFzdGVyP2ZpbHRlcj1be1wibmFtZVwiOlwidGltZV9wZXJpb2RcIixcInZhbHVlXCI6XCJtb250aFwifSx7XCJuYW1lXCI6XCJicmFuY2hcIixcInZhbHVlXCI6XCJBbGxcIn1dIiwicGFnZWlkIjo0Nn0seyJncm91cGlkIjoyNCwiZ3JvdXBfbmFtZSI6Ik1hcCIsInBhdGgiOiIva2J6cGF5LWFjcXVpc2l0aW9uLW1hcC1tYXN0ZXIiLCJwYWdlX25hbWUiOiJBY3F1aXNpdGlvbiBNYXAiLCJwYWdlX3BhdGgiOiIvZGVlcHNlZS9rYnpwYXktYWNxdWlzaXRpb24tbWFwLW1hc3RlciIsInBhZ2VpZCI6NDR9LHsiZ3JvdXBpZCI6MjQsImdyb3VwX25hbWUiOiJNYXAiLCJwYXRoIjoiL2tienBheS1hY3F1aXNpdGlvbi1tYXAtbWFzdGVyIiwicGFnZV9uYW1lIjoiUG90ZW50aWFsIE1hcCIsInBhZ2VfcGF0aCI6Ii9kZWVwc2VlL2NsdXN0ZXItbWFwIiwicGFnZWlkIjo0N30seyJncm91cGlkIjoyNCwiZ3JvdXBfbmFtZSI6Ik1hcCIsInBhdGgiOiIva2J6cGF5LWFjcXVpc2l0aW9uLW1hcC1tYXN0ZXIiLCJwYWdlX25hbWUiOiJQb3B1bGF0aW9uIE1ldHJpY3MiLCJwYWdlX3BhdGgiOiIvZGVlcHNlZS9wb3B1bGF0aW9uLW1ldHJpY3MtbWFzdGVyIiwicGFnZWlkIjo0OX0seyJncm91cGlkIjoyNCwiZ3JvdXBfbmFtZSI6Ik1hcCIsInBhdGgiOiIva2J6cGF5LWFjcXVpc2l0aW9uLW1hcC1tYXN0ZXIiLCJwYWdlX25hbWUiOiJBZ2VudCBIZWF0IE1hcCIsInBhZ2VfcGF0aCI6Ii9kZWVwc2VlL2hlYXRtYXAiLCJwYWdlaWQiOjUxfSx7Imdyb3VwaWQiOjI0LCJncm91cF9uYW1lIjoiTWFwIiwicGF0aCI6Ii9rYnpwYXktYWNxdWlzaXRpb24tbWFwLW1hc3RlciIsInBhZ2VfbmFtZSI6IktCWiBBc3NldHMiLCJwYWdlX3BhdGgiOiIvZGVlcHNlZS9rYnotYXNzZXRzIiwicGFnZWlkIjo1Mn1dLCJyb2xlcyI6W3sicm9sZSI6eyJob21lcGFnZSI6Ii9kZWVwc2VlL21hc3Rlcj9maWx0ZXI9W3tcIm5hbWVcIjpcInRpbWVfcGVyaW9kXCIsXCJ2YWx1ZVwiOlwidGhpcyBtb250aFwifSx7XCJuYW1lXCI6XCJicmFuY2hcIixcInZhbHVlXCI6XCJBbGxcIn1dIn19XX0sImlhdCI6MTYxOTc5Mjg5NiwiZXhwIjoxNjE5Nzk2NDk2fQ.XHB74zLok1oqUl1Z9y5fOcCa5UY2lk3LDR9HaBTaKsM')
    let apiCall = {
      method: 'post',
      body:query,
      baseURL: 'graphql',
      api: 'pageConfig'
    }

    api({...apiCall,body}).then(({ data }) => {

    }).catch(function (error) {


    })

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



