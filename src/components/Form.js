import React,{Component} from 'react';
import { StyleSheet,View,Text,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import { Field,reduxForm } from 'redux-form'
import InputText from "../components/InputText";
import {checkUser} from "../actions/auth.actions";
import Loader from "../components/Loader";

import {connect} from "react-redux";
import {compose} from "redux"

const styles = StyleSheet.create({
	container :{
		flexGrow:1,
		alignItems:'center',
		justifyContent:'center'
	},
	inputBox:{
		width:300,
		backgroundColor:'rgba(255,255,255,0.3)',
		borderRadius:25,
		paddingHorizontal:16,
                fontSize:16,
		color:"#ffffff",
		marginVertical:10
	},
	buttonText:{
		fontSize:16,
		fontWeight:'500',
		color:'#ffffff',
		textAlign:'center'
	},
	button:{
		width:300,
		backgroundColor:'#1c313a',
		borderRadius:25,
		marginVertical:10,		
		paddingVertical:12
		
	},
	errorText:{
		color:"#ffffff",
		fontSize:12			
	}
})

onSubmit = (values)=>{
	
}

class Form extends  Component<{}>{


renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />
             {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
  }

userCheck = (values) =>{
	this.props.dispatch(checkUser(values));
}

onSubmit = (values) => {
      this.userCheck(values);
  }


	render(){

	const { handleSubmit,userLogin } = this.props;

		return(
			
		

<View style={styles.container}>
	{ userLogin.isLoading && <Loader/> }	
	<Field name="name" component={this.renderTextInput} placeholder="Name" />
		<TouchableOpacity style={styles.button}  onPress={handleSubmit(this.onSubmit)}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>	
			</View>
		);
	}
}

const validate = (values)=>{
	const errors = {};
	if(!values.name){
		errors.name="Name is required"
	}
 return errors;
}

mapStateToProps = (state)=>({
		userLogin:state.authReducer.checkUser
	})


mapDispatchToProps = (dispatch) => ({
	dispatch
});

export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   reduxForm({form:'login',validate})
)(Form);



