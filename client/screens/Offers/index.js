import React, { Component } from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { FuturaText } from "../../components/styled-text";
import { Svg } from "expo";
import Offer from "../../components/offer-modal";
import { connect } from "react-redux";
import withTabBarDetection from "../../components/with-tab-bar-detection";

const OfferPercentage = props => (
  <Svg
    height={50}
    width={50}
    style={{
      position: "absolute",
      top: 0,
      right: 0
    }}
  >
    <Svg.Path d="M 0 0 L 50 0 L 50 50 z" fill="#e86645" />
  </Svg>
);

export default withTabBarDetection(
  {
    headerTitle: "Offers"
  },
  class Offers extends Component {
    state = {
      itemData: {},
      showModal: false
    };
    toggleModal = show => {
      this.setState({ showModal: show });
    };
    render() {
      const { itemData, showModal } = this.state;
      const { offers } = this.props;

      const { navigate } = this.props.navigation;
      return (
        <View>
          <FlatList
            initialNumToRender={6}
            data={offers}
            onScroll={this.props.onScroll}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.offer_container}
                onPress={() =>
                  this.setState({ showModal: true, itemData: { ...item } })
                }
              >
                <View style={styles.offer}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <View style={styles.offer_content}>
                    <FuturaText>{item.key}</FuturaText>
                    <OfferPercentage />
                    <FuturaText style={styles.percentage}>
                      {item.percentage}%
                    </FuturaText>
                    <FuturaText>{item.description}</FuturaText>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <Offer
            showModal={showModal}
            toggleModal={this.toggleModal}
            {...itemData}
          />
        </View>
      );
    }
  },
  state => ({
    offers: state.offer.offers
  })
);
