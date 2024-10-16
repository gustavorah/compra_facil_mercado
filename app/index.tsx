import { styled } from "nativewind";
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const Button = styled(TouchableOpacity);

  return (
    <View className="flex-1 justify-center items-center">
      <SafeAreaView>
        <Text className="text-center pb-2 text-2xl text-red-500">Login</Text>
        <TextInput
          className="border border-black rounded-lg p-2 w-64"
          placeholder="Email"
        />
        <TextInput
          className="border border-black rounded-lg mt-1 p-2 w-64"
          placeholder="Senha"
        />
        <Button 
          className="bg-blue-400 w-1/2 p-2 rounded-lg items-center justify-between"
        >
          <Text>Entrar</Text>
        </Button>
        
      </SafeAreaView>
    </View>
  );
}
