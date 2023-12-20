var ethUtil = require('ethereumjs-util');
var sigUtil = require('eth-sig-util');

export async function sendAsync(web3, method, params, from, func) {
    web3.currentProvider.sendAsync({
        method,
        params,
        from,
    }, async function (err, result) {
        if (err) return console.dir(err)
        if (result.error) {
        alert(result.error.message)
        }
        if (result.error) return console.error('ERROR', result)
        console.log('TYPED SIGNED:' + JSON.stringify(result.result))

        const recovered = sigUtil.recoverTypedSignature({ data: JSON.parse(params[1]), sig: result.result })

        if (ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(from)) {
        alert('Successfully ecRecovered signer as ' + from)
        } else {
        alert('Failed to verify signer when comparing ' + result + ' to ' + from)
        }

        //getting r s v from a signature
        const signature = result.result.substring(2);
        const r = "0x" + signature.substring(0, 64);
        const s = "0x" + signature.substring(64, 128);
        const v = parseInt(signature.substring(128, 130), 16);
        console.log("r:", r);
        console.log("s:", s);
        console.log("v:", v);

        await func(v, r, s);
    }) 
}