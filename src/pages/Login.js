import React,{Component} from 'react';
import { StyleSheet,View,Text,StatusBar } from 'react-native';

import Logo from '../components/Logo'
import Form from '../components/Form'

export default class Login extends  Component<{}>{
	render(){
		return(
			<View style={styles.container}>
				<Logo/>
				<Form/>
				<View style={styles.signupTextCont}>
				<Text style={styles.signupText}>Please Read T&C before using the App</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container :{
		backgroundColor:'#455a64',
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	signupTextCont:{
		flexGrow:1,
		alignItems:'center',
		justifyContent:'flex-end',
		marginVertical:16
	},
	signupText:{
		color:'rgba(255,255,255,0.6)',
		fontSize:16
	}
});
