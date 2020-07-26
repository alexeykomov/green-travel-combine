import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(118, 120, 118, 0.12)',
    height: 36,
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    fontSize: 20,
    lineHeight: 22,
    padding: 0,
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: '#6C7283',
    backgroundColor: '#6C7283',
    overflow: 'hidden',
  },
  cancelText: {
    marginLeft: 5,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: '#007aff',
  },
});

const crossHitClop = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
};

const hitSlop = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 6,
};

export {styles, crossHitClop, hitSlop};
