import React,{Component} from 'react';
import { Router,Stack,Scene } from 'react-native-router-flux';

import Login from '../pages/Login';
import ProfileBasket from '../pages/ProfileBasket'

export default class Routes extends Component<{}>{
	render(){
		return(
			<Router>
				
			<Scene>
				<Scene key="root" hideNavBar={true} initial={!this.props.isLoggedin}>
					<Scene key="login" component={Login} title="Login" initial={true}/>
				</Scene>

				<Scene key="app" hideNavBar={true} initial={this.props.isLoggedin}>
					<Scene key="profile" component={ProfileBasket} initial={true}/>
				</Scene>
			</Scene>

			</Router>
		)
	}
}


