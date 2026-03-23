import { Show, useClerk, useUser } from "@clerk/expo";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <View className="flex-1 p-5 pt-14 gap-4">
      <Text className="text-2xl font-bold">Welcome!</Text>
      <Show when="signed-out">
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </Show>
      <Show when="signed-in">
        <View className="flex justify-start items-center flex-row  gap-4">
          <Image
            source={{ uri: user?.imageUrl }}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
          <View>
            <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
            <Text>Name {user?.fullName}</Text>
          </View>
        </View>

        <Pressable
          className="bg-[#0a7ea4] py-3 px-6 rounded-lg items-center"
          onPress={() => signOut()}
        >
          <Text className="text-[#fff] font-semibold">Sign out</Text>
        </Pressable>
      </Show>
    </View>
  );
}
