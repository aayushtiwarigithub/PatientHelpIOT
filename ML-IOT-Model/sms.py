# importing twilio
from twilio.rest import Client

# Your Account Sid and Auth Token from twilio.com / console
account_sid = 'AC519035eef7475f85f085d4a3e06a9119'
auth_token = '17819f334cb3459ef83a46a80e5e9898'

client = Client(account_sid, auth_token)

''' Change the value of 'from' with the number
received from Twilio and the value of 'to'
with the number in which you want to send message.'''
def sms():
    message = client.messages.create(
							from_='+16405002190',
							body ='Ben (Bed No. A-3) is critical.',
							to ='+917307053210'
						)

    return message.sid
