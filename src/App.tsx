import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';
import SvgUri from 'react-native-svg-uri';

// Import Logo
// import Logo from './assets/logo/tailwind';

const App: React.FC = () => {
  const [numberPhone, setNumberPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSignUp = () => {
    console.log('Sign Up');
  };

  const handleLogin = () => {
    console.log('Login');
  };

  // Show Hidden Password
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      {/* Logo  */}
      <View>
        <Image
          source={require('./assets/logo/tailwind-css-logo.png')}
          style={tw`rounded-full h-36 w-36 items-center`}
        />
      </View>

      <Text style={tw`text-2xl text-white mb-8`}>Welcome!</Text>
      <TextInput
        style={tw`w-80 h-12 border border-gray-500 rounded-full px-4 mb-4 text-black`}
        placeholder="No. HP"
        placeholderTextColor={'#aaab'}
        value={numberPhone}
        onChangeText={text => setNumberPhone(text.replace(/[^0-9]/g, ''))}
        keyboardType="phone-pad"
      />

      <View style={tw`relative w-80`}>
        <TextInput
          style={tw`w-full h-12 border border-gray-500 rounded-full px-4 mb-4 pr-12 text-black`}
          placeholder="Password"
          placeholderTextColor={'#aaab'}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        {/* Tombol Hide/Show Password */}
        <TouchableOpacity
          style={tw`absolute top-0 right-0 bottom-0 justify-center mr-4`}
          onPress={toggleShowPassword}>
          <Text style={tw`text-sm text-blue-900`}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row`}>
        <TouchableOpacity
          style={tw`bg-blue-500 w-36 h-12 rounded-full justify-center items-center mb-4 mr-4`}
          onPress={handleSignUp}>
          <Text style={tw`text-white text-lg font-bold`}>Daftar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`bg-blue-500 w-36 h-12 rounded-full justify-center items-center mb-4`}
          onPress={handleLogin}>
          <Text style={tw`text-white text-lg font-bold`}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
