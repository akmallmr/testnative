import React, {Component} from 'react';
import {
  View,
  FlatList
} from 'react-native';

import { ListItem } from '../index'

import styles from './styles';

export default class AyahTab extends Component {

  constructor(props) {
    super(props)

    Ayah_Tab = this
  }

  renderItem = ({item, index}) => {
    // console.log({item, index})
    let { state, translationList, navAya } = this.props
    let { selectedAya, selectedWord, isPlaying } = state
    let itemData = item[0]
    let translation = translationList[itemData.sura][itemData.aya-1].en_sahih
    let active = itemData.aya === selectedAya
    // console.log({itemData, active})

    return (
      <ListItem
        state={{ active, selectedWord }}
        navAya={navAya}
        item={item}
        index={index}
        translation={translation}
      />
    )
  }

  render() {
    let { data } = this.props

    return (
      <View style={styles.tabContent}>
        <FlatList
          ref={(ele) => this.listAya = ele}
          keyExtractor={(e) => 'item-aya-'+e[0].sura+'-'+e[0].aya}
          style={{ flex: 1 }}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  scrollToIndex = (index) => {
    this.listAya.scrollToIndex({
      animated: true,
      index: index,
      viewPosition: 0
    })
  }
}