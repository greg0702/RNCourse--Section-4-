//Dimensions constant file

//Dimensions is react native built in API, JS object that can be use to do dimesion for different screen size
import { Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');
//get the device width and height and other sizes
//'window' is the size of the device excluding the status bar
//'screen' is the size of the device including status bar

const Dimens = {
    deviceWidth: deviceSize.width,
    deviceHeight: deviceSize.height,
    deviceFontScale: deviceSize.fontScale,
    deviceScale: deviceSize.scale,
};

export default Dimens;