import React, { Component } from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";
import { styles } from "./style";
import { FuturaText } from "../../components/styled-text";

export default connect(
  state => ({ stores: state.store.stores }),
  null
)(
  class Store extends Component {
    state = {
      latitude: this.props.stores[0].location.latitude,
      longitude: this.props.stores[0].location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
    render() {
      const { stores } = this.props;
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
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
                  latitude: this.state.latitude,
                  longitude: this.state.longitude
                }}
                title={"Sport Norge Os"}
                description={"Store"}
              />
            </MapView>
          }
          data={stores}
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
                  <FuturaText style={styles.percentage}>
                    {item.percentage}%
                  </FuturaText>
                  <FuturaText>{item.description}</FuturaText>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      );
    }
  }
);
