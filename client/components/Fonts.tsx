import { StyleSheet } from 'react-native';
import { Text, TextProps } from './Themed';

export function H1(props: TextProps) {
  const { style, ...otherProps } = props;
  return <Text style={[styles.h1, style]} {...otherProps} />;
}

export function Body1(props: TextProps) {
  const { style, ...otherProps } = props;
  return <Text style={[styles.body1, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body1: {
    fontSize: 14,
  }
});
