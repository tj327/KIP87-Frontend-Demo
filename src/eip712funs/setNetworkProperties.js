import { sendAsync } from "./sendAsync";

export async function setNetworkProperties(web3, accounts, contract) {
    var signer = accounts[0];
    var identityParam = {
      "min_tx_fee" : 1,
      "max_tx_fee" : 2,
      "vote_quorum" : 3,
      "minimum_proposal_end_time" : 4,
      "proposal_enactment_time" : 5,
      "min_proposal_end_blocks" : 6,
      "min_proposal_enactment_blocks" : 7,
      "enable_foreign_fee_payments" : true,
      "mischance_rank_decrease_amount" : 9,
      "max_mischance" : 10,
      "mischance_confidence" : 11,
      "inactive_rank_decrease_percent" : "12.55",
      "min_validators" : 13,
      "poor_network_max_bank_send" : 14,
      "unjail_max_time" : 15,
      "enable_token_whitelist" : true,
      "enable_token_blacklist" : false,
      "min_identity_approval_tip" : 18,
      "unique_identity_keys" : "19.12",
      "ubi_hardcap" : 20,
      "validators_fee_share" : "21.51",
      "inflation_rate" : "22.32",
      "inflation_period" : 23,
      "unstaking_period" : 24,
      "max_delegators" : 25,
      "min_delegation_pushout" : 26,
      "slashing_period" : 27,
      "max_jailed_percentage" : "28.41",
      "max_slashing_percentage" : "29.49",
      "min_custody_reward" : 30,
      "max_custody_buffer_size" : 31,
      "max_custody_tx_size" : 32,
      "abstention_rank_decrease_amount" : 33,
      "max_abstention" : 34,
      "min_collective_bond" : 35,
      "min_collective_bonding_time" : 36,
      "max_collective_outputs" : 37,
      "min_collective_claim_period" : 38,
      "validator_recovery_bond" : 39,
      "max_annual_inflation" : "40.81",
      "max_proposal_title_size" : 41,
      "max_proposal_description_size" : 42,
      "max_proposal_poll_option_size" : 43,
      "max_proposal_poll_option_count" : 44,
      "max_proposal_reference_size" : 45,
      "max_proposal_checksum_size" : 46,
      "min_dapp_bond" : 47,
      "max_dapp_bond" : 48,
      "dapp_liquidation_threshold" : 49,
      "dapp_liquidation_period" : 50,
      "dapp_bond_duration" : 51,
      "dapp_verifier_bond" : "52.77",
      "dapp_auto_denounce_time" : 53,
      "dapp_mischance_rank_decrease_amount" : 54,
      "dapp_max_mischance" : 55,
      "dapp_inactive_rank_decrease_percent" : 56,
      "dapp_pool_slippage_default" : "57.159",
      "minting_ft_fee" : 58,
      "minting_nft_fee" : 59,
      "veto_threshold" : "60.74"
    }

    web3.currentProvider.sendAsync({
      method: 'net_version',
      params: [],
      jsonrpc: "2.0"
    }, function (err, result) {
      const netId = result.result;
      console.log("netId", netId);
      const msgParams = JSON.stringify({
        domain:{
          name:"Kira",
          version:"1",
          chainId:netId
        },
        types: {
          EIP712Domain:[
            {name:"name",type:"string"},
            {name:"version",type:"string"},
            {name:"chainId",type:"uint256"},
          ],
          setNetworkProperties:[
            {name:"param",type:"string"}
          ]
        },
        //make sure to replace verifyingContract with address of deployed contract
        primaryType:"setNetworkProperties",
        message:{
          param: JSON.stringify(identityParam),
        }
      })

      var from = signer;
    
      console.log('CLICKED, SENDING PERSONAL SIGN REQ', 'from', from, msgParams)
      var params = [from, msgParams]
      console.dir(params)
      var method = 'eth_signTypedData_v4'
    
      sendAsync(web3, method, params, from, 
        async(v, r, s) => await contract.methods.setNetworkProperties(v,r,s,signer, JSON.stringify(identityParam)).send({ from: accounts[0] }))
    })
}