
# Integrating SailPoint products

SailPoint is an identity and access management firm located in Austin, focusing on identity and access governance software.

Their primary products are SailPoint IdentityIQ, SailPoint SecurityIQ and SailPoint IdentityNow.

We have experience with implementing SailPoint IdentityIQ and SecurityIQ, and have helped customers preparing for migration to SailPoint IdentityNow.

## SailPoint IdentityIQ

SailPoint IdentityIQ (IIQ) is a mature product and know to be used in many global enterprises.

### Rules

One of the more powerful features of IIQ is the Rules-runner- It allows customizing many aspects of the product by writing a few lines of BeanShell.

While this is a great feature, it easily gets out of hand. The Beanshell scripts become overly complex and difficult to control.

Writing code is not difficult. But writing good good is. At a11n we know when to use Rules and when to choose an alternative solution. And if it is required to apply some scripting, we ensure the code is rock solid, easily maintainable and documented.

### Connectors

In every identity product implementation trajectory you will eventually stumble upon this problem: the technology does not have the possibility to aggregate (import) from or to provision (export) to one of your applications.

IIQ provides many out of the box connectors present, but in almost every IIQ implementation trajectory you will need to introduce new or modify existing connectors.

a11n helps to identity the possibility for aggregating from and provisioning to non-supported applications.

## SailPoint IdentityNow

SailPoint IdentityNow is like IdentityIQ but it runs in the cloud. It doesn't have all the possibilities of IdentityIQ, but the products gets more and more mature.

## SailPoint SecurityIQ

SailPoint's solution for data access governance. It provides insight in who has access to what _unstructured data_. That is, access to file shares, SharePoint files, Microsoft One Drive and other places where unstructured data is stored.

You can integrated SailPoint SecurityIQ with IdentityIQ and IdentityNow.