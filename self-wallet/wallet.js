
import { Keypair, StrKey } from 'stellar-sdk';

const {
    Asset,
    rpc: StellarRpc,
    TransactionBuilder,
    Networks,
    BASE_FEE,
    Operation,

} = require("stellar-sdk");
const StellarSdk = require("stellar-sdk");
const server = new StellarSdk.Horizon.Server(
    "https://horizon-testnet.stellar.org",
);
const sourceKeypairAdmin = Keypair.fromSecret("SAO5QJMENIQ5K2Q7CK6TJ4AZCAQXGKV6RKZ6TRSY73E5GR2U2C5XXNMY");



export async function Trustline(keypairUser) {
    const account = await server.loadAccount(keypairUser.publicKey());
    const assetUSD = new Asset("USD", "GCJWRFAW62LZB6LTSN57OMBYI6CATVFI3CKM63GSL7GNXIYDOL3J7FPY");
    const assetTRUST = new Asset("TRUST", "GCJWRFAW62LZB6LTSN57OMBYI6CATVFI3CKM63GSL7GNXIYDOL3J7FPY");

    console.log("⚙️ Creating trustline...");
    const tx = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: Networks.TESTNET,
    })
        .addOperation(Operation.changeTrust({ asset: assetUSD }))
        .addOperation(Operation.changeTrust({ asset: assetTRUST }))
        .setTimeout(60)
        .build();

    tx.sign(keypairUser);
    try {
        const result = await server.submitTransaction(tx);
        console.log("✅ Account created successfully!");
        console.log(result);
    } catch (err) {
        console.error("❌ Transaction failed:", err);
    }

    console.log("✅ Trustline created successfully");
    return

}


export async function createAccount(pubKey) {

    const accountAdmin = await server.loadAccount(sourceKeypairAdmin.publicKey());



    const tx = new TransactionBuilder(accountAdmin, {
        fee: await server.fetchBaseFee(),
        networkPassphrase: Networks.TESTNET
    })
        .addOperation(Operation.createAccount({
            destination: pubKey,
            startingBalance: "1", // minimum 1 XLM, use more to cover reserves
        }))
        .setTimeout(30)
        .build();

    // Sign and submit
    tx.sign(sourceKeypairAdmin);

    try {
        const result = await server.submitTransaction(tx);
        console.log("✅ Account created successfully!");

        const response = await fetch(`https://friendbot.stellar.org/?addr=${pubKey}`);
        const data = await response.json();

        console.log("✅ Testnet account funded:", data);
        console.log(result);
    } catch (err) {
        console.error("❌ Transaction failed:", err);
    }
    return
};

export async function fund(PubKey) {
    const assetUSD = new Asset("USD", "GCJWRFAW62LZB6LTSN57OMBYI6CATVFI3CKM63GSL7GNXIYDOL3J7FPY");
    const assetTRUST = new Asset("TRUST", "GCJWRFAW62LZB6LTSN57OMBYI6CATVFI3CKM63GSL7GNXIYDOL3J7FPY");

    const accountAdmin = await server.loadAccount(sourceKeypairAdmin.publicKey());

    console.log("⚙️ funding...");
    const tx = new TransactionBuilder(accountAdmin, {
        fee: BASE_FEE,
        networkPassphrase: Networks.TESTNET,
    })
        .addOperation(Operation.payment({
            destination: PubKey,
            asset: assetTRUST,
            amount: "300000000",
            source: sourceKeypairAdmin.publicKey()
        }))
        .addOperation(Operation.payment({
            destination: PubKey,
            asset: assetUSD,
            amount: "1000000000",
            source: sourceKeypairAdmin.publicKey()
        }))
        .setTimeout(60)
        .build();

    tx.sign(sourceKeypairAdmin);
    try {
        const result = await server.submitTransaction(tx);
        console.log("✅ Account created successfully!");
        console.log(result);
    } catch (err) {
        console.error("❌ Transaction failed:", err);
    }
    console.log("✅ Trustline created successfully");
    return

}
