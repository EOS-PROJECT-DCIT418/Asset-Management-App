import React, { useEffect, useState } from "react"
import api from "../api"



function Home() {
    const [items, setItems] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")


    useEffect(()=>{
        getItems();
    },[])

    const getItems = () =>{
        api
        .get("/api/items/")
        .then((res)=> res.data)
        .then((data)=>{setItems(data); console.log(data)})
        .catch((err)=>alert(err))
    }


    const deleteItem = (id) => {
        api
            .delete(`/api/items/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Item deleted!");
                else alert("Failed to delete Item.");
            })
            .catch((error) => alert(error));
        getItems();

    };

    const createItem = (e) => {
        e.preventDefault();
        console.log("Payload",{name, description})
        api
            .post("/api/items/", { name, description})
            .then((res) => {
                if (res.status === 201) alert("Item created!");
                else alert("Failed to make Item.");
            })
            .catch((err) => alert(err));
            getItems();
    };
    

    return <div>
        <div>
            <h2>Items</h2>
        </div>
        <h2>Create Item</h2>
        <form onSubmit={createItem}>
            <label htmlFor="name">Name</label>
        <br/>
        <input type="text" id="name" name="name" required onChange={(e)=>setName(e.target.value)} value={name}/>
        <br/>
        <label htmlFor="description">Description</label>
        <br/>
        <textarea id="description" name="description" required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <br/>
        <input type="submit" value="Submit"></input>

        </form>
    </div>
}

export default Home