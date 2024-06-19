import React, { useEffect, useState } from "react";
import api from "../api";

function Home() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [collection, setCollection] = useState(""); // Collection ID
    const [available, setAvailable] = useState(false);
    const [createdBy, setCreatedBy] = useState(""); // User ID

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        api
            .get("/api/items/")
            .then((res) => setItems(res.data))
            .catch((err) => alert(`Error fetching items: ${err.message}`));
    };

    const deleteItem = (id) => {
        api
            .delete(`/api/items/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Item deleted!");
                    getItems(); // Fetch items after deletion
                } else {
                    alert("Failed to delete item.");
                }
            })
            .catch((err) => alert(`Error deleting item: ${err.message}`));
    };

    const createItem = (e) => {
        e.preventDefault();
        const newItem = { name, description, collection, available, created_by: createdBy };
        console.log("Payload", newItem);
        api
            .post("/api/items/", newItem)
            .then((res) => {
                if (res.status === 201) {
                    alert("Item created!");
                    getItems(); // Fetch items after creation
                    setName(""); // Clear form fields
                    setDescription("");
                    setCollection("");
                    setAvailable(false);
                } else {
                    alert("Failed to create item.");
                }
            })
            .catch((err) => alert(`Error creating item: ${err.message}`));
    };

    return (
        <div>
            <div>
                <h2>Items</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <h2>Create Item</h2>
            <form onSubmit={createItem}>
                <label htmlFor="name">Name</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br />
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                    id="description"
                    name="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <br />
                <label htmlFor="collection">Collection</label>
                <br />
                <input
                    type="text"
                    id="collection"
                    name="collection"
                    required
                    onChange={(e) => setCollection(e.target.value)}
                    value={collection}
                />
                <br />
                <label htmlFor="available">Available</label>
                <br />
                <input
                    type="checkbox"
                    id="available"
                    name="available"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
                <br />
                <label htmlFor="createdBy">Created By</label>
                <br />
                <input
                    type="text"
                    id="createdBy"
                    name="createdBy"
                    required
                    onChange={(e) => setCreatedBy(e.target.value)}
                    value={createdBy}
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Home;
