import React, { Component } from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";
import { styles } from "./style";
import { FuturaText } from "../../components/styled-text";
import withTabBarDetection from "../../components/with-tab-bar-detection";

export default withTabBarDetection(
  {
    headerTitle: "Stores"
  },
  class Store extends Component {
    state = {
      latitude: this.props.stores[0].location.latitude,
      longitude: this.props.stores[0].location.longitude,
      latitudeDelta: 0,
      longitudeDelta: 0
    };
    render() {
      const { stores } = this.props;
      const { latitude, longitude } = this.state;
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
          ListHeaderComponent={
            <MapView
              style={{
                width: "100%",
                height: 200
              }}
              initialRegion={{
                ...this.state
              }}
            >
              <Marker
                coordinate={{
                  latitude,
                  longitude
                }}
                title={"Sport Norge Os"}
                description={"Store"}
              />
            </MapView>
          }
          data={stores}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({
            item: {
              store,
              categories,
              image,
              description,
              location: { latitude, longitude },
              street_address
            }
          }) => (
            <TouchableOpacity
              style={styles.offer_container}
              onPress={() =>
                this.setState({ showModal: true, latitude, longitude })
              }
            >
              <View style={styles.offer}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.offer_content}>
                  <FuturaText>{description}</FuturaText>
                  <FuturaText>{street_address}</FuturaText>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      );
    }
  },
  state => ({ stores: state.store.stores })
);
