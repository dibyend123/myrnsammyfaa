import React,{Component} from 'react';
import { StyleSheet,View,Text,StatusBar,Image} from 'react-native';

export default class Logo extends  Component<{}>{
	render(){
		return(
			<View style={styles.container}>
		<Image style={{width:70,height:70}} source={require('../images/logo.png')}/>
			<Text style={styles.logoText}>Welcome to MyFarm App</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container :{
		flexGrow:1,
		alignItems:'center',
		justifyContent:'center'
	},
       logoText :{
		marginVertical:15,
                fontSize:18,
		color:'rgba(255,255,255,0.7)'
	}
})
