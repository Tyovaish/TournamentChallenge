import React, {Component} from 'react';
import {TextInput, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Tab, Tabs, ScrollableTab } from 'native-base';
export default class RoundCard extends Component {
    constructor(props) {
        super(props);
        this.state = { team1GameWins: '0', team2GameWins: '0', team1Pressed: false , team2Pressed: false};
      }
    render() {
        return (   
        <Card style = {{width: 3.0 * Dimensions.get('window').width/4.0}}>
            <CardItem>
                <Body style = {{backgroundColor: 'whitesmoke'}}>
                  <Text style = {this.props.team1PredictedCorrectly ? styles.teamPredictionCorrect : styles.teamPredictionIncorrect} > 
                    {this.props.team1PredictedName}
                  </Text>
                </Body>
            </CardItem>
            <CardItem>
              <Body style={{ flexDirection:'row' , justifyContent: 'space-between'}}>
                <Text style= {this.state.team1Pressed ? styles.teamSelectedToWin : styles.teamSelectedToLose} >
                   {this.props.team1Ranking}. {this.props.team1}
                </Text>
                <TextInput  
                            keyboardType={'numeric'} 
                            onChangeText={(team1GameWins) => 
                                {
                                    this.setState({team1GameWins});
                                    if(team1GameWins === '4'){
                                        this.setState({team1Pressed: true})
                                    } else {
                                        this.setState({team1Pressed:false})
                                    }
                                }} 
                            value={this.state.team1GameWins} 
                            clearTextOnFocus = {true}
                />
              </Body>
            </CardItem>
            <CardItem>
                <Body style={{ flexDirection:'row',justifyContent: 'space-between'}}>
                    <Text style = {this.state.team2Pressed ? styles.teamSelectedToWin : styles.teamSelectedToLose}>
                        {this.props.team2Ranking}. {this.props.team2}
                    </Text>
                    <TextInput  keyboardType={'numeric'} 
                                onChangeText={(team2GameWins) => this.setState({team2GameWins})} 
                                value={this.state.team2GameWins} 
                                clearTextOnFocus = {true} />
                </Body>
            </CardItem>
            <CardItem>
                <Body style = {{backgroundColor: 'whitesmoke'}}>
                    <Text style = {this.props.team2PredictedCorrectly ? styles.teamPredictionCorrect : styles.teamPredictionIncorrect} > 
                        {this.props.team2PredictedName}
                    </Text>
                </Body>
            </CardItem>
        </Card>);
    }
}
const styles = StyleSheet.create({
    teamPredictionIncorrect : {
        textDecorationLine: 'line-through',
        color : 'red'
    },
    teamPredictionCorrect:{
        color : 'limegreen'
    },
    teamSelectedToLose:{
        color: 'gainsboro'
    },
    teamSelectedToWin:{
        fontWeight: 'bold'
    }
  });