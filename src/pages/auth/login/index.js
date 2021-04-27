import React from "react";
import { history } from "../../../helpers";
export class Login extends React.Component {



  

  



  render() {
   
    return (
      <div className="row login justify-content-md-center forgot-page">
        <div className="col-md-9 col-xs-9 mb-3">

          <div className="row">
            <div className="col-md-12">
              <h4>Login Password</h4>
            </div>
          </div>




          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
            </div>
          </div>



          <div className="row text-center">
            <div className="col-md-12">
            <button type="submit" class="btn btn-primary" onClick={history.push('/home/')}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
