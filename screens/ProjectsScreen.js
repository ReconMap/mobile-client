import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, StyleSheet  } from "react-native";
import AppContext from "../contexts/AppContext";

const ProjectsScreen = () => {
    const appContext = useContext(AppContext)
    return (
      <SafeAreaView style={styles.container}>
        <Text style={ styles.text }>Lists of Projects</Text>
      </SafeAreaView>
    );
  };
  
export default ProjectsScreen;


const styles = StyleSheet.create({
    form: {
      flex: 1,
      justifyContent: "center",
    },
    container: {
      padding: 20,
      flex: 1,
      backgroundColor: "#1a202c",
      alignItems: "center",
      justifyContent: "center",
      alignItems: "stretch",
      justifyContent: "space-evenly",
    },
    text: {
      color: "#a0aec0",
      fontSize: 16,
      textAlign: "center",
      flex: 1,
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 10,
  
      borderRadius: 10,
      backgroundColor: "#e53e3e",
      marginVertical: 10,
    },
    buttonText: {
      textAlign: "center",
      fontWeight: "600",
      color: "#edf2f7",
      fontSize: 24,
    },
    textInput: {
      textAlign: "center",
      paddingVertical: 15,
      paddingHorizontal: 10,
      color: "#edf2f7",
      fontSize: 24,
      borderRadius: 10,
      backgroundColor: "#2d3748",
      marginVertical: 5,
    },
    Logo: {
      width: "100%",
      height: 150,
      resizeMode: "contain",
      flex: 0.75,
    },
  });
  