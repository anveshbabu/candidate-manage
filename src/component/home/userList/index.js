
import React from 'react';
import Moment from 'react-moment';
export class UserList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userList: [],
            isShow: false

        }

    }



    componentDidMount() {
        // this.validator = new SimpleReactValidator();
    }



    handleShowTxt = () => {
        let { isShow } = this.state;
        this.setState({ isShow: !isShow })
    }

    render() {
        let { userList } = this.props;
        let { isShow } = this.state;
        return (
            <>
                <button type="submit" className="btn btn-primary" onClick={this.handleShowTxt}>{isShow ? 'Hide' : 'show'}</button>

                {isShow ?

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
                            {userList.map(({ userId = '-', title = '-', body = '-', pNum = '-', aj = '-' }, i) => (

                                userId !== 2 ?
                                    <tr key={i}>
                                        <th scope="row">1</th>
                                        <td>{userId}</td>
                                        <td>{title}</td>
                                        <td>{body}</td>
                                        <td>{pNum}</td>
                                        <td>{aj}</td>

                                    </tr> : ''



                            ))}

                        </tbody>
                    </table>
                    : ''}
            </>

        )
    }



}



