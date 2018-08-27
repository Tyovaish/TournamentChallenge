import React, { Component } from 'react';
import {ScrollView, StyleSheet,View} from 'react-native'
import {Container, Header, Content, Card, CardItem, Body, Text, Tab, Tabs, ScrollableTab } from 'native-base';
import RoundCardOutput from './components/RoundCardOutput.js';
import RoundCardInput from './components/RoundCardInput.js';
import teamLogos from './resources/index.js';

export default class TournamentChallenge extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Quarterfinals">
          <ScrollView>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View>
              <Text> East </Text>
              <RoundCardOutput
                team1PredictedCorrectly = {false}
                team2PredictedCorrectly = {true}    
                team1Ranking = "1"
                team2Ranking = "2"
                team1PredictedName = "Portland Trailblazers"
                team2PredictedName = "New Orleans Pelicans"
                team1Logo = {teamLogos.orlando_magic}
                team2Logo = {teamLogos.houston_rockets}
                team1 = "Orlando Magic"
                team2 = "Houston Rockets"
                team1Wins = "4"
                team2Wins = "2"/>
            <RoundCardOutput
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
            <Text> West</Text>
            <RoundCardOutput 
              team1PredictedCorrectly = {false}
              team2PredictedCorrectly = {true}
              team1PredictedName = "Trailblazers"
              team2PredictedName = "Pelicans"
              team1Logo = {teamLogos.golden_state_warriors}
              team2Logo = {teamLogos.los_angles_clippers}
              team1Ranking = "1"
              team2Ranking = "2"
              team1 = "Warriors"
              team2 = "Clippers"
              team1Wins = "4"
              team2Wins = "2"/>
              </View>
              <View style={{marginTop:"25%"}}>
              <RoundCardOutput
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
              </View>
              </View>
          </ScrollView>

          </Tab>
          <Tab heading="Semifinals">
          <ScrollView>
          </ScrollView>
          </Tab>
          <Tab heading="Conference Finals">
          <ScrollView>
          </ScrollView>
          </Tab>
          <Tab heading="Finals">
          <ScrollView>
          </ScrollView>
           </Tab>
        </Tabs>           
      </Container>
    );
  }
}
const styles = StyleSheet.create({

})

