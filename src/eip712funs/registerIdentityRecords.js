import { sendAsync } from "./sendAsync";

export async function registerIdentityRecords(web3, accounts, contract) {
    var signer = accounts[0];
    var identityParam = {
      "identity_infos" : [
        {
          "key" : "key1",
          "info" : "info1"
        },
        {
          "key" : "key2",
          "info" : "info2"
        }
      ]
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
          registerIdentityRecords:[
            {name:"param",type:"string"}
          ]
        },
        //make sure to replace verifyingContract with address of deployed contract
        primaryType:"registerIdentityRecords",
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
        async(v, r, s) => await contract.methods.registerIdentityRecords(v,r,s,signer, JSON.stringify(identityParam)).send({ from: accounts[0] }))
    })
}