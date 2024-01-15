import { sendAsync } from "./sendAsync";

export async function createCustody(web3, accounts, contract) {
    var signer = accounts[0];
    var identityParam = {
      "custody_settings" : {
        "custody_enabled" : true,
        "custody_mode" : 1,
        "use_password" : true,
        "use_white_list" : true,
        "use_limits" : false,
        "key" : "key",
        "next_controller" : "12345"
      },
      "old_key" : "old_key",
      "new_key" : "new_key",
      "next" : "next",
      "target" : "target",
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
          createCustody:[
            {name:"param",type:"string"}
          ]
        },
        //make sure to replace verifyingContract with address of deployed contract
        primaryType:"createCustody",
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
        async(v, r, s) => await contract.methods.createCustody(v,r,s,signer, JSON.stringify(identityParam)).send({ from: accounts[0] }))
    })
}