import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { string } from 'prop-types';

const styles = StyleSheet.create({
  headerButton: {
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center'
  },

  swipeButton: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export class IconButton extends PureComponent {
  render() {
    const { iconName, style, onPress } = this.props
    return (
      <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress}>
        <Text>{iconName}</Text>
      </TouchableOpacity>
    )
  }
}

export class AddButton extends PureComponent {
  static propTypes = {
    iconName: string
  }
  static defaultProps = {
    iconName: 'add'
  }

  render() {
    const { iconName, onPress } = this.props;
    return (
      <IconButton
        style={styles.headerButton}
        iconName={iconName}
        color="white"
        onPress={onPress}
      />
    )
  }
}

export class MenuButton extends PureComponent {
  render() {
    const { style, onPress } = this.props
    return (
      <IconButton
        style={style}
        iconName="more"
        color="black"
        onPress={onPress}
      />
    )
  }
}

export class SaveButton extends PureComponent {
  render() {
    const { style, onPress } = this.props
    return (
      <IconButton
        style={style}
        iconName="save"
        color="black"
        onPress={onPress}
      />
    )
  }
}
