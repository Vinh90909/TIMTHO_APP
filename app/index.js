import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './_navigation'

const App = () => {
    
    return (
        <NavigationContainer independent={true}>
            <Nav/>
        </NavigationContainer>
    );
  };
  
  export default App;