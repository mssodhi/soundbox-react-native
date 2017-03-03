import React, { PropTypes } from 'react'
import { TabBarIOS, NavigatorIOS } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../home/Home'
import Charts from '../charts/Charts'
import Settings from '../settings/Settings'

const routes = [
  { key: 'homeTab', title: 'Home', icon: 'home' },
  { key: 'chartsTab', title: 'Charts', icon: 'signal' },
  { key: 'settingsTab', title: 'Settings', icon: 'cogs' }
];

class TabsComponent extends React.Component {

  state = {
    selectedTab: 'homeTab'
  }

  _renderTabContent(tab) {
    switch (tab.key) {
      case 'homeTab':
        return <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Home, title: 'Home' }} />
      case 'chartsTab':
        return <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Charts, title: 'Charts' }} />
      case 'settingsTab':
        return <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Settings, title: 'Settings' }} />
      default:
        return <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Home, title: 'Home' }} />
    }
  }

  _handlePress(tab) {
    this.setState({
      selectedTab: tab.key
    })
  }

  render() {
    const children = routes.map(tab => {
      return (
        <Icon.TabBarItem
          key={tab.key}
          iconName={tab.icon}
          title={tab.title}
          selected={this.state.selectedTab === tab.key}
          onPress={() => this._handlePress(tab)}
        >
          {this._renderTabContent(tab)}
        </Icon.TabBarItem>
      );
    });

    return (
      <TabBarIOS>
        {children}
      </TabBarIOS>
    )
  }
}

export default TabsComponent
