import React from 'react';


export const ThemeContext = React.createContext('dark');

export class AppContext extends React.Component {
state={
    theme:'dark',
    language:'EN'  
}


    handleTheme=(vale)=>{
        this.setState({theme:vale})
    }

    handleLang=(vale)=>{
        this.setState({language:vale})
    }
    render() {

        return (

            <ThemeContext.Provider value={{ 

                theme: this.state.theme,

                language:this.state.language,
                
            click:{
                themeChange:this.handleTheme,
                languagechange:this.handleLang
             }
            }} >
                {/* <h4>tdghghd</h4> */}
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}