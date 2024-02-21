import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { COLORS } from '../../constants';
import { ScreenBtn } from "../../components";
import { useNavigation } from '@react-navigation/native';

function SignUpV2() {
  // The path of the picked images
  const [pickedImagePathFontIDEn, setPickedImagePathFontIDEn] = useState('');
  const [pickedImagePathBackIDEn, setPickedImagePathBackIDEn] = useState('');
  const [pickedImagePathFace, setPickedImagePathFace] = useState('');
  const navigation = useNavigation();
  // Function to handle image picking and camera opening
  const handleMediaPick = async (useCamera, setItem) => {
    const mediaPermissionType = useCamera
      ? ImagePicker.requestCameraPermissionsAsync
      : ImagePicker.requestMediaLibraryPermissionsAsync;

    const permissionResult = await mediaPermissionType();

    if (permissionResult.granted === false) {
      alert(useCamera ? "You've refused to allow this app to access your camera!" : "You've refused to allow this app to access your photos!");
      return;
    }

    const result = useCamera
      ? await ImagePicker.launchCameraAsync()
      : await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      // Save the image to the "images" folder
      const imageUri = result.assets[0].uri;
      const imageFileName = imageUri.split('/').pop();
      const imageFileUri = `${FileSystem.documentDirectory}images/${imageFileName}`;
      await FileSystem.copyAsync({ from: imageUri, to: imageFileUri });
      console.log(imageFileUri);
      setItem(imageFileUri); // Update the state with the local file URI
    }
  };
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.buttonContainer}>
            <Button  onPress={() => handleMediaPick(false, setPickedImagePathFontIDEn)} title="Select an image" />
            <Button  onPress={() => handleMediaPick(true, setPickedImagePathFontIDEn)} title="Open camera" />
          </View>
          {pickedImagePathFontIDEn !== '' && <Image source={{ uri: pickedImagePathFontIDEn }} style={styles.image} />}
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.buttonContainer}>
            <Button  onPress={() => handleMediaPick(false, setPickedImagePathBackIDEn)} title="Select an image" />
            <Button  onPress={() => handleMediaPick(true, setPickedImagePathBackIDEn)} title="Open camera" />
          </View>
          {pickedImagePathBackIDEn !== '' && <Image source={{ uri: pickedImagePathBackIDEn }} style={styles.image} />}
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.buttonContainer}>
            <Button  onPress={() => handleMediaPick(false, setPickedImagePathFace)} title="Select an image" />
            <Button  onPress={() => handleMediaPick(true, setPickedImagePathFace)} title="Open camera" />
          </View>
          {pickedImagePathFace !== '' && <Image source={{ uri: pickedImagePathFace }} style={styles.image} />}
        </View>
      </View>
      <ScreenBtn textBtn={"TIẾP THEO"} handlePress={()=>navigation.navigate("signUpV3")}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    padding: 30,
  },
  image: {
    borderColor:COLORS.lightBule,
    width: 400,
    height: 300,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    marginHorizontal: 10,
  },
});

export default SignUpV2;
