import React, { PropTypes } from 'react'
import Carousel from 'react-native-snap-carousel'
import TrackCarouselEntry from './TrackCarouselEntry'
import styles, { sliderWidth, itemWidth } from './TrackCarouselStyles'

export default class TrackCarousel extends React.Component {

  constructor(props) {
    super(props)
  }

  getSlides() {
    return this.props.tracks.map(track => {
      return (
        <TrackCarouselEntry
          key={track.id}
          track={track}
        />
      );
    });
  }

  render() {
    return (
      <Carousel
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem={0}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.6}
        enableSnap={false}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={false}
        style={{marginTop: 10}}
      >
        {this.getSlides()}
      </Carousel>
    )
  }
}

TrackCarousel.PropTypes = {
  tracks: PropTypes.array.isRequired
}
