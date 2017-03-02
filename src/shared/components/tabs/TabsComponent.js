import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, TabBarIOS } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import Home from '../../../app/views/home/Home'
import Charts from '../../../app/views/charts/Charts'

class TabsComponent extends React.Component {

  state = {
    selectedTab: 'homeTab',
    notifCount: 0,
    presses: 0,
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="black"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Home"
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}>
          <Home />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Charts"
          selected={this.state.selectedTab === 'chartsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'chartsTab'
            });
          }}>
          <Charts />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="More"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab'
            });
          }}>
          <Home />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  } /* end render */
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  }
});

export default TabsComponent
