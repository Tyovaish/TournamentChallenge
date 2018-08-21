import React, { Component } from 'react';
import {ScrollView, StyleSheet} from 'react-native'
import {Container, Header, Content, Card, CardItem, Body, Text, Tab, Tabs, ScrollableTab } from 'native-base';
import RoundCard from './RoundCard.js';

export default class TournamentChallenge extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Quarterfinals">
          <ScrollView>
            <Text> East </Text>
            <RoundCard 
                       team1PredictedCorrectly = {true}
                       team2PredictedCorrectly = {false}
                       team1PredictedName = "Atlanta Hawks"
                       team2PredictedName = "Brooklyn Nets"
                       team1Ranking = "1"
                       team2Ranking = "2"
                       team1 = "Orlando Magic"
                       team2 = "Houston Rockets"/>
            <Text> West</Text>
            <RoundCard 
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

