import { sendAsync } from "./sendAsync";

export async function delegation(web3, accounts, contract) {
    var signer = accounts[0];
    var amount = "100000000ukex";

    web3.currentProvider.sendAsync({
      method: 'net_version',
      params: [],
      jsonrpc: "2.0"
    }, function (err, result) {
      const netId = result.result;
      console.log("netId", netId);
      const msgParams = JSON.stringify({types:
        {
        EIP712Domain:[
          {name:"name",type:"string"},
          {name:"version",type:"string"},
          {name:"chainId",type:"uint256"},
        ],
        delegation:[
          {name:"sender",type:"address"},
          {name:"amount",type:"string"},
          {name:"to",type:"string"},
        ]
      },
      //make sure to replace verifyingContract with address of deployed contract
      primaryType:"delegation",
      domain:{name:"Kira",version:"1",chainId:netId},
      message:{
        sender: signer,
        amount: amount,
        to: "kiravaloper13j3w9pdc47e54z2gj4uh37rnnfwxcfcmjh4ful",
      }
      })

      var from = signer;
    
      console.log('CLICKED, SENDING PERSONAL SIGN REQ', 'from', from, msgParams)
      var params = [from, msgParams]
      console.dir(params)
      var method = 'eth_signTypedData_v3'
    
      sendAsync(web3, method, params, from, 
        async(v, r, s) => await contract.methods.delegate(v,r,s,signer, amount, "kiravaloper13j3w9pdc47e54z2gj4uh37rnnfwxcfcmjh4ful").send({ from: accounts[0] }))
    })
}