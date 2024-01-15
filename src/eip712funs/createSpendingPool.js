import { sendAsync } from "./sendAsync";

export async function createSpendingPool(web3, accounts, contract) {
    var signer = accounts[0];
    var identityParam = {
      "name" : "name",
      "claim_start" : 1,
      "claim_end" : 2,
      "rates" : ["123ukex", "125ukex"],
      "vote_quorum" : 3,
      "vote_period" : 4,
      "vote_enactment" : 5,
      "owners" : {
        "owner_roles" : [1, 2],
        "owner_accounts" : [
          "kira13283pzxmtrkfvvdshkh3klr077v7gc8c6ml2rz",
          "kira1ua5jvfcqdjgttlpxljvm4sajqkcmwqmt636zxz"
        ]
      },
      "beneficiaries" : {
        "roles" : [
          {
            "role": 1,
            "weight":"1.123"
          },
          {
            "role": 2,
            "weight":"1.124"
          }
        ],
        "accounts" : [
          {
            "account" : "kira13283pzxmtrkfvvdshkh3klr077v7gc8c6ml2rz", 
            "weight" : "2.123"
          },
          {
            "account" : "kira1ua5jvfcqdjgttlpxljvm4sajqkcmwqmt636zxz", 
            "weight" : "2.124"
          }
        ]
      },
      "is_dynamic_rate" : true,
      "dynamic_rate_period" : 6
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
          createSpendingPool:[
            {name:"param",type:"string"}
          ]
        },
        //make sure to replace verifyingContract with address of deployed contract
        primaryType:"createSpendingPool",
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
        async(v, r, s) => await contract.methods.createSpendingPool(v,r,s,signer, JSON.stringify(identityParam)).send({ from: accounts[0] }))
    })
}