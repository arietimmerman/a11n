---
title: Simplify Identity Management By Removing The Need For Application Accounts
date: 2016-12-08 20:47:18
excerpt: "Managing applications account cause major headaches for every authorization manager. Current solutions focus on insight and control. However, what if we simply remove the need for application account creation? Why do we need application accounts anyway?"
type: post
blog: true
tags:
    - Privilege
    - Access
    - Identity
---

Managing applications account cause major headaches for every authorization manager. Current solutions focus on insight and control. However, what if we simply remove the need for application account creation? Why do we need application accounts anyway?
The problem of user account management

Employees having many application accounts is not uncommon. At a minimum people need an account for logging into their computer. Very often, they also have accounts for accessing office and business applications. Both on-premise and in the cloud.

With a good single-sign on implementation, users will not realize they are using multiple accounts. However, single-sign one does not prevent applications from creating these local accounts. Applications use identity attributes provided by the identity provider - such as an username or a mail address - as a base for creating a locally stored account. Once an account has been created, it needs to be managed.

Single-sign on does not remove the need for managing user accounts. Identity management solutions still need to (1) create accounts when people join or move to a new position, and (2) disable or delete these account when someone leaves or moves to a position where these accounts are no longer needed.

Disabling the single-sign on account is not sufficient. As soon as someone leaves the company, every related application account should be disabled. This is because other accounts might still be usable due to long-lived login sessions. Moreover, many applications support other means of authentication which can be used to bypass the disabled single-sign on account. Also, license costs are often calculated based on the amounts of active user accounts. Another good reason to disable these accounts quickly once superfluous.

Managing all these user accounts is not simple. Current solutions accept the existences of many user accounts and therefore focus on insight and control. We should not accept this as being the best possible solution, but rather try to fix what is really broken.
If people only had one user account ...

User account management problems vanish if we did not create accounts in the first place. Identity management becomes a lot easier if people only had one user account.

There are three reasons why local user accounts are still being used.

First, software vendors do not enable single-sign on by default. Their first focus is on locally created accounts. They reinvent the wheel and build their own user management system and login procedures. What a waste of money! For the sake of security, user friendliness and cost efficiency it would be a whole lot better if their focus was more towards supporting identity management standards.

Second, single-sign technologies are primarily used for authentication. Not for authorization. Within most applications, different access rights exist. Traditionally, these access rights are also stored in the application its own database. A more modern approach would be to manage these authorizations centrally and transfer this authorization information over existing single-sign on protocols. Applications can store this information into the login session so it knows what restrictions apply to the subject in common.

Third, single-sign on providers do not provide sufficient information. Applications need more then just an username or a mail address from the identity provider. This can be fixed easily. All major identity providers include capabilities to include other attributes such a job title, department and division information.
Leverage single-sign on for identity management

Even though people do not register them at the café, the bar tender can very well determine whether someone is authorized to buy a beer. Even though I have never created an account at my local municipality, the customer assistant can confirm that I am who I claim to be, simply by asking my passport.

In many cases, there is no need for local user accounts in order to check if someone is authenticated and authorized.

Now single-sign on is becoming a commodity, it is time to leverage this functionality to remove the need for local user accounts. Until that time, consider the following.

    Use short-lived login sessions. This limits the time someone can use his local accounts after his central account gets disabled.
    Use short-enabled user accounts. Use just-in-time provisioning to automatically create local accounts. Disable these accounts after some hours of inactivity. Re-enable the user account after a new successful single-sign on.
    Implement single-sign out. Preferably over a back channel. This allows logging off all local user accounts as soon as someone their single-sign on accounts gets disabled.

All too often, we accept the status quo and focus on focus on optimizing existing processes. Sometimes, we have to stand still and rethink our current solutions, eventually converging towards the most ideal identity and access management solution. A step in the right direction would be to simplify identity management by removing the need for application accounts.