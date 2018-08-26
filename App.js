import React, { Component } from 'react';
import {ScrollView, StyleSheet} from 'react-native'
import {Container, Header, Content, Card, CardItem, Body, Text, Tab, Tabs, ScrollableTab } from 'native-base';
import RoundCardOutput from './components/RoundCardOutput.js';
import RoundCardInput from './components/RoundCardInput.js';

export default class TournamentChallenge extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Quarterfinals">
          <ScrollView>
            <Text> East </Text>
            <RoundCardOutput
              roundWinner = "Houston Rockets"            
              team1Ranking = "1"
              team2Ranking = "2"
              team1 = "Orlando Magic"
              team2 = "Houston Rockets"
              team1Wins = "4"
              team2Wins = "2"/>
            <Text> West</Text>
            <RoundCardOutput 
                       team1PredictedCorrectly = {false}
                       team2PredictedCorrectly = {true}
                       team1PredictedName = "Portland Trailblazers"
                       team2PredictedName = "New Orleans Pelicans"
                       team1Ranking = "1"
                       team2Ranking = "2"
                       team1 = "Golden State Warriors"
                       team2 = "LA Clippers"/>
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

