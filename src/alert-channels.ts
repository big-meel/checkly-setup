import { URL } from 'node:url'
import { EmailAlertChannel } from 'checkly/constructs'

const sendDefaults = { sendFailure: true }

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'alerts@acme.com',
  ...sendDefaults
})
