import React, { useState,useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import homeActiveImage from '../../../assets/icons/i_home2.png';
import homeInactiveImage from '../../../assets/icons/i_home1.png';
import calendarActiveImage from '../../../assets/icons/i_appointment_schedule2.png';
import calendarInactiveImage from '../../../assets/icons/i_appointment_schedule1.png';
import bellActiveImage from '../../../assets/icons/i_notification2.png';
import bellInactiveImage from '../../../assets/icons/i_notification1.png';
import userActiveImage from '../../../assets/icons/i_profile2.png';
import userInactiveImage from '../../../assets/icons/i_profile1.png';
import { useNavigation } from '@react-navigation/native';
const Footer = ({name}) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(name); // Trạng thái mặc định là 'home'

  const handleTabPress = (tabName) => {
    navigation.navigate(tabName);
    setActiveTab(name);
    
  };
  useEffect(() => {
  }, [activeTab]);

  const getButtonImage = (tabName) => {
    // Dựa vào trạng thái 'activeTab' để quyết định hình ảnh cần hiển thị
    if (tabName === activeTab) {
      return getImageForActiveTab(tabName);
    }
    return getImageForInactiveTab(tabName);
  };

  const getImageForActiveTab = (tabName) => {
    switch (tabName) {
      case 'home':
        return homeActiveImage;
      case 'calendar':
        return calendarActiveImage;
      case 'bell':
        return bellActiveImage;
      case 'user':
        return userActiveImage;
      default:
        return null;
    }
  };

  const getImageForInactiveTab = (tabName) => {
    switch (tabName) {
      case 'home':
        return homeInactiveImage;
      case 'calendar':
        return calendarInactiveImage;
      case 'bell':
        return bellInactiveImage;
      case 'user':
        return userInactiveImage;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => handleTabPress('home')}
      >
        <Image source={getButtonImage('home')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => handleTabPress('calendar')}
      >
        <Image source={getButtonImage('calendar')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => handleTabPress('bell')}
      >
        <Image source={getButtonImage('bell')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => handleTabPress('user')}
      >
        <Image source={getButtonImage('user')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingVertical: 10,
  },
  iconButton: {
    paddingHorizontal: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Footer;
