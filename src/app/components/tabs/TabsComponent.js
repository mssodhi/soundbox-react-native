import React, { PropTypes } from 'react'
import { TabBarIOS, NavigatorIOS, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../home/Home'
import Charts from '../charts/Charts'
import Settings from '../settings/Settings'

const routes = [
  { key: 'homeTab', title: 'Home', icon: 'home' },
  { key: 'chartsTab', title: 'Charts', icon: 'signal' },
  { key: 'settingsTab', title: 'Settings', icon: 'cogs' }
];

const styles = {
  navBackground: '#ff6347',
  navTitle: '#fff',

  tabBarBackground: '#222',
  tabSelectedItem: '#fff'
};

const homeNav = <NavigatorIOS barTintColor={styles.navBackground} titleTextColor={styles.navTitle} tintColor={styles.navTint} style={{ flex: 1 }} initialRoute={{ component: Home, title: 'Home' }} />
const chartsNav = <NavigatorIOS barTintColor={styles.navBackground} titleTextColor={styles.navTitle} tintColor={styles.navTint} style={{ flex: 1 }} initialRoute={{ component: Charts, title: 'Charts' }} />
const settingsNav = <NavigatorIOS barTintColor={styles.navBackground} titleTextColor={styles.navTitle} tintColor={styles.navTint} style={{ flex: 1 }} initialRoute={{ component: Settings, title: 'Settings' }} />

class TabsComponent extends React.Component {

  state = {
    selectedTab: 'homeTab'
  }

  _renderTabContent(tab) {
    switch (tab.key) {
      case 'homeTab':
        return homeNav
      case 'chartsTab':
        return chartsNav
      case 'settingsTab':
        return settingsNav
      default:
        return homeNav
    }
  }

  render() {
    const tabs = routes.map(tab => {
      return (
        <Icon.TabBarItem
          key={tab.key}
          iconName={tab.icon}
          title={tab.title}
          selected={this.state.selectedTab === tab.key}
          onPress={() => this.setState({
            selectedTab: tab.key
          })}
        >
          {this._renderTabContent(tab)}
        </Icon.TabBarItem>
      );
    });

    return (
      <TabBarIOS barTintColor={styles.tabBarBackground} tintColor={styles.tabSelectedItem}>
        {tabs}
      </TabBarIOS>
    )
  }
}

export default TabsComponent
