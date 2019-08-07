import React from "react"
import { ethers } from 'ethers';
let addr
class DelegateTransfer extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Id:"",
            buyer:"",
            owner:"",
            numTokens:""
            
        }
        this.handlechange=this.handlechange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
    }
    handlechange = e =>
    {
        this.setState({
            [e.target.name]:e.target.value
        },console.log(this.state))
    }
    handlesubmit =async(e)=>
    {
        e.preventDefault();
        console.log("heloooooooo")
        let ethereum = window.ethereum;
        // let web3 = window.Web3;
        let addr=await ethereum.enable()
        let  provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
        const signer = provider.getSigner();
        let abi=[
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "name": "delegate",
                        "type": "address"
                    },
                    {
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "getApprovebyid",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "getTransferById",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "buyer",
                        "type": "address"
                    },
                    {
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "getTransferFromById",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "total",
                        "type": "uint256"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    }
                ],
                "name": "newToken",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_database",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getId",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "getTotalbalanceById",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "delegate",
                        "type": "address"
                    }
                ],
                "name": "getTotalbalancefordelegateById",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "id",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
        let address="0xb8a5e17673ff2acc6dbdf0cd2c5795c8fcb7b5ca"
        let contract = new ethers.Contract(address, abi, signer);
        console.log("The id is",this.state.Id)
        console.log("The buyer is",this.state.buyer)
        console.log("The owner is",this.state.owner)
        console.log("The numtokens is",this.state.numTokens)
     
        let tx1= await contract.getTransferFromById(this.state.Id,this.state.owner,this.state.buyer,this.state.numTokens)
        console.log(tx1)

    }
    render()
    {
        return(

            <div>
                <form onSubmit={this.handlesubmit}>
                <p>Enter id of your token</p>
                <input type="text" name="Id" onChange={this.handlechange} value={this.state.Id}/>
                <br/>
                <p>Buyer address</p>
                <input type="text" name="buyer" onChange={this.handlechange} value={this.state.buyer}/>
                <br/>
                <p>Owner address</p>
                <input type="text" name="owner" onChange={this.handlechange} value={this.state.owner}/>
                <br/>
                <p>Number of Tokens</p>
                <input type="text" name="numTokens" onChange={this.handlechange} value={this.state.numTokens}/>
                <br/>
                <button type="submit">submit</button>
                </form>
                

            </div>
        )
    }
}
export default DelegateTransfer