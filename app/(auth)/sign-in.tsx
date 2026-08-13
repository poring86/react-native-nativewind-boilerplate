import { useAuth } from "@clerk/expo";
import { AuthView } from "@clerk/expo/native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import Constants from "expo-constants";
import { Button, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function SignInScreen() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const appOwnership = (Constants as any).appOwnership;

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/(home)");
    }
  }, [isSignedIn]);

  // If running inside Expo Go, native Clerk UI may not be available.
  const isExpoGo = appOwnership === "expo" || appOwnership === "guest";

  const hostedSignInUrl =
    process.env.EXPO_PUBLIC_CLERK_SIGNIN_URL || process.env.NEXT_PUBLIC_CLERK_SIGNIN_URL || "";

  const openHostedSignIn = async () => {
    if (!hostedSignInUrl) return;
    await WebBrowser.openBrowserAsync(hostedSignInUrl);
  };

  if (isExpoGo) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>
        <Text style={{ marginBottom: 12, textAlign: "center" }}>
          Expo Go detected. Abrindo fluxo web de autenticação (Hosted Sign-In).
        </Text>
        {hostedSignInUrl ? (
          <Button title="Abrir sign-in web" onPress={openHostedSignIn} />
        ) : (
          <Text style={{ color: "#666", textAlign: "center" }}>
            Variável `EXPO_PUBLIC_CLERK_SIGNIN_URL` não configurada. Defina a URL da
            Hosted Sign-In para usar o fallback web.
          </Text>
        )}
      </View>
    );
  }

  return <AuthView mode="signInOrUp" />;
}