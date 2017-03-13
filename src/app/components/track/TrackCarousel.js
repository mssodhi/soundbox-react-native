import React, { PropTypes } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'

import TrackCarouselEntry from './TrackCarouselEntry'
import styles, { sliderWidth, itemWidth } from './TrackCarouselStyles'
import { shuffle } from '../music-player/musicPlayerEffects'

class TrackCarousel extends React.Component {

  constructor(props) {
    super(props)
  }

  getSlides() {
    return this.props.tracks.map(track => {
      return (
        <TrackCarouselEntry
          key={track.id}
          track={track}
          style={{ position: 'absolute', top: 5 }}
        />
      );
    });
  }

  render() {
    const { props: { _onShuffle } } = this
    return (
      <View>
        <TouchableHighlight style={{ margin: 5, backgroundColor: '#ff6347', borderRadius: 50, alignSelf: 'center', alignItems: 'center' }}
          onPress={() => _onShuffle(this.props.tracks)}
        >
          <Text style={{fontSize: 15, margin: 15, color: '#fff'}}>Shuffle</Text>
        </TouchableHighlight>

        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={0}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={0.75}
          enableSnap={false}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={true}
        >
          {this.getSlides()}
        </Carousel>
      </View>
    )
  }
}

TrackCarousel.PropTypes = {
  tracks: PropTypes.array.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onShuffle(tracks) {
      dispatch(shuffle(tracks))
    }
  }
}

export default connect(null, mapDispatchToProps)(TrackCarousel);
