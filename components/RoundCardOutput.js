import React, {Component} from 'react';
import {TextInput, TouchableHighlight, StyleSheet, Dimensions, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text} from 'native-base';
export default class RoundCardOutput extends Component {
    constructor(props) {
        super(props);
        this.determineStyleOfPredictedGame = this.determineStyleOfPredictedGame.bind(this);
        this.determineStyleOfCurrentRound = this.determineStyleOfCurrentRound.bind(this);
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
    determineStyleOfCurrentRound(currentTeam,roundWinner){
            if(roundWinner === undefined){
                return styles.teamStillCompeting;
            }
            if(currentTeam === roundWinner){
                return styles.teamWon;
            }
            return styles.teamLost;
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
        <Card style = {[this.props.style]}>
            {team1PredictionDisplay}
            <CardItem>
                <Body style={{ flexDirection:'row' , justifyContent: 'space-between'}}>            
                    <Text style= {this.determineStyleOfCurrentRound(this.props.team1,this.props.roundWinner)} >
                        <Image style = {{width: 20, height: 15}}source = {this.props.team1Logo} />
                        {' '+this.props.team1Ranking}. {this.props.team1}
                    </Text>
                    <Text> 
                    {this.props.team1Wins}
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Body style={{ flexDirection:'row',justifyContent: 'space-between'}}>
                    <Text style = {this.determineStyleOfCurrentRound(this.props.team2,this.props.roundWinner)}>
                    <Image style = {{width: 20, height: 15}}source = {this.props.team2Logo} />
                        {' '+this.props.team2Ranking}. {this.props.team2}
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
    },
    teamStillCompeting:{
        fontWeight: 'bold'
    }
  });