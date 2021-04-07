import React from 'react';


export class TotalCount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }

    }




    componentDidMount() {
        console.log('On call child home page',this.props)

    }

    handleProfileRouting = (id) => {
        this.props.getProdId('123')
        this.props.history.push('/profile/'+id)
 
   }

   
    render() {
        return (
            <div>


                <button onClick={()=>this.handleProfileRouting('ch-p_id1')}>Prod id</button>
                <h4> child TotalCount {this.props.count}</h4>
            </div>

        )
    }



}



