import React, { useState } from "react";
import { View, StyleSheet, Text, Switch} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ScreenBtn } from "../../components";
import { useNavigation } from '@react-navigation/native';
const App = () => {
  const [selectedService, setSelectedService] = useState("SC_DienTu");
  const [selectedJobs, setSelectedJobs] = useState([]);
  const navigation = useNavigation();
  const serviceItems = [
    { label: "Sửa đồ điện tử", value: "SC_DienTu", jobs: ["Laptop", "Điện thoại", "Máy tính"] },
    { label: "Sửa điện nước", value: "SC_DienNuoc", jobs: ["Sửa điện", "Sửa nước"] },
    { label: "Sửa đồ gia dụng", value: "SC_GiaDung", jobs: ["Tủ lạnh", "Máy giặt", "Lò vi sóng"] },
    { label: "Sửa xe máy", value: "SC_XeMay", jobs: ["Thay nhớt", "Sửa chữa"] },
    { label: "Vệ sinh nhà ở", value: "SC_NhaO", jobs: ["Dọn dẹp", "Lau chùi"] },
  ];


  const selectedServiceData = serviceItems.find(service => service.value === selectedService);

  const toggleJob = (job) => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs(selectedJobs.filter(selectedJob => selectedJob !== job));
    } else {
      setSelectedJobs([...selectedJobs, job]);
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        id="Picker_Service"
        selectedValue={selectedService}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => {
          setSelectedService(itemValue);
          setSelectedJobs([]); // Reset selected jobs when changing service
        }}
      >
       {serviceItems.map((service) => (
          <Picker.Item key={service.value} label={service.label} value={service.value} />
        ))}
      </Picker>

      {selectedServiceData && (
        <View style={styles.switchGroup}>
          <Text>Chọn công việc:</Text>
          {selectedServiceData.jobs.map((job, index) => (
            <View key={index} style={styles.switchContainer}>
              <Text>{job}</Text>
              <Switch
                value={selectedJobs.includes(job)}
                onValueChange={() => toggleJob(job)}
              />
            </View>
          ))}
        </View>
      )}
      <ScreenBtn textBtn={"TIẾP THEO"} handlePress={()=>navigation.navigate("signIn")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  switchGroup: {
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default App;
