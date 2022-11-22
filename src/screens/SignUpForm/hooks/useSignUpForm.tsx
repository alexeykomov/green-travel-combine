import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useRequestLoading} from 'core/hooks';
import {
  SignUpFormScreenRouteProps,
  SignUpFormScreenNavigationProps,
} from '../types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {signUpRequest} from 'core/reducers';

export const useSignUpForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

  const {
    params: {email},
  } = useRoute<SignUpFormScreenRouteProps>();
  const navigation = useNavigation<SignUpFormScreenNavigationProps>();

  const navigateToEmailValidation = useCallback(() => {
    navigation.navigate('CodeVerification', {email, isSignUp: true});
  }, [email, navigation]);

  const signUp = useCallback(() => {
    dispatch(signUpRequest({email, password}));
  }, [dispatch, email, password]);

  const {loading} = useRequestLoading(signUpRequest);

  return {
    loading,
    email,
    password,
    setPassword,
    navigateToEmailValidation,
    signUp,
  };
};
