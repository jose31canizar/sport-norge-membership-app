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

const SectionButton = withNavigation(({ navigation, name }) => (
  <TouchableOpacity
    style={styles.section_button}
    onPress={() => navigation.navigate("Offers")}
  >
    <FuturaText>{name}</FuturaText>
  </TouchableOpacity>
));

const FeaturedOffer = props => (
  <View style={styles.featured_offer}>
    <Image source={{ uri: props.image }} style={styles.featured_offer_image} />
    <FuturaText>{props.name}</FuturaText>
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
          <FuturaText>{name}</FuturaText>
          <FuturaText>{club}</FuturaText>
          <FuturaText>{division}</FuturaText>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text: text })}
            value={this.state.text}
          />
          <TouchableOpacity onPress={() => this.toggleModal(true)}>
            <QRCode
              value={this.state.text}
              size={200}
              bgColor="#345962"
              fgColor="white"
            />
          </TouchableOpacity>
          <QRCodeModal
            showModal={showQRCodeModal}
            toggleModal={this.toggleModal}
            value={this.state.text}
          />
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
