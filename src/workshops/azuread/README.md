# Workshop: Identity Governance and Microsoft Azure AD

Get the best out of Azure AD and improve your identity governance and administration solution.  
This workshops walks through the functionalities of Azure AD relevant for identity and access management.

In many organizations Azure AD is a central tool for providing access to a wide range of applications.

Usually, a part of Azure AD is managed with identity governance tooling from SailPoint, Omada, Saviynt or from one of the many other vendors. What is managed and how this is done differs in each organization. All too often cloud-group memberships of regular users is all what is managed.

This 2-hour workshops covers (1) how to leverage Azure AD functionalities for Identity and Access Management (IAM) and (2) how to integrate these with other IAM tooling. Among other topics, the topics below are discussed.

<Button title="Reach out to learn more" />

## Applications roles versus groups

Applications roles (App Roles) can be defined on an application registered in Azure AD. This could be a service, application or API application. When a user signs in to the application, Azure AD populates a claim _roles_ for each role that has been assigned to the user directly or that one has obtained from their group membership.

Application roles have several advantages in comparison to groups. These roles are created per application and cannot be (accidentially) used by other applications. Because these are created for a specific application, naming conventions become of lesser importance. If the application has reached end of life and is deleted, all related application roles are automatically cleaned up.

## API permissions of service principals

Identity governance does not stop with personal user accounts. Non-personal entities should just as well be managed. Especially because of the great power service principals can be granted in Azure AD in the form of API permissions.

The workshop covers how to become in control over non-personal entities in Azure AD. Both delegated and application permissions are discussed, the differences between these and how to make these visible.

## Permanent or eligible assignable Azure AD roles

Privileged access management has gained more attention in the last few years. The possibility to assign _eligible_ roles in Azure AD is one of Microsoft's solutions for privileged access management. But how does this related to regular access requests? What are the limitations of eligible assignments and what are the alternatives? The workshops tries to answer each of these questions.

## Just-in-time provisioning with Azure AD

Provisioning tools traditionally create users and assign permissions way before these are actually used. For example upon the person joining an organization or moving to another function. It may take hours or even week before the account is actually used.

Azure AD allows you to leverage just-in-time provisioning with several protocols such as SAML and OpenID Connect. The workshop discusses the pros and cons and how your organization can benefit.

# Contact

We would love to learn you how to get the most out of Azure AD for Identity and Access Management.

<Button title="Reach out to learn more" />