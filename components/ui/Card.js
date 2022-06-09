import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';
import Dimens from '../../constants/dimens'

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;



const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimens.deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //shadow for android (android-only)
        shadowColor: 'black', //shadow color used for ios (ios cannot use only elevation)
        shadowOffset: { width: 0, height: 2 }, //shadow offset control the offset of shadow to left and right
        shadowRadius: 6, //shadow radius controls how much a shadow expands
        shadowOpacity: 0.25, //controls how transparent shadow is
    },
});