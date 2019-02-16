---
title:  Welcome to the future of the encrypted web 
date: 2015-11-04 20:47:18
excerpt: "Today, the organization Let’s Encrypt white-listed some of my domains in their beta program and sent me this welcome message. Now, I can make Let's Encrypt generate free HTTPS certificates to secure my web domains."
type: post
blog: true
tags:
    - Privilegs
    - Access
    - Identity
---

"Welcome to the future of the encrypted web". Today, the organization [_Let’s Encrypt_](https://letsencrypt.org/) white-listed some of my domains in their beta program and sent me this welcome message. Now, I can make Let's Encrypt generate free HTTPS certificates to secure my web domains.

Lets' Encrypt is a new certificate authority sponsored by organizations such as Cisco, Mozilla, and the Linux Foundation. Their goal is to make the web more secure by offering free and easy to use digital certificates.

By automatically issuing free HTTPS certificates - often referred to as SSL-certificates -  L_et’s Encrypt_ will make the web more secure, but it also highlights a major problem of online certificates: certificates say nothing about the trustworthiness of the site its owner and content.

> Certificates say nothing about the trustworthiness of the site's owner and content

Web browsers such as Internet Explorer and Firefox show a padlock-icon in the address bar when browsing to a website secured by digital certificates. People often think that the presence of a padlock icon is the only thing that matters for ensuring a website can be trusted. However, the reality is far from this.

A valid HTTPS certificate helps a website to look more legitimate, making people more likely to trust them. But although presenting a digital certificate it is a prerequisite for  getting trusted, it is not sufficient. Never trust a website solely for presenting a digital certificate.

> Never trust a website solely for presenting a digital certificate

A padlock icon in your browser ensures you are securely connected with a server that belongs to the the legitimate owner of the domain concerned. But it does not ensure that you are connected with the organization you intended to connect with. Nor does it ensure that the legitimate owner is a trustworthy company or individual. Nor does it say anything about the validity of the site's content.

Well, some certificate authorities offer certificates for which extensive verification of the requesting entity's identity is required, before the certificate is issued. The problem with these certificates is that most people do not know how to discriminate between these extended validation certificates and the regular domain validation certificates.

Anyhow, despite the problems with digital certificates there are good reasons to use them: HTTPS certificates ensure the communication between you and the organization behind the website is confidential. Your network traffic becomes encrypted!

> There is no longer an excuse to run websites over an unprotected network connection

There is no longer an excuse to run websites over an unprotected network connection. TLS should become the default method for communicating on the web.  Let's Encrypt is a great initiative and today me was given the possibility to try it out. I'll keep you posted!