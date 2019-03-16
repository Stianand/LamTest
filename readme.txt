{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf200
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 **EDIT**\
    \
I made the index.js. Now I'm getting some errors with that:    \
    \
    npm ERR! code ELIFECYCLE\
    npm ERR! errno 1\
    npm ERR! myapp@2.2.1 start: `node index.js`\
    npm ERR! Exit status 1\
    npm ERR! \
    npm ERR! Failed at the myapp@2.2.1 start script.\
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.\
    npm WARN Local package.json exists, but node_modules missing, did you mean to install?\
   \
The index.js file looks like this. The only thing I want to be able to do is to implement e-mail verification on my Parse server    \
    \
    var server = ParseServer(\{\
      ...otherOptions,\
      // Enable email verification\
      verifyUserEmails: true,\
      // The public URL of your app.\
      // This will appear in the link that is used to verify email addresses and reset passwords.\
      // Set the mount path as it is in serverURL\
      publicServerURL: 'http://myapp.herokuapp.com/parse',\
      // Your apps name. This will appear in the subject and body of the emails that are sent.\
      appName: 'myapp',\
      // The email adapter\
      emailAdapter: \{\
        module: 'parse-server-simple-mailgun-adapter',\
        options: \{\
          // The address that your emails come from\
          fromAddress: 'parse@example.com',\
          // Your domain from mailgun.com\
          domain: 'domainfrommailgun.mailgun.org',\
          // Your API key from mailgun.com\
          apiKey: 'API key from mailgun',\
        \}\
      \}\
    \});\
        }