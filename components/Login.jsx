import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Login = () => {
  return (
    <View>
      <View style={tw`bg-slate-100 my-5`}>
        <Text style={tailwind("text-center uppercase font-mono")}>
          Digital Produce Report Card
        </Text>
        <View style={tw`bg-white spacing-y-5 flex justify-center align-middle`}>
          <Text style={tailwind("text-center")}>login</Text>
          <View style={tw`text-center my-3 p-4`}>
            <TextInput placeholder="Username" />
          </View>
          <View style={tw`text-center my-3 p-4`}>
            <TextInput placeholder="User id" />
          </View>
          <View style={tw`text-center my-3 p-4`}>
            <TextInput placeholder="Password" />
          </View>
          <View style={tw`text-center my-3 p-4`}>
            <TouchableOpacity>
              <Text>Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
