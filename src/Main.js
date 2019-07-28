import React,{Component} from 'react';
import { StyleSheet,View,Text,StatusBar,TouchableOpacity } from 'react-native';

import {Actions} from 'react-native-router-flux';
import Routes from './components/Routes';
import {connect} from "react-redux";

class Main extends Component<{}>{

	render(){
	const {checkUser}=this.props;

	console.log(this.props.checkUser.isLoggedin); 
        console.log(this.props.checkUser);
		return(
			<View style={styles.container}>
					<StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
					<Routes isLoggedin={this.props.checkUser.isLoggedin}/>				
			</View>			
		);
	}
}

const styles = StyleSheet.create({
	container :{
		flex:1
	}
});

mapStateToProps = state =>({
  checkUser: state.authReducer.checkUser	
})
export default connect(mapStateToProps,null)(Main)
