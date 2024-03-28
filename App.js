import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/button';
import ImageViewer from './components/imageViewer';



const PlaceholderImage = require('./sticker-smash-assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
       <ImageViewer placeholderImageSource={PlaceholderImage} />
       
      </View>

      <View style={styles.footerContainer}>
      <Button theme="primary" label="escolha a foto" />
        <Button label="escolha a foto" />
        <Button label="use a foto" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#0B0B61',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

});




