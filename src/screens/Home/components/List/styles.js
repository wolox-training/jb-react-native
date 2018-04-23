import { AppRegistry, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  item: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row', 
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  finalItem: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export default styles;
