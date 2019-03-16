var server = ParseServer({
  ...otherOptions,
  // Enable email verification
  verifyUserEmails: true,
  // The public URL of your app.
  // This will appear in the link that is used to verify email addresses and reset passwords.
  // Set the mount path as it is in serverURL
  publicServerURL: 'http://lamworkappserver.herokuapp.com/parse',
  // Your apps name. This will appear in the subject and body of the emails that are sent.
  appName: 'lamworkapplication',
  // The email adapter
  emailAdapter: {
    module: 'parse-server-simple-mailgun-adapter',
    options: {
      // The address that your emails come from
      fromAddress: 'parse@example.com',
      // Your domain from mailgun.com
      domain: 'sandbox4bfa67a8763e4457b8e3fa96b2829bd6.mailgun.org',
      // Your API key from mailgun.com
      apiKey: 'acb0b40c-ac5dd87b ',
    }
  }
});