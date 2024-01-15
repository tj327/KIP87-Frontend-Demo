import { sendAsync } from "./sendAsync";

export async function submitEvidence(web3, accounts, contract) {
    var signer = accounts[0];
    var amount = "100000000ukex";
    var evidenceParam = {
      "heighht": 156,
      "time": new Date().toISOString(),
      "power": 100,
      "consensus_address": "kiravaloper13j3w9pdc47e54z2gj4uh37rnnfwxcfcmjh4ful",
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
          submitEvidence:[
            {name:"param",type:"string"}
          ]
        },
        //make sure to replace verifyingContract with address of deployed contract
        primaryType:"submitEvidence",
        message:{
          param: JSON.stringify(evidenceParam),
        }
      })

      var from = signer;
    
      console.log('CLICKED, SENDING PERSONAL SIGN REQ', 'from', from, msgParams)
      var params = [from, msgParams]
      console.dir(params)
      var method = 'eth_signTypedData_v4'
    
      sendAsync(web3, method, params, from, 
        async(v, r, s) => await contract.methods.submitEvidence(v,r,s,signer, JSON.stringify(evidenceParam)).send({ from: accounts[0] }))
    })
}