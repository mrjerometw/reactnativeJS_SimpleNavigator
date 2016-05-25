'use strict';
 var React = require('react-native');
 var {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator,
   Component,
   TouchableHighlight
 } = React;
 var App = React.createClass({
   getInitialState() {
     return { name: 'Jerome' }
   },

   renderScene(route, navigator) {
     if(route.name == 'Main') {
       return <Main navigator={navigator} name={this.state.name} {...route.passProps}  />
     }
     if(route.name == 'Home') {
       return <Home navigator={navigator} name={this.state.name} {...route.passProps}  />
     }
   }
   ,
   render() {
     console.log('this. state', this.state)
     return (
       <Navigator
         style={{ flex:1 }}
         initialRoute={{ name: 'Main' }}
         renderScene={ this.renderScene } />
     )
   }
 })
 var Main = React.createClass({
   _navigate(name) {
     this.props.navigator.push({
       name: 'Home',
       passProps: {
         name: name
       }
     })
   },
   render() {
     return (
       <View style={ styles.container }>
         <Text style={ styles.heading }>This is Page 1</Text>
         <TouchableHighlight style={ styles.button } onPress={ () => this._navigate('Jerome ~') }>
           <Text style={ styles.buttonText }>Go Page2 </Text>
         </TouchableHighlight>
       </View>
     )
   }
 })
 var Home = React.createClass({
   render() {
     return (
       <View style={ styles.container }>
         <Text style={ styles.heading }>This is Page 2, Hello from { this.props.name }</Text>
         <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
           <Text style={ styles.buttonText }>Go back Page 1</Text>
         </TouchableHighlight>
       </View>
     )
   }
 })
 var styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 80
   },
    heading: {
     fontSize:22,
     marginBottom:10
   },
   button: {
     height:60,
     backgroundColor: '#efefef',
     alignItems: 'center',
     justifyContent: 'center'
   },
   buttonText: {
     fontSize:20
   }
 });
module.exports = App;
