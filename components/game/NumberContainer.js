import { StyleSheet, View, Text } from 'react-native';

import Colors from '../../constants/colors';
import Dimens from '../../constants/dimens';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: Dimens.deviceWidth < 380 ? 12 : 24, // can do if check to set padding based on device width
        margin: Dimens.deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: Dimens.deviceWidth < 380 ? 28 : 36,
        //fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
    },
});