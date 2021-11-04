# Azure AD connector for SailPoint IdentityIQ

Azure Active Directory (Azure AD) is the cloud-based identity and access management service from Microsoft. It is a key component for signing in your employees and to manage access to resources.

If you have a SailPoint product - IdentityIQ or IdentityNow - you may already have connected it to your Azure AD environment.  
SailPoint provides an out-of-the-box connector which offers some functionalities. But if you have ended up here, you likely have encountered its limitations.

We have an __improved connector__ that overcomes these limitations.

<Button />

## Feature Improvements

The out-of-the-box SailPoint connector supports the following.

* Manage users
* Manage group memberships
* Manage Azure AD role memberships

Our connector adds the following features

* Manage application roles
* Manage guest users
* Read applications
* Read application API permissions
* Hybrid environment support

The Improved Azure AD connector extends the standard SailPoint connector. It integrates seamlessly in your existing installation. Nothing needs to be migrated. The connector is provided as a plugin.

## Features

### Manage application roles

The ability to create and assign application roles is a great feature in Azure AD. In an (on premise) Active Directory it was only possible to use groups. In Azure AD one can create application roles per connected application. This greatly improves authorization management and benefits visibility.

With our improved connector one can aggregate all application roles from all applications, and in turn manage application role memberships from SailPoint IdentityIQ or SailPoint IdentityNow.

### Manage guest users

External hires can be on-boarded in Azure AD as guest-users. This allows third parties to use their own company login credentials to access resources within your organization. This benefits both user experience and security.

Our improved connector allows creating guest users and managing all of its group and application role memberships.

### Read applications

Often it is forgotten to manage the list of applications in Azure AD. But applications are principals with access to resources. It should be ensured owners are assigned to applications. Moreover, life cycle management should also apply to applications.

Our connector allows reading in the list of applications and manage its ownership.

### Read application API permissions

Application can have access to resouces in Azure AD. This is set up by assigning API Permissions.

Our connector reads in the list of API permissions and what permissions have been assigned to what applications.

### Hybrid environment support

The improved connector is designed with an hybrid environment in mind. While it can just as well work with a cloud-only environment, 

It waits for Azure AD Connect to create and delete the users if needed. While the connector manages what is not managed on-premise. Such as cloud-only group assignments.

<Button />

