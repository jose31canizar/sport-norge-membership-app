import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import QRCode from "react-native-qrcode";
import { styles } from "./style";
import { withNavigation } from "react-navigation";
import { FuturaText } from "../../components/StyledText";
import { data } from "../../mock-data";
import Carousel from "react-native-snap-carousel";
import QRCodeModal from "../../components/QRCodeModal";
import { Constants, Svg } from "expo";

const Arrow = props => (
  <Svg
    height={25}
    width={16}
    transform={[{rotate: '-90deg'}]}
    style={{
      marginLeft: 'auto'
    }}
  >
  <Svg.Path d="M13.6 11.6L9 16.2V1.3c0-1.5-2.3-1.5-2.3 0v14.9l-4.6-4.6C1 10.5-.6 12.2.5 13.2l6.6 6.6c.4.4 1.1.4 1.6 0l6.6-6.6c1-1-.7-2.6-1.7-1.6z" fill="#333"/>
  </Svg>
);

const SectionButton = withNavigation(({ navigation, name }) => (
  <TouchableOpacity
    style={styles.section_button}
    onPress={() => navigation.navigate("Offers")}
  >
    <FuturaText style={styles.section_button_name}>{name}</FuturaText>
    <Arrow/>
  </TouchableOpacity>
));

const FeaturedOffer = props => (
  <View style={styles.featured_offer}>
    <Image source={{ uri: props.image }} style={styles.featured_offer_image} />
    <FuturaText>{props.store}</FuturaText>
    <FuturaText>{props.percentage}%</FuturaText>
  </View>
);

export default class LinksScreen extends React.Component {
  state = {
    text: "http://facebook.github.io/react-native/",
    showQRCodeModal: false
  };
  static navigationOptions = {
    title: "Links"
  };
  componentWillMount() {
    this.setState({ width: Dimensions.get("window").width });
  }
  toggleModal = show => {
    this.setState({ showQRCodeModal: show });
  };

  render() {
    const { width, showQRCodeModal } = this.state;
    const { navigate } = this.props.navigation;
    const name = "Jose Canizares";
    const club = "Sport Norge";
    const division = "Football";
    return (
      <ScrollView style={styles.container}>
        <View style={styles.qr_code_container}>
          <View style={styles.caption}>
            <FuturaText style={styles.h1}>{name}</FuturaText>
            <FuturaText style={styles.h3}>{club}</FuturaText>
            <FuturaText style={styles.h3}>{division}</FuturaText>
          </View>
          <TouchableOpacity onPress={() => navigate('QRCodeViewer', {text: this.state.text} )}>
            <QRCode
              value={this.state.text}
              size={200}
              bgColor="#345962"
              fgColor="white"
            />
          </TouchableOpacity>
        </View>
        <Carousel
          loop
          slideInterpolatedStyle={(index, animatedValue, carouselProps) => {
            return {
              opacity: animatedValue.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [0, 0.5, 1],
                extrapolate: "clamp"
              })
            };
          }}
          containerCustomStyle={styles.featured_offers}
          data={data}
          renderItem={({ item }) => <FeaturedOffer {...item} />}
          sliderWidth={width}
          itemWidth={width * 0.7}
          keyExtractor={(item, i) => i.toString()}
        />
        <View style={styles.section_buttons}>
          <SectionButton name="Offers" />
          <SectionButton name="Your Benefits" />
          <SectionButton name="Stores" />
        </View>
      </ScrollView>
    );
  }
}
