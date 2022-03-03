import React from "react"
import { Modal, Button } from "react-bootstrap"
import Card from "../component/card"

export default class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            buku : [
                {
                    isbn: '12345',
                    judul: 'Matahari',
                    penulis: 'tere Liye',
                    penerbit: 'CV Harapan',
                    harga: '100000',
                    cover: 'https://drive.google.com/uc?id=1fgW1LFZqqKUD33UygCv1GUwNgsvkCANh'
                    
                },
                {
                    isbn: "71628", 
                    judul:"Nebula",
                    penulis:"Lorem2",
                    penerbit:"Gramedia",
                    harga: 95000,
                    cover: 'https://drive.google.com/uc?id=1jrZdvKKzi_3DfrJHXmy-t-2NqQL8MVba'
                },
                {
                    isbn: "12312", 
                    judul:"Jermal",
                    penulis:"lorem3",
                    penerbit:"Gramedia",
                    harga: 90000,
                    cover: 'https://drive.google.com/uc?id=1zDWiH-AfkZ4tMzlRrQ_h6hKsudeNqua4'
                }
            ],
            
            isbn: "", 
            judul:"",
            penulis:"",
            Penerbit:"",
            harga: 0,
            cover: '',
            action: '',
            selectedItem: null,
            isModalOpen: false, 
        }
    }
    add = () => {
        this.setState({
            isModalOpen: true
        })
    }
    handleClose = () => {
        this.setState({
            isModalOpen: false
        })
    }
    edit = (item) => {
        console.log('edit')
    }
    drop = (item) => {
        console.log('drop')
    }
    render(){
        return(
            <div className="container">
                <h1 className="text-center">Gallery</h1>
                <button className="btn btn-success" onClick={() => this.add()}>
                    Tambah Buku
                </button>
                <div className="row">
                    {this.state.buku.map((item,index) => (
                    <Card cover={item.cover}
                        judul= {item.judul}
                        penulis= {item.penulis}
                        penerbit= {item.penerbit}
                        harga= {item.harga}
                        onEdit={() => this.edit(item)}
                        onDrop={() => this.drop(item)}
                    />        
                    ))}

                </div>

                {/* ini modal */}
                <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}