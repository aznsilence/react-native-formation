/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import OneSignal from 'react-native-onesignal'

// OneSignal Init Code
OneSignal.setLogLevel(6, 0)
OneSignal.setAppId('d928b70d-d788-4606-80db-955a4fea3207')
// END OneSignal Init Code

// Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log('Prompt response:', response)
})

// Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent)
  const notification = notificationReceivedEvent.getNotification()
  console.log('notification: ', notification)
  const data = notification.additionalData
  console.log('additionalData: ', data)
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification)
})

// Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log('OneSignal: notification opened:', notification)
})

AppRegistry.registerComponent(appName, () => App)
