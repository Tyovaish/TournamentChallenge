import React, {Component} from 'react';
import {TextInput, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text} from 'native-base';

export default class RoundCardOutput extends Component {
    constructor(props) {
        super(props);
        this.determineStyleOfPredictedGame = this.determineStyleOfPredictedGame.bind(this);
      }
    determineStyleOfPredictedGame(currentTeam,teamPredictedName,roundWinner){
        if(currentTeam !== teamPredictedName){
            return styles.teamPredictionIncorrectToGetToRound;
        }
        if(currentTeam !== roundWinner){
            return styles.teamPredictedToWinIncorrect;
        }
        return styles.teamPredictedToWinCorrect;

    }

    render() {
        const team1PredictionDisplay = this.props.team1PredictedName !== undefined ? (
            <CardItem>
                <Body style = {{backgroundColor: 'whitesmoke'}}>
                    <Text style = {this.determineStyleOfPredictedGame(this.props.team1,this.props.team1PredictedName,this.props.roundWinner)} > 
                        {this.props.team1PredictedName}
                    </Text>
                </Body>
            </CardItem>): null;
        const team2PredictionDisplay = this.props.team2PredictedName !== undefined ? ( 
            <CardItem>
                <Body style = {{backgroundColor: 'whitesmoke'}}>
                    <Text style =  {this.determineStyleOfPredictedGame(this.props.team2,this.props.team2PredictedName,this.props.roundWinner)} > 
                        {this.props.team2PredictedName}
                    </Text>
                </Body>
            </CardItem>): null;
        return (   
        <Card style = {{width: 2.0 * Dimensions.get('window').width/3.0}}>
            {team1PredictionDisplay}
            <CardItem>
                <Body style={{ flexDirection:'row' , justifyContent: 'space-between'}}>
                    <Text style= {this.props.team1 === this.props.roundWinner ? styles.teamWon : styles.teamLost} >
                        {this.props.team1Ranking}. {this.props.team1}
                    </Text>
                    <Text> 
                    {this.props.team1Wins}
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Body style={{ flexDirection:'row',justifyContent: 'space-between'}}>
                    <Text style = {this.props.team2 === this.props.roundWinner  ? styles.teamWon : styles.teamLost}>
                        {this.props.team2Ranking}. {this.props.team2}
                    </Text>
                    <Text>
                        {this.props.team2Wins}
                    </Text>
                </Body>
            </CardItem>
            {team2PredictionDisplay}
        </Card>);
    }
}
const styles = StyleSheet.create({
    teamPredictionIncorrectToGetToRound: {
        textDecorationLine: 'line-through',
        color : 'red'
    },
    teamPredictedToWinIncorrect:{
        color: 'red'
    },
    teamPredictedToWinCorrect:{
        color : 'limegreen'
    },
    teamLost:{
        color: 'gainsboro'
    },
    teamWon:{
        fontWeight: 'bold'
    }
  });