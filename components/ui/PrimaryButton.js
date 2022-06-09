import { StyleSheet, View, Text, Pressable } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressedIos] : styles.buttonInnerContainer} //can pass array of style objects
                onPress={onPress} 
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden', //ensure any effect from inside container go outside container will be hidden 
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: Colors.accent500,
        textAlign: 'center',
    },
    pressedIos: {
        opacity: 0.75,
    },
});