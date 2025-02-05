import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from "@react-native-picker/picker";


export default function App() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchJobsFromApi = async(industry) => {
    
    setIsLoading(true);

    const url = `https://jobicy.com/api/v2/remote-jobs?count=20&industry=${industry}`
    try{
      const response = await fetch(url);

      if (!response.ok){
        throw new Error(`Response Status : ${response.status}. 
          Response not received successfully from API.`)
      }
      const jsonData = await response.json()

      setData(jsonData.jobs);

      console.log(`Response received from web service : 
        ${JSON.stringify(jsonData.jobs)}`);
      
      return jsonData.jobs;

    }catch(err){
      console.log(`Error while fetching the data from API : ${err}`);
    }finally{
      //stop showing the activity indicator
      setIsLoading(false)
    } 
  }

  useEffect(() => {
    fetchJobsFromApi(selectedIndustry);
  }, [selectedIndustry])

  return (
    <SafeAreaProvider>
      <SafeAreaView style = {styles.container}>
        <View style = {styles.container}>
          <Text style = {styles.title}>Your Job search 🔎</Text>
          <Text style = {styles.subTitle}>Select an Industry</Text>
          <Picker
            selectedValue={selectedIndustry}
            onValueChange={(itemValue) => setSelectedIndustry(itemValue)}
            style={styles.picker}
            itemStyle = {{color: "#A9CEF4"}}
          >
            <Picker.Item label="Select an Industry" value="" />
            <Picker.Item label="HR" value="hr" />
            <Picker.Item label="Business" value="business" />              
            <Picker.Item label="Dev" value="dev" />
          </Picker>
        {
          isLoading ? (
            <ActivityIndicator />
          ) : (
        <View style={{flex:1, width:'100%'}}>
          <FlatList 
            data={data}
            keyExtractor={ ({id}) => id.toString()} 
            renderItem={ ({item}) => (
              <View style = {styles.jobContainer}>
                <View style = {styles.jobDetails}>
                  <Text style = {styles.jobTitle}>{item.jobTitle}</Text>
                  <Text style = {styles.companyName}>{item.companyName}</Text>
                  <Text style = {styles.pubDate}>{item.pubDate}</Text>
                  <Text style = {styles.jobExcerpt}>{item.jobExcerpt}</Text>
                </View>
              </View>
            )}
            //to make sure the user can easily identify diff obj
            ItemSeparatorComponent={ () => {
              return <View style= { styles.separator}/>
            }}
          />
        </View>
      )
    }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#36494E",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#A9CEF4",
  },
  subTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#A9CEF4",
  },
  picker: {
    backgroundColor: "#597081",
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  jobContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#597081",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A9CEF4",
  },
  companyName: {
    fontSize: 16,
    color: "#7EA0B7",
    marginTop: 4,
  },
  pubDate: {
    fontSize: 14,
    color: "#7EA0B7",
    marginTop: 2,
  },
  jobExcerpt: {
    fontSize: 14,
    color: "#A9CEF4",
    marginTop: 8,
  },
  separator: {
    height: 1,
    backgroundColor: "#36494E",
    marginVertical: 10,
  },
});
