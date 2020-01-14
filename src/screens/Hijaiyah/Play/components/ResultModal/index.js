import React, { PureComponent } from "react"
import { View, Modal } from "react-native"
import Sound from 'react-native-sound'
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types';
import { ImagesPath, SoundsPath } from '../../../../../constants/index';

import styles from './styles';
import ReportBoard from '../ReportBoard';
import ResultBoard from '../ResultBoard';
import { widthPercentageToDP } from '../../../../../utils/Responsive';

import { connect } from "react-redux"
import { bindActionCreators } from "redux"


class ResultModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
    star: PropTypes.number.isRequired
  };

  static defaultProps = {
    score: 0,
    star: 0
  }

  sound = (source, timeOut) => {
    const s = new Sound(source, (e) => {
      if (e) {      
        console.log('error', e);
      } else {
        setTimeout(() => {
          s.play(() => {
            s.stop().release()
          });
        }, timeOut)
      }
    });
  }

  render() {
    let { visible, close } = this.props

    return (
      <Modal visible={visible} transparent={true} onRequestClose={close}>
        <View style={styles.backgroundShadow}/>

        <Animatable.View 
          ref={(res) => this.panel = res}
          style={{ 
            flex: 1, 
            width: widthPercentageToDP(200),
            flexDirection: 'row'
          }}
        >
          <ResultBoard { ...this.props } report={() => this.panel.transitionTo({ translateX: -widthPercentageToDP(100) })} />
          <ReportBoard { ...this.props } close={() => this.panel.transitionTo({ translateX: 0 })} />
        </Animatable.View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  hijaiyah: state.hijaiyah,
})

export default connect(
  mapStateToProps,
  null
)(ResultModal)