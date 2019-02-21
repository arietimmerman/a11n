# Identity Architecture

A good architecture is characterized is durable, useful and beautiful. An identity solution architecture should not focus on issues of the past, but even more so on challenges to come.

Many identity solution architectures focus on security. Of course this is a major component and understandable because identity projects are often compliancy driven. Yet, proper security is never reached without putting user experience in the center.

If you cannot use an identity solution frictionless, it is doomed to fail in the near future. People - dedicated to fulfill the job the best they can - will work around non user friendly security measures.

The security department should never act as a business prevention department. On the contrary! It should equip the organizations with proper breaks so it can drive even faster.

Examples of solutions that - when implemented correctly - improve both security and user experience are single-sign on, automatic application account and access provisioning, passwordless authentication, and push-and-swipe access request approvals.

## Modeling

### ArchiMate

### NORA

## Architecture Certifications

A good architecture is not built in isolation but roots in best practices and knowledge as provides with certifications.

### TOGAF

>  Open Group Architecture Framework (TOGAF) is a framework for enterprise architecture that provides an approach for designing, planning, implementing, and governing an enterprise information technology architecture

### CISSP

CISSP stands for _Certified Information Systems Security Professional_. CISSP teaches how to effectively design, implement and manage cybersecurity solutions.

### SABSA

Lesser know than TOGAF and CISSP.

> SABSA is a proven methodology for developing business-driven, risk and opportunity focused Security Architectures at both enterprise and solutions level that traceably support business objectives.

## Products

Check the [product overview](/products/) for a list of products with know thoroughly.

## SCIM

SCIM is the simple cloud identity management protocol.

In plain english, it is a protocol to manage user and group data. More and more identity management products support this standard - including SailPoint, iWelcome and Okta. This greatly simplifies aggregation and provisioning of user data.

SCIM 2.0 is defined in [rfc7643](https://tools.ietf.org/html/rfc7643) and [rfc7644](https://tools.ietf.org/html/rfc7644).

## OAuth

OAuth is the protocol for letting clients retrieve resource owner authorization for accessing resources on a resource server.

In layman's terms, it's the way to go for API protection. OAuth does not provide much control over the authentication process and does not provide much user information. For that matter, an extension for OAuth has been created: OpenID Connect.

## OpenID Connect

OpenID Connect is an extension to OAuth 2.0 and adds an identity layer to it. The most primary additions of OpenID connect is the userinfo-endpoint and the id_token.

With OpenID Connect you can now authenticate the user, instead of only retrieving user approval (authorization).

## SAML

SAML is nowadays often seen as something from the past. Though security wise it is still very good. It is not considered the most user friendly protocol to implement.

It is a lot easier to work with OpenID Connect. 

## FIDO

The FIDO U2F Windows Hello

