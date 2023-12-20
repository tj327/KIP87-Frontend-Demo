// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

contract SimpleStorage {
  function submitEvidence(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    int256 height,
    int256 power,
    int256 unixTime,
    string calldata consensusAddr
  ) external {}

  function voteProposal(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 proposalID,
    uint256 option,
    string calldata slash
  ) external {}

  function registerIdentityRecords(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string calldata identityInfo
  ) external {}

  function deleteIdentityRecord(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string[] calldata identityInfo
  ) external {}

  function requestIdentityRecordsVerify(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string calldata tip,
    string calldata verifier,
    uint256[] calldata recordIds
  ) external {}

  function handleIdentityRecordsVerifyRequest(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 requestId,
    bool isApprove
  ) external {}

  function cancelIdentityRecordsVerifyRequest(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 verifyRequestId
  ) external {}

  function setNetworkProperties(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    bool[] memory boolList,
    uint256[] memory uintList,
    string[] memory strList,
    string[] memory legacyDecList
  ) external {}

  function setExecutionFee(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 executionFee, 
    uint256 failureFee, 
    uint256 timeout, 
    uint256 defaultParams, 
    string calldata transactionType
  ) external {}

  function claimCouncilor(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory moniker,
    string memory username,
    string memory description,
    string memory social,
    string memory contact,
    string memory avatar
  ) external {}

  function whitelistPermissions(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 permission,
    string calldata controlledAddr
  ) external {}

  function blacklistPermissions(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 permission,
    string calldata controlledAddr
  ) external {}

  function createRole(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string calldata sid,
    string calldata description
  ) external {}

  function assignRole(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 roleid,
    string calldata controller
  ) external {}

  function unassignRole(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 roleid,
    string calldata controller
  ) external {}

  function whitelistRolePermission(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 permission,
    string calldata roleIdentifier
  ) external {}

  function blacklistRolePermission(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 permission,
    string calldata roleIdentifier
  ) external {}

  function removeWhitelistRolePermission(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 permission,
    string calldata roleIdentifier
  ) external {}

  function removeBlacklistRolePermission(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 permission,
    string calldata roleIdentifier
  ) external {}

  function upsertTokenAlias(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    bool invalidated,
    uint32 decimals,
    string memory symbol,
    string memory name,
    string memory icon,
    string[] memory denoms 
  ) external {}

  function upsertTokenRate(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    bool feePayments,
    bool stakeToken,
    bool invalidated,
    string memory denom,
    string memory rate,
    string memory stakeCap,
    string memory stakeMin 
  ) external {}

  function activate(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender
  ) external {}

  function pause(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender
  ) external {}

  function unpause(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender
  ) external {}

  function depositSpendingPool(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string calldata amount,
    string calldata name
  ) external {}

  function registerSpendingPoolBeneficiary(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string calldata name
  ) external {}

  function claimSpendingPool(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string calldata name
  ) external {}

  function upsertStakingPool(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    bool enabled,
    string calldata validator,
    string calldata commission
  ) external {}

  function delegate(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string calldata amount,
    string calldata to
  ) external {}

  function undelegate(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string calldata amount,
    string calldata to
  ) external {}

  function claimRewards(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender
  ) external {}

  function claimUndelegation(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 undelegationId
  ) external {}

  function setCompoundInfo(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    bool allDenom,
    string[] calldata denoms
  ) external {}

  function registerDelegator(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender
  ) external {}

  function createCustody(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    uint256 custodyMode,
    string memory key,
    string memory nextController,
    bool[] memory custodyBoolArr,
    string[] memory otherParams
  ) external {}

  function addToCustodyWhiteList(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory oldKey,
    string memory newKey,
    string memory next,
    string memory target,
    string[] memory newAddr
  ) external {}

  function addToCustodyCustodians(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory oldKey,
    string memory newKey,
    string memory next,
    string memory target,
    string[] memory newAddr
  ) external {}

  function removeFromCustodyCustodians(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory newAddr,
    string memory oldKey,
    string memory newKey,
    string memory next,
    string memory target
  ) external {}

  function dropCustodyCustodians(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory oldKey,
    string memory newKey,
    string memory next,
    string memory target
  ) external {}

  function removeFromCustodyWhiteList(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory newAddr,
    string memory oldKey,
    string memory newKey,
    string memory next,
    string memory target
  ) external {}

  function dropCustodyWhiteList(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory oldKey,
    string memory newKey,
    string memory next,
    string memory target
  ) external {}

  function approveCustodyTransaction(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory to,
    string memory hash
  ) external {}

  function declineCustodyTransaction(
    uint8 v,
    bytes32 r,
    bytes32 s,
    address sender,
    string memory to,
    string memory hash
  ) external {}
}