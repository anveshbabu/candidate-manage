import React from 'react';






export class NormalInput extends React.Component {


    render() {

        let {
            type = 'text',
            placeholder='',
            value='',
            name='',
            onChange='',
            className='form-control'
        } = this.props;

        return (
            <>
                <input type={type} className={className} placeholder={placeholder} value={value} name={name} onChange={onChange} />
            </>
        )
    }



}



