# react-native-nativewind-boilerplate

Minimal Expo + NativeWind boilerplate configured to use `className` via NativeWind and `react-native-svg` logos.

Quick start

1. Install dependencies

```bash
npm install
# or
yarn install
```

2. Install peer native modules (if using Expo managed workflow they are installed via `expo install`)

```bash
npx expo install react-native-svg
```

3. Start the app (clear Metro cache)

```bash
EXPO_DEBUG=1 npx expo start --tunnel -c
```

If `--tunnel` fails due to ngrok version or account issues, use LocalTunnel as a fallback:

```bash
npx localtunnel --port 19000
```

Notes
- App uses `nativewind` Babel + Metro integration (see `babel.config.js` and `metro.config.js`).
- Logos/components:
  - `components/LogoReact.tsx` — React logo (react-native-svg primitives)
  - `components/LogoNativeWind.tsx` — NativeWind logo (react-native-svg primitives)
- The SVG asset `assets/logo-nativewind.svg` is kept for reference but the components render with `react-native-svg`.

Requirements
- Node >= 18
- Expo CLI

License
- MIT
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
