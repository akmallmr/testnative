import { StyleSheet } from "react-native"
import Metrics from "../../utils/Metrics"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15
  },
  content: {
    paddingVertical: Metrics.screenWidth * 0.02
  }
})

export default styles
