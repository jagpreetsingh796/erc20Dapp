import React from "react"
import firebase from './Firestore'
import { ethers } from 'ethers';

let addr

class CreateToken extends React.Component
{
    constructor()
    {
        super()
        this.state={
            
            Name:"",
            Symbol:"",
            TotalSupply:"",
            Name1:"",
            Id:""
           
        }
         this.handlechange=this.handlechange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
        this.handlesubmit1=this.handlesubmit1.bind(this)
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
        // const web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://localhost:8546'), null, {});
        const db = firebase.firestore();
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
        
        let tx1= await contract.newToken(this.state.TotalSupply,this.state.Name,this.state.Symbol)

       let Id=await contract.getId()
       console.log("The id is",Id)
      
        const userRef = db.collection("Erc").add({
            id: Id,
            name:this.state.Name,
            owner:addr
            
            
          });
          this.setState({
            Name:"",
            Symbol:"",
            TotalSupply:"",
            
          })
        }
        handlesubmit1=async(e)=>
        {   
            e.preventDefault()
            let ethereum = window.ethereum;
        // let web3 = window.Web3;
        addr=await ethereum.enable()
           
            const db = firebase.firestore();
            const userRef1 = await db.collection("Erc").where('name' , '==' ,this.state.Name1).where('owner','==',addr).get()
           
    
            
            console.log("the user",userRef1)

           let Tokenid
            userRef1.docs.forEach(async (Ele) => {
                console.log("the id is", Ele.data().id)
                console.log("the owner address is", Ele.data().owner)

                Tokenid=Ele.data().id
            })
            this.setState({
                Id:Tokenid,
                Name1:"",
                TotalSupply:"",
            })
        }



    render()
    {
        return(
            <div>
            <form onSubmit={this.handlesubmit} >
                Name
                <input  type="text"  name="Name"  label="Name" onChange={this.handlechange} value={this.state.Name}/>

               
                Symbol
                <input type="text"  name="Symbol" label="Symbol" onChange={this.handlechange}  value={this.state.Symbol}/>
               
               TotalSupply
                <input type="text"  name="TotalSupply" label="TotalSupply"  onChange={this.handlechange}  value={this.state.TotalSupply}/>
                <br/>
                <button type="submit">submit</button>
                
               
                
                
                


            </form>
            <form onSubmit={this.handlesubmit1}>
               <p>Enter name of your token</p>
                <input type="text" name="Name1" onChange={this.handlechange} value={this.state.Name1}/>
                <br/>
                <button type="submit">submit</button>


            </form>
            <br/>
            {this.state.Id !== "" ? <h3>The Tokenid is {this.state.Id}</h3> : ""}

            </div>
        )
    }

}

export default CreateToken