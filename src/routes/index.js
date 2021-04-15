import React from "react";

import { Route, Router } from "react-router-dom";

import * as Layout from "../layout";
import * as Pages from "../pages";

import { history } from "../helpers";
import routers from "./routes";

class Routes extends React.Component {


    // Authentication "before" filter
    requireAuth = (nextState, replace) => {
        console.log("called"); // => Is not triggered at all 
        // if (!isLoggedIn()) {
        //   replace({
        //     pathname: '/front'
        //   })
        // }
    }

    render() {

        return (
            <Router history={history}>

                {routers.map(
                    ({
                        component,
                        redirect,
                        path,
                        exact = false,
                        auth = true,
                        childrens = []
                    }) => {

                        if (childrens.length > 0) {


                            return (
                                <Route
                                    path={path}
                                    exact={exact}
                                    key={path}
                                    onEnter={this.requireAuth}

                                    render={props => {
                                        if (redirect) {
                                            if (props.location.pathname === path) {
                                                props.history.push(redirect);
                                            }
                                        }

                                        const LayoutComponent = Layout[component];

                                        return (

                                            <LayoutComponent {...props}>

                                                {childrens.map(
                                                    ({
                                                        component: ChildrenComponent,
                                                        path: childrenPath,
                                                        exact = false,
                                                        auth = true
                                                    }) => {

                                                        return (
                                                            <Route
                                                                path={path + childrenPath}
                                                                exact={exact}
                                                                key={path + childrenPath}
                                                                onEnter={this.requireAuth}
                                                                render={props => {
                                                                    let PageComponent = Pages[ChildrenComponent];

                                                                    return <PageComponent {...props} />;
                                                                }}
                                                            />
                                                        );

                                                    }
                                                )}

                                            </LayoutComponent>
                                        )


                                    }}
                                />
                            )
                        } else {
                            return (
                                <Route
                                    path={path}
                                    exact={exact}
                                    key={path}
                                    onEnter={this.requireAuth}
                                    render={props => {
                                        if (redirect) {
                                            if (props.location.pathname === path) {
                                                props.history.push(redirect);
                                            }
                                        } else {

                                            let PageComponent = Pages[component];

                                            return <PageComponent {...props} />;
                                        }


                                    }}
                                />
                            )
                        }


                    })}



            </Router>


        )

    }


}

export default Routes;