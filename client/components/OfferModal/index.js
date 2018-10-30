import React, { Component } from "react";
import { Image, Text } from "react-native";
import { styles } from "./style";
import ClosableModal from "../ClosableModal";

export default class Offer extends Component {
  componentDidMount() {}
  render() {
    const {
      name,
      image,
      description,
      percentage,
      showModal,
      toggleModal
    } = this.props;

    return (
      <ClosableModal showModal={showModal} toggleModal={toggleModal}>
        <Text>{name}</Text>
        <Image style={{ flex: 1 }} source={{ uri: image }} />
        <Text>{description}</Text>
        <Text>{percentage}</Text>
      </ClosableModal>
    );
  }
}
