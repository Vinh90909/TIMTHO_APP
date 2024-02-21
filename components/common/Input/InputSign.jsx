import React from 'react';
import { TextInput } from 'react-native';
import styles  from './InputSign.style';
const CustomInput = ({ widthCustom,idInput, opacityCustom, enabled = true, ...restProps }) => {
    return (
      <TextInput
        id={idInput}
        {...restProps}
        
        
        style={[
          styles.input,
          { width: widthCustom,opacity:opacityCustom },
          enabled ? styles.shadow : null, // Áp dụng shadow khi enabled = true
          
        ]}
      />
    );
  };
  
export default CustomInput;