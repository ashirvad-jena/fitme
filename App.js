import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
	componentDidMount() {
		console.log("hello");
		console.log("before");
		console.log("after");
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your pp!</Text>
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
