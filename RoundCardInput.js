import React, {Component} from 'react';
import {TextInput, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text} from 'native-base';

export default class RoundCardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {team1NumberOfGameWins: 0, team2NumberOfGameWins: 0,team1WinsRound: false, team2WinsRound:false}
    }
    render() {
        return (   
        <Card style = {{width: 2.0 * Dimensions.get('window').width/3.0}}>
            <CardItem>
                <Body style={{ flexDirection:'row' , justifyContent: 'space-between',}}>
                    <Text style= {this.state.team1WinsRound ? styles.teamWon : null} >
                        {this.props.team1Ranking}. {this.props.team1}
                    </Text>
                    <TextInput
                        keyboardType = 'numeric'  
                        onChangeText={(team1NumberOfGameWins) => {
                            if(isNaN(parseInt(team1NumberOfGameWins))){
                                console.log("INPUT IS NOT A NUMBER")
                                this.setState({team1NumberOfGameWins: 0})
                            }else if(parseInt(team1NumberOfGameWins)>= 4){
                                console.log("INPUT BIGGER THAN 4")
                                this.setState({team1NumberOfGameWins: 4});
                            } else {
                                console.log("INPUT IS PERFECT!")
                                this.setState({team1NumberOfGameWins:parseInt(team1NumberOfGameWins)});
                            }

                            if(parseInt(this.state.team1NumberOfGameWins)+parseInt(this.state.team2NumberOfGameWins)>7){
                                this.setState({team2NumberOfGameWins: 3});
                            }
                            if(this.state.team1NumberOfGameWins === 4){
                                this.setState({team1WinsRound: true, team2WinsRound: false})
                            }
                            console.log("FINAL OUTPUT: "+this.state.team1NumberOfGameWins.toString())
                        }}
                        value={this.state.team1NumberOfGameWins.toString()} />
                </Body>
            </CardItem>
            <CardItem>
                <Body style={{ flexDirection:'row',justifyContent: 'space-between'}}>
                    <Text style = {this.state.team2WinsRound ? styles.teamWon : null}>
                        {this.props.team2Ranking}. {this.props.team2}
                    </Text>
                </Body>
            </CardItem>
        </Card>);
    }
}
const styles = StyleSheet.create({
    teamLost:{
        color: 'gainsboro'
    },
    teamWon:{
        fontWeight: 'bold'
    }
  });