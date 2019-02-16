---
title: Do Not Blindly Trust Graphical User Interfaces 
date: 2015-04-07 20:47:18
excerpt: "We invest heavily in our fight against phishing: we teach our customers to keep their passwords secret; we install spam filters to prevent phishing emails from reaching our employees and we run courses to create awareness of spear phishing. We even have protected all our web applications with digital certificates."
type: post
blog: true
tags:
    - Privilegs
    - Access
    - Identity
---

We invest heavily in our fight against phishing: we teach our customers to keep their passwords secret; we install spam filters to prevent phishing emails from reaching our employees and we run courses to create awareness of spear phishing. We even have protected all our web applications with digital certificates.

We tend to believe that we have provided the means to be able to securely use our online services and that little common sense is sufficient to withstand phishing attacks.

However, people have not only been phished because of inadvertence. They have been misled because they sincerely believed it was you asking for their password and credit card details. Successful phishing attacks are the result of your inability to be truly distinguishable from fraudsters.

> Your inability to be truly distinguishable from fraudsters leads to phishing. 

## But they can trust us, right?

Of course, you are trustworthy. But due to the fact that many interact with your organization indirectly - via graphical user interfaces - things get complicated. A computer screen might show things that look real but are not.

> Computer screens might show things that look real but are not. 

It is easy to try this out. Take a screenshot right now and open the resulting image full-screen. Now when a colleague of you takes a look at your screen, he will think you are browsing LinkedIn, not realizing that in reality he is looking at a picture.

Now, it is difficult to do phishing by showing someone a screenshot of a website. However, more sophisticated tricks exist.

## Do not judge by appearances

You might think that a professional looking website with a great logo and pictures of smiling people help to gain trust. Sure, it does. But a fraudster can copy all of this easily using a single command.

Fake interfaces can be convincing. Not all phishers live in Nigeria and use scams emails written in broken English. More and more phishing websites are (near to) exact copies of the original organization its website and are written in the victim his native language.

Online services cannot be trusted because its design reflects your company its brand identity. You may be looking at a copy.
Digital certificates are prone to misinterpretation

Digital certificates - such as used in SSL and TLS connections - do provided some help to prove an organization its identity. However, for the average person it is difficult to verify whether a connection is protected using digital certificates and that these certificates belong to the party you want to interact with.

> The padlock icon by itself does not guarantee a secure connection. 

Most web-browsers use a small padlock in the address bar to indicate a secure connection has been set up (picture a). However, the padlock icon by itself does not guarantee you are connected to the intended organization (picture b).
In addition, a fraudster could present the padlock icon in the title bar (picture c) or anywhere else on the screen (picture d) to make the visitor believe his connection is secured while in fact the connection is vulnerable to man-in-the-middle attacks.

Moreover, a web-browser warns when a digital certificate cannot be verified but will not warn when you try to connect to a website not protected with public and private keys.

Digital certificates allow machines to trust each other but do not automatically transfer this trust to business-to-business relationships

# Mobile apps cannot benefit from indicators of a secure connection

Mobile platforms provide mobile apps no standardized way to inform the user about whether or not connections are set up securely. This is a real shortcoming. When doing mobile banking using a mobile app, you can only hope you have installed the correct app and your bank has taken care of secure connections properly.

> Mobiles apps are can serve as an excellent attractant to tempt potential victims. 

It is easy to create an app that looks exactly like a genuine banking app. For a criminal, there is no need to invest in making your victims believe that their connection is secured. Even in legitimate apps there is no way for users to check with whom their are connected. A simple padlock icon as used in web-browser is simply non-existent for apps on Android, iOS and Windows Phone.

Mobiles apps are can serve as an excellent attractant to tempt potential victims.

# Low cost authentication hardware as a solution

The Rabobank - a Dutch banking organization - recognized the difficulty to trust regular computer screens. The company introduced the Rabo Scanner, a new token device with an integrated display for providing contextual information. This display provides great certainty that a user logs in to the right website and that the payment he approves is the payment he intents to make.

I believe that such low-cost authentication hardware makes organizations more phishing-resistant. I predict that soon similar devices like the Rabo Scanner will enter the market. Possibly, providing extra security and user friendliness by benefiting from Bluetooth, NFC and USB-connectors.

All too often, it is argued that user interface design is about aesthetics in the first place. User interface design is just as well about security. After all, for our digital services the graphical user interface is the primary channel for communicating trust to customers, clients and employees, as well as to make our services truly distinguishable from phishing attempts.