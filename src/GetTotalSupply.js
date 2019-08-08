import React from "react"
import { ethers } from 'ethers';
let addr
class GetTotalSupply extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Id:"",
            balance:""
        }
        this.handlechange=this.handlechange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
    }
    handlechange = e =>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handlesubmit= async(e)=>
    {
        e.preventDefault();
        console.log("heloooooooo")
        let ethereum = window.ethereum;
        // let web3 = window.Web3;
        addr=await ethereum.enable()
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
        let tx1= await contract.getTotalbalanceById(this.state.Id)
      
        console.log("The balance is",tx1.toString())
        this.setState({
            balance:tx1.toString()
        })
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                <p>Enter id of your token</p>
                <input type="text" name="Id" onChange={this.handlechange} value={this.state.Id}/>
                <br/>
                <button type="submit">submit</button>
                </form>
                <br/>
                {this.state.balance !== "" ? <h3>The totalsupply is {this.state.balance}</h3> : ""}

            </div>
        )
    }

}
export default GetTotalSupply