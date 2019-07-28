import React,{Component} from 'react';
import { StyleSheet,View,Text,StatusBar,TouchableOpacity } from 'react-native';

import {Actions} from 'react-native-router-flux';
import Routes from './components/Routes';
import {connect} from "react-redux";

class Main extends Component<{}>{

	render(){	
		return(
			<View style={styles.container}>
					<StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
					<Routes/>				
			</View>			
		);
	}
}

const styles = StyleSheet.create({
	container :{
		flex:1
	}
});

export default connect(null,null)(Main)
