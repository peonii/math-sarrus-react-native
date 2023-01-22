import { TextInput, Text, StyleSheet, View } from "react-native"
import { Coefficients } from "../App";

export const Equation: React.FC = (coef: Coefficients, setCoef: (n: Coefficients) => {}) => {
    function 

    return (
        <View style={styles.horizontal}>
            <TextInput 
            value={equationOne} 
            onChangeText={setEquationOne} 
            placeholder="0" 
            placeholderTextColor={'#444444'} 
            cursorColor={'#aaaaaa'}
            style={styles.input}
            />
            <Text style={styles.text}>
            x
            </Text>
            <Text style={styles.text}>
            {' + '}
            </Text>
            <TextInput 
            value={equationTwo} 
            onChangeText={setEquationTwo} 
            placeholder="0" 
            placeholderTextColor={'#444444'} 
            cursorColor={'#aaaaaa'}
            style={styles.input}
            />
            <Text style={styles.text}>
            y
            </Text>
            <Text style={styles.text}>
            {' + '}
            </Text>
            <TextInput 
            value={equationThree} 
            onChangeText={setEquationThree} 
            placeholder="0" 
            placeholderTextColor={'#444444'} 
            cursorColor={'#aaaaaa'}
            style={styles.input}
            />
            <Text style={styles.text}>
            z
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: '#cccccc',
    fontFamily: 'ArchivoBold',
    fontSize: 30,
    paddingHorizontal: 3,
  },
  horizontal: {
    flexDirection: 'row'
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Archivo',
    fontSize: 30
  }
});

