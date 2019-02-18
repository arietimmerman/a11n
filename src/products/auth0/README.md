
# Integrating Auth0

Auth0 is one of the leading customer identity and access management products. It is well known for its developer focus and is activly publishing open source software and example code via <a href="https://github.com/auth0/">GitHub</a>.

With Auth0 you can setup a login flow with social capabilities and two-factor authentication in minutes. The rules allow you to hook in JavaScript snippets on some places. The API Auth0 offers is outstanding and allows you to configure the whole product.

There are some caveats when implementing Auth0. Although Auth0 supports quite some open standards, you risk relying too much on Auth0 Lock plugin for logging users in. Before you know, Auth0 Lock delivers you a lock in.

The rules are very powerful when implemented correctly. However, you should be aware of possible performance issues with these rules. If you let your rules call APIs or interact with databases, performances drops quickly.
