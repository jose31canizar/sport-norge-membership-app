import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import QRCode from "react-native-qrcode";
import { styles } from "./style";
import { withNavigation, DrawerActions } from "react-navigation";
import { FuturaText } from "../../components/styled-text";
import { data } from "../../offers-data";
import Carousel from "react-native-snap-carousel";
import QRCodeModal from "../../components/qr-code-modal";
import { Constants, Svg } from "expo";
import { connect } from "react-redux";
import HamburgerIcon from "../../components/hamburger-icon";
import { Icon } from "expo";

const Arrow = props => (
  <Svg
    height={25}
    width={16}
    transform={[{ rotate: "-90deg" }]}
    style={{
      marginLeft: "auto",
      position: "absolute",
      right: 0
    }}
  >
    <Svg.Path
      d="M13.6 11.6L9 16.2V1.3c0-1.5-2.3-1.5-2.3 0v14.9l-4.6-4.6C1 10.5-.6 12.2.5 13.2l6.6 6.6c.4.4 1.1.4 1.6 0l6.6-6.6c1-1-.7-2.6-1.7-1.6z"
      fill="white"
    />
  </Svg>
);

const MemberService = withNavigation(({ navigation, name, route }) => (
  <TouchableOpacity
    style={[styles.member_service, styles.shadow]}
    onPress={() => navigation.navigate(route)}
  >
    <Image
      style={styles.member_service_image}
      source={require("../../assets/images/vikafjell-bryggen.png")}
    />
    <FuturaText style={styles.member_service_name}>{name}</FuturaText>
    <Arrow />
  </TouchableOpacity>
));

const FeaturedOffer = props => (
  <View style={[styles.featured_offer, styles.shadow]}>
    <Image source={{ uri: props.image }} style={styles.featured_offer_image} />
    <View
      style={[
        {
          position: "absolute",
          borderRadius: "50%",
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          bottom: 55
        },
        styles.shadow
      ]}
    >
      <Icon.Ionicons name="ios-home-outline" size={26} color="orange" />
    </View>
    <View style={styles.featured_offer_caption}>
      <FuturaText style={styles.h2}>{props.percentage}% rabatt</FuturaText>
      <FuturaText styles={styles.h3}>{props.domain}</FuturaText>
    </View>
  </View>
);

export const HeaderLeftIcon = connect(
  null,
  dispatch => ({
    openDrawer: () => dispatch(DrawerActions.openDrawer()),
    closeDrawer: () => dispatch(DrawerActions.closeDrawer())
  })
)(props => (
  <HamburgerIcon
    openDrawer={props.openDrawer}
    closeDrawer={props.closeDrawer}
  />
));

export default class HomeScreen extends React.Component {
  state = {
    text: "http://facebook.github.io/react-native/",
    showQRCodeModal: false
  };
  static navigationOptions = {
    title: "SPORT NORGE",
    headerLeft: <HeaderLeftIcon />,
    headerTitleStyle: { color: "white" },
    headerStyle: { backgroundColor: "black" }
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
    const club = "IL Bjarg";
    const divisions = ["Fotball", "Håndball", "Friidrett"];
    const services = [
      {
        name: "Offers",
        route: "Offers"
      },
      {
        name: "Your Benefits",
        route: "Offers"
      },
      {
        name: "Stores",
        route: "Stores"
      }
    ];
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FuturaText style={styles.h3}>Ditt medlemsbevis</FuturaText>
        </View>
        <View style={[styles.qr_code_container, styles.shadow]}>
          <View style={styles.caption}>
            <FuturaText style={styles.h1}>{club}</FuturaText>
            <View
              style={{
                borderBottomColor: "black",
                marginVertical: 10,
                width: "50%",
                borderBottomWidth: 2
              }}
            />
            {divisions.map((division, i) => (
              <FuturaText style={styles.h3}>{division}</FuturaText>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => navigate("QRCodeViewer", { text: this.state.text })}
          >
            <QRCode
              value={this.state.text}
              size={120}
              bgColor="#345962"
              fgColor="white"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10
          }}
        >
          <FuturaText style={styles.h3}>
            Du har følgende medlemsfordeler
          </FuturaText>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.featured_offers}
          data={data}
          renderItem={({ item }) => <FeaturedOffer {...item} />}
          keyExtractor={(item, i) => i.toString()}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10
          }}
        >
          <FuturaText style={styles.h3}>Medlemstilbud November</FuturaText>
        </View>
        <FlatList
          style={styles.member_services}
          data={services}
          renderItem={({ item }) => (
            <MemberService name={item.name} route={item.route} />
          )}
        />
      </ScrollView>
    );
  }
}

// <Carousel
//           slideInterpolatedStyle={(index, animatedValue, carouselProps) => {
//             return {
//               opacity: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1],
//                 outputRange: [0, 1, 1],
//                 extrapolate: "clamp"
//               })
//             };
//           }}
//           containerCustomStyle={styles.featured_offers}
//           data={data}
//           renderItem={({ item }) => <FeaturedOffer {...item} />}
//           sliderWidth={width}
//           itemWidth={width * 0.45}
//           keyExtractor={(item, i) => i.toString()}
//         />
