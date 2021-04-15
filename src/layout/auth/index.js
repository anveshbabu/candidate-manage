import React from 'react';
import './auth.scss';
export class AuthLayout extends React.Component {




    componentDidMount() {


    }






    render() {

        return (
            <div className="row">

            <div className="col-md-6 auth-layout d-flex align-items-center text-center">

            <img src={'https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg'} alt="Logo"  />
            </div>
            {/* <div className="col-md-6 d-flex align-items-center"> */}

            <div className="col-md-6 align-self-center">
              {/* <div className="auth-panel"> */}
            {this.props.children}
            {/* </div> */}
            </div>

          </div>
        )
    }



}



