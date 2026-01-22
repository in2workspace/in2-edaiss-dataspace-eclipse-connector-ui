![Logo EDAISS](./public/Logo_EDAISS_Transparent.png)

# EDAISS User Manual

### Top Bar

At the top of the website, we find the connector name and a button to select the portal theme.

![Top Bar](./public/images/user_manual/top-bar.jpg)

# 1. Provide Assets

## 1.1. Assets

In the top bar we can find the asset search, create asset button, how many items to show per page and pagination.

![Asset Top Bar](./public/images/user_manual/asset-top-bar.png)

### 1.1.1. Create Asset

To create an asset, we must first go to the "Assets" tab in the side menu. In the upper right corner, we can find a button that says "+ Create". We click on the button and a modal with a form will open.

![Create Asset](./public/images/user_manual/create-asset.png)

The form contains the following fields that must be filled in:

Common Fields:

- ID
- Name
- Content Type
- Description

(These fields are optional, but it is recommended to fill in the ID, Name, and Description fields.)

Next, select the "Data Address", which should be:

- Type: HttpData
- Method: GET
- Base URL: The complete URL of the API Provider.
- Then click the "Create Asset" button.

![Create Asset Modal](./public/images/user_manual/create-asset-modal.png)

### 1.1.2. Edit Asset

On the asset card, we must click on the edit button and a modal will open with the form for editing the asset; the only non-editable field is the "ID".

![Edit Asset](./public/images/user_manual/edit-asset.png)

![Edit Asset Modal](./public/images/user_manual/edit-asset-modal.png)

### 1.1.3. Delete Asset

On the asset card, we must click on the delete button and a modal will open asking for confirmation to delete the asset.

![Delete Asset](./public/images/user_manual/delete-asset.png)

![Delete Asset Modal](./public/images/user_manual/delete-asset-modal.png)

## 1.2. Policy Definitions

In the top bar we can find the policy search, create policy button, how many items to show per page and pagination.

![Policy Top Bar](./public/images/user_manual/policy-top-bar.png)

### 1.2.1. Create Policy

To create an policy, we must first go to the "Policy Definitions" tab in the side menu. In the upper right corner, we can find a button that says "+ Create". We click on the button and a modal with a form will open.

![Create Policy](./public/images/user_manual/create-policy.png)

The form contains the following fields that must be filled in:

Common Fields:

- ID
- Policy Type: must be "Set"

(The ID field is optional, but it is recommended to fill in.)

Properties:

- Permissions (json)
- Prohibitions (json)
- Obligations (json)

![Create Policy Modal](./public/images/user_manual/create-policy-modal.png)

### 1.2.2. Edit Policy

On the policy card, we must click on the edit button and a modal will open with the form for editing the policy; the only non-editable field is the "ID".

![Edit Policy](./public/images/user_manual/edit-policy.png)

![Edit Policy Modal](./public/images/user_manual/edit-policy-modal.png)

### 1.2.3. Delete Policy

On the policy card, we must click on the delete button and a modal will open asking for confirmation to delete the policy.

![Delete Policy](./public/images/user_manual/delete-policy.png)

![Delete Policy Modal](./public/images/user_manual/delete-policy-modal.png)

## 1.3. Contract Definitions

In the top bar we can find the contract search, create contract button, how many items to show per page and pagination.

![Contract Top Bar](./public/images/user_manual/contract-top-bar.png)

### 1.3.1. Create Contract

To create an contract, we must first go to the "Contract Definitions" tab in the side menu. In the upper right corner, we can find a button that says "+ Create". We click on the button and a modal with a form will open.

![Create Contract](./public/images/user_manual/create-contract.png)

The form contains the following fields that must be filled in:

Common Fields:

- ID

(The ID field is optional, but it is recommended to fill in.)

Policy Selections:

- Access Policy: Select the policy.
- Contract Policy: Select the policy.

Asset Selection: Select the asset.

![Create Contract Modal](./public/images/user_manual/create-contract-modal.png)

### 1.3.2. Edit Contract

On the contract card, we must click on the edit button and a modal will open with the form for editing the contract; the only non-editable field is the "ID".

![Edit Contract](./public/images/user_manual/edit-contract.png)

![Edit Contract Modal](./public/images/user_manual/edit-contract-modal.png)

### 1.3.3. Delete Contract

On the contract card, we must click on the delete button and a modal will open asking for confirmation to delete the contract.

![Delete Contract](./public/images/user_manual/delete-contract.png)

![Delete Contract Modal](./public/images/user_manual/delete-contract-modal.png)

# 2. Request Assets

## 2.1. Catalog

At the catalog top bar we can find a button to request an asset manually, if you click the button a modal will open.

![Catalog Request](./public/images/user_manual/catalog-request.png)

![Catalog Request Modal](./public/images/user_manual/catalog-request-modal.png)

At the Counter Party Address we must enter the connector URL, then we can see all the assets available to negotiate.

To negotiate an asset we have to click at the "Negotiate" button at the card.

![Catalog Negotiate](./public/images/user_manual/catalog-negotiate.png)

This will open a modal where we can select an offer and then click at the button "Negotiate" at the modal.

![Catalog Negotiate Modal](./public/images/user_manual/catalog-negotiate-modal.png)

Then will open a modal with the negotiation process.

![Contract Negotiation](./public/images/user_manual/contract-negotiation.png)

# 3. Transfer Assets

## 3.1. Contracts

In the "Contracts" tab we can see all the assets that have been negotiated.

At the top we can find the top bar where you can search for a contract, select if is "Consuming" or "Providing", items per page to show and pagination.

![Contracts Negotiated](./public/images/user_manual/contracts-negotiated.png)

To transfer an asset, we must click on the "Transfer" button.

![Contract Transfer](./public/images/user_manual/contract-transfer.png)

## 3.2. Transfer

Then a modal opens where we will put the data where we are going to transfer the asset.

![Contract Transfer Modal](./public/images/user_manual/contract-transfer-modal.png)

The form fields to complete are as follows:

Contract: Contract details to be transferred.

Transfer Types offered by the Provider:

- Transfer Type: HttpData-PUSH

Destination Data Address:

- Method: POST
- Base URL: The complete URL of the API provider

Then we can click the "Start Transfer" button.

## 3.3. Transfer History

At the top we can find the top bar where you can search for a transfer, select if is "Consuming" or "Providing", items per page to show and pagination.

![Transfer Top Bar](./public/images/user_manual/transfer-top-bar.png)

In the "Transfer History" tab, we can find the table with the list of transfers made; the form fields are as follows:

- Transfer ID
- State Changed
- State
- Transfer Type
- Asset ID
- Contract ID
- Link to the asset sent (just at the Public Health portal)
- Info and Delete buttons

![Transfer List](./public/images/user_manual/transfer-list.png)
