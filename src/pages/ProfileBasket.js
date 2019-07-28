import React,{Component} from 'react';
import { StyleSheet,View,Text,StatusBar } from 'react-native';


export default class ProfileBasket extends  Component<{}>{





	render(){

const { handleSubmit,userDtls } = this.props;
console.log(userDtls);
		return(
			<View style={styles.container}>
				<Text style={styles.textstyle}>Hello !...Welcome to the MyFarm APP.</Text>
			</View>
		);
	}
}

mapStateToProps = (state)=>({
		userDtls:state.userReducer.getUser
	})

const styles = StyleSheet.create({
	container :{
		backgroundColor:'#455a64',
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
       textstyle:{
		color:"#ffffff",
		fontSize:18
	}
});
