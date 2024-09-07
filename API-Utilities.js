// Service Account Setup

// Run this function once to set the credentials in script properties
function initialize() {
  setServiceAccountCredentials();
}

// Function to set service account credentials in script properties
function setServiceAccountCredentials() {
  var json = { 
    "type": "service_account",
    "project_id": "zodiaccurate",
    "private_key_id": "32dbd434373dbf14451ed404ea655afdbe7db4f4",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGAGtFHICIskwm\n6nxV39zgNhGgYCxnZhI0gu8/iV5MH6x8oHnaPI5WVR+su5r+fno33T8lbaXYt6qY\nAaB2rREqTwZwb71mCCS7Ftpz2xDo2fQ9Sz0hh2bhOTPiLktZQlBDiaOe+AOHDKF0\nFXSSKrVXuxTLJPBbCYiCcnGNyfFXagqgjNvMF+DaKkUAHX/X/RfJpWlV7hwlGZRH\nP3qSQNvdq9lUcvRb5msNBGtez2x1BNYgk6k3ym7AV8/bkc34KD2Z+cKFXGlLuiDk\nVD5y19Uq3RcpT1g96R4CbdjnM5rWWhhPI+2rpH8OG1DLAdtEN5YU/hlhZ5rwj5y8\ntDMOUwbTAgMBAAECggEAA+W6NtAKz6YCzblL3Tzc0iT+T9PUy+w8a4AwSWXgz0rI\nUGOwQlVyz8w5JWND98JxkWvvdEMmQo/K8dcGW4+oiNapX8kzRzDd2Djo7+LeAFdZ\n8WLrvx81LTW9CbSzkvw1LD8nU1e6agwbmXdapg3lJ+bsz9rYSFJ1t2udRJc3Autw\ng3mk4As6oO7S2H3Rj10qsDqj/LI01vWDgRY+usJ/QX3buvvRaCXrqXws9FocdLGl\n1DIKeGf9H5lM0XL15nPVCb/9nVCWYtn1FOVvd9+V8sz05pBCUvNNg1FmBPQ5jxch\nbcTp7KJ2+EsJuBMZX1W5taUQRhSXVIxOiTncP8wTgQKBgQD7N0+kz6aaG9PS7Nj9\n/f6rN9XDfIrfcVFgEI3/4fdbKiZ0ValUJkAv7wIzozmlO0slOblPkvL8IlxmeyT9\n0C8WN07FCFoDK21lTAkg3NA/jtcvcr1Bs8XKNeZOHzC3XErSMGzTxFJP4k+mbGK9\ny+w+Ha2CBtYgF7caTxRA+gIWYQKBgQDJxa9zxgvu/yQVVjY1aYbyccuizjxu4I/A\nmMbyv+tvPWvAHXA++dndkSRDiPem6rjLINN4g2kz/Sdiew+rwgX0qk1yth9ukone\nWkZHy2bgJlx9CuFKsLYWjaN04cLi0aM22/fbSHvv6eijATAX08KaX4u+0RHLlqK2\ng8XBVCcBswKBgD1J+EdYVeghQ+Og3yvQbPJu09s2plbvOZA7WbmE8qkuNmWJhJ9A\nGcbYA+x/NRAn0CSL2bcdPeTfqTVjc9nskaBU7AXMDNHbJXxiOZPn63KmMb+kuaGu\n72FvFvoWR/dkL+jp4ZMkwYQ1zYLnzItLlh5tdShU7Ka1wnlLs8BKfnnhAoGBAJhk\nYGGWoQi/VyduV777ltqiK+Uo0ugDX09dlFVfspfv0ePl2BMYbf40UylW14UQHsX8\nYvvQdLK5bveobmuRPSJPRfNvrkm7D7oKgK5U57w//PbMMuBQmxZpn5z1rlXVc+pJ\nNOg/1KudBQGoMgStAXvK0icqjMAxY29qEwAzaMqVAoGBAPBDJTBhqwrr3igvXiZx\n4v5zi8A6Ow02zyh8jkqyklp/5ANvrHkR/cPMuOTq9HIHLJacAVv6cP+PjJZ3lMSa\nR5QR9js7pBIwckH/F7WLxPXS9+tOonE0BVpgLToERs/Eq/RRGCThBOTa+Jl0Hov/\nfXhD7fxST1W4ZMbEVUE1U0Bg\n-----END PRIVATE KEY-----\n",
    "client_email": "chatgpt-zodiaccurate-sheets-ac@zodiaccurate.iam.gserviceaccount.com",
    "client_id": "101383802072018488779",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/chatgpt-zodiaccurate-sheets-ac@zodiaccurate.iam.gserviceaccount.com"
  };
  
  PropertiesService.getScriptProperties().setProperty('private_key', json.private_key);
  PropertiesService.getScriptProperties().setProperty('client_email', json.client_email);
}

// Function to configure the OAuth2 service
function getOAuth2Service() {
  return OAuth2.createService('GoogleServiceAccount')
    .setTokenUrl('https://oauth2.googleapis.com/token')
    .setPrivateKey(PropertiesService.getScriptProperties().getProperty('private_key'))
    .setIssuer(PropertiesService.getScriptProperties().getProperty('client_email'))
    .setPropertyStore(PropertiesService.getScriptProperties())
    .setScope('https://www.googleapis.com/auth/spreadsheets');
}
