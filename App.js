import React, { Component } from 'react';
import {ScrollView, StyleSheet,View,Dimensions} from 'react-native'
import {Container, Header, Content, Card, CardItem, Body, Text, Tab, Tabs, ScrollableTab } from 'native-base';
import RoundCardOutput from './components/RoundCardOutput.js';
import RoundCardInput from './components/RoundCardInput.js';
import teamLogos from './resources/index.js';

export default class TournamentChallenge extends Component {
  render() {
    return (
      <Container>
          <ScrollView style={{height:1000,width:1000}}>
              <RoundCardOutput
                style = {[styles.currentRoundStyle,{top:30}]}
                team1Ranking = "1"
                team2Ranking = "2"
                team1Logo = {teamLogos.orlando_magic}
                team2Logo = {teamLogos.houston_rockets}
                team1 = "Magic"
                team2 = "Rockets"
                team1Wins = "4"
                team2Wins = "2"/>
            <RoundCardOutput
              style ={styles.nextRoundStyle}
                team1PredictedCorrectly = {false}
                team2PredictedCorrectly = {true}    
                team1Ranking = "1"
                team2Ranking = "2"
                team1PredictedName = "Trailblazers"
               team2PredictedName = "Pelicans"
              team1Logo = {teamLogos.orlando_magic}
              team2Logo = {teamLogos.houston_rockets}
              team1 = "Magic"
              team2 = "Rockets"
              team1Wins = "4"
              team2Wins = "2"/>
              <RoundCardOutput
                style = {[styles.currentRoundStyle,{top:200}]}  
              team1Logo = {teamLogos.golden_state_warriors}
              team2Logo = {teamLogos.los_angles_clippers}
              team1Ranking = "1"
              team2Ranking = "2"
              team1 = "Warriors"
              team2 = "Clippers"
              team1Wins = "4"
              team2Wins = "2"/>
          </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
      currentRoundStyle : {
        position: 'absolute',
        left: 10,
        width: 2.0 * Dimensions.get('window').width/3.0,
        height:80
        },
      nextRoundStyle : {
        position: 'absolute',
        top:75,
        left:  2.0 * Dimensions.get('window').width/3.0+30,
        width: 2.0 * Dimensions.get('window').width/3.0,
        height: 160,
      }
      
})

