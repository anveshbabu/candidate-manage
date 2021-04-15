import React from 'react';
import { Header } from "./header";
import { Sidebar } from "./sidebar";
export class MainLayout extends React.Component {




    componentDidMount() {


    }






    render() {

        return (
            <div class="d-flex" id="wrapper">
                <Sidebar />

                <div id="page-content-wrapper">
                    <Header />
                    <div class="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }



}



