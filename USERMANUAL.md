![Logo EDAISS](./public/Logo_EDAISS_Transparent.png)

# EDAISS User Manual

### Top Bar

At the top of the website, we find the connector name and a button to select the portal theme.

![Top Bar](./public/images/user_manual/top-bar.jpg)

## 1. Assets

In the top bar we can find the asset search, create asset button, how many items to show per page and pagination.

![Asset Top Bar](./public/images/user_manual/asset-top-bar.png)

### Create Asset

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

### Edit Asset

On the asset card, we must click on the edit button and a modal will open with the form for editing the asset; the only non-editable field is the "ID".

![Edit Asset](./public/images/user_manual/edit-asset.png)

![Edit Asset Modal](./public/images/user_manual/edit-asset-modal.png)

### Delete Asset

On the asset card, we must click on the delete button and a modal will open asking for confirmation to delete the asset.

![Delete Asset](./public/images/user_manual/delete-asset.png)

![Delete Asset Modal](./public/images/user_manual/delete-asset-modal.png)

## 2. Policy Definitions

In the top bar we can find the policy search, create policy button, how many items to show per page and pagination.

![Policy Top Bar](./public/images/user_manual/policy-top-bar.png)

### Create Policy

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

### Edit Policy

On the policy card, we must click on the edit button and a modal will open with the form for editing the policy; the only non-editable field is the "ID".

![Edit Policy](./public/images/user_manual/edit-policy.png)

![Edit Policy Modal](./public/images/user_manual/edit-policy-modal.png)

### Delete Policy

On the policy card, we must click on the delete button and a modal will open asking for confirmation to delete the policy.

![Delete Policy](./public/images/user_manual/delete-policy.png)

![Delete Policy Modal](./public/images/user_manual/delete-policy-modal.png)

## 3. Contract Definitions

In the top bar we can find the contract search, create contract button, how many items to show per page and pagination.

![Contract Top Bar](./public/images/user_manual/contract-top-bar.png)

### Create Contract

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

### Edit Contract

On the contract card, we must click on the edit button and a modal will open with the form for editing the contract; the only non-editable field is the "ID".

![Edit Contract](./public/images/user_manual/edit-contract.png)

![Edit Contract Modal](./public/images/user_manual/edit-contract-modal.png)

### Delete Contract

On the contract card, we must click on the delete button and a modal will open asking for confirmation to delete the contract.

![Delete Contract](./public/images/user_manual/delete-contract.png)

![Delete Contract Modal](./public/images/user_manual/delete-contract-modal.png)
