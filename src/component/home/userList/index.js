
import React from 'react';
import Moment from 'react-moment';
export class UserList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userList: []

        }

    }



    componentDidMount() {
        // this.validator = new SimpleReactValidator();
    }





    render() {
        let { userList } = this.props;
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(({name='-',gender='-',dob='-',pNum='-',aj='-'}, i) =>
                        <tr key={i}>
                            <th scope="row">1</th>
                            <td>{name}</td>
                            <td><Moment format="YYYY/MM/DD">
                                {dob}
                            </Moment></td>
                            <td>{gender}</td>
                            <td>{pNum}</td>
                            <td>{aj}</td>
                         
                        </tr>

                    )}

                </tbody>
            </table>

        )
    }



}



