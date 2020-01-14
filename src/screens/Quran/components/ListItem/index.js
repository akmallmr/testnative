import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import styles from './styles';

const ListItem = (props) => {
  let { item, index, state, translation, navAya } = props
  let { active, selectedWord } = state
  let aya = item[0].aya

  return (
    <TouchableOpacity 
      onPress={()=>navAya('GOTO', aya)} 
      style={[ 
        styles.itemWrapper,  
        active ? styles.itemWrapperActive : {}
      ]}
    >
      <View style={{ flexDirection: 'row' }}>
        <ImageBackground 
          source={require('../../../../assets/images/icons/icon-number-ayah.png')} 
          style={styles.itemNumber}
        >
          <Text style={styles.itemNumberText}>{ aya }</Text>
        </ImageBackground>
        <View style={styles.itemContent}>
          { item.map((item, index) => {
            let { sura, aya, word, ar, en, id } = item
            // let wordSelected = active && index === selectedWord
            let wordSelected = false
            return <Text key={`item-aya-word-${sura}-${aya}-${word}`} style={[styles.itemText, wordSelected ? styles.itemTextActive : {} ]}>{ar+' '}</Text>
          })}
        </View>
      </View>

      <View>
        <Text style={styles.itemTextTranslation}>{ translation }</Text>
      </View>

    </TouchableOpacity>
  )
}

export default ListItem