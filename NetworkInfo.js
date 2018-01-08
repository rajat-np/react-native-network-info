'use strict';

import { NativeModules } from 'react-native';
import ExtIPModule from './fetch';
const { RNNetworkInfo } = NativeModules;

const NetworkInfo = {
  getSSID(ssid) {
    RNNetworkInfo.getSSID(ssid);
  },

  getBSSID(bssid) {
    RNNetworkInfo.getBSSID(bssid);
  },

  getIPAddress(ip) {
    RNNetworkInfo.getIPAddress(ip);
  },

  getIPV4Address(ip) {
    RNNetworkInfo.getIPV4Address(ip);
  },
  getExtIPAddress(ip) {
    ExtIPModule.getExtIPAddress(ip);
  }
}
module.exports = { NetworkInfo }
