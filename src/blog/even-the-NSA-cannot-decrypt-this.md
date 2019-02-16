---
title:  Even The NSA Cannot Decrypt This Message 
date: 2015-04-07 20:47:18
excerpt: "Some think that the NSA is able to decrypt all of our network traffic and everything stored on our computers. Some think that spending billions on research and supercomputers eventually leads to the possibility of getting around any type of encryption. Some think secure encryption does not exist."
type: post
blog: true
tags:
    - Privilegs
    - Access
    - Identity
---

Some think that the NSA is able to decrypt all of our network traffic and everything stored on our computers. Some think that spending billions on research and supercomputers eventually leads to the possibility of getting around any type of encryption. Some think secure encryption does not exist.

They are wrong!

One of the simplest encryption methodologies cannot be cracked.  
Not by the NSA, not by anyone. Not now. Never. The method is named as Exclusive-OR encryption. It uses simple logic to encrypt a message with a special type of password known as the secret key.

> One of the simplest encryption methodologies cannot be cracked. Not by the NSA, not by anyone.

As we all know, digital information is stored in bits. A single bit is represented as either a 0 or a 1. For Exclusive-OR encryption, both the message and the secret key needs to be represented in bits.

Let us assume we want to encrypt a short message, for example the capital letter "M". The binary representation of this letter is 0100 1101. For encryption we need a secret key with the same length as our message, for example 1001 1100. It is important that this secret key is randomly generated.

In order to encrypt our message with our secret key we use a sequences of steps.

1.  Compare the first bit of the message with the first bit of the secret key.
2.  If these bits are equal, then the first bit of the resulting message is 0. If these bits are different, then the first bit of the resulting message is 1.
3.  Repeat this procedure for to the second, third and all following bits.

To encrypt our message "M" we take its binary representation and the secret key, and apply the rules. So, if we take the first bit of our message - a 0 - and the first bit of our secret key - a 1 - we find out that these two bits are different. According to the second step, the first bit of our resulting message is 1.

After having applied these rules for all bits in the message and the secret key, the encrypted message will be 1111 0001. This is known as the ciphertext. Even the NSA cannot decrypt this message.

Decryption is only possible if one shares the secret key with the recipient of the encrypted message. Surprisingly, the recipient can apply the same logic as the sender used for encrypting. That is, he must compare the first bit of the ciphertext - a 1 - with the first bit of the secret key - also a 1 - and note these are equal. The second step of the procedure states that in this case the first bit of our decrypted message is 0.

It is easy to repeat these steps for the following bits to retrieve back the original message "M".

> Exclusive-OR encryption is very secure when applied correctly.

Exclusive-OR encryption is very secure when applied correctly. One the one hand, the encrypted message will never contain meaningful patterns because of the randomly generated secret key. Therefore the encrypted message is not vulnerable to regular cryptanalysis attacks. On the other hand, brute force attacks are useless. Invalid keys might lead to human readable messages, but an attacker will never know if the original message has been enclosed.

Can we conclude perfect security exists? Well, there is one major caveat. While most encryption methodologies use relatively short secret keys, Exclusive-OR encryption requires the message and the secret key to be equal in length. Therefore it is just as hard to securely share the secret key as it is to share the original message. In practice, the most secure option is to store a lengthy secret key on an external hard drive, unplug the drive and transport it manually to the recipient of the message. Rather cumbersome.

Perfect security exists. At least in theory. In practice it can take quite an investment to communicates securely.