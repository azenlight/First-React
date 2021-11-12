import React from "react";
import { useState, useEffect } from 'react';
import {db} from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

function FbSocred(){
    const [newName, setNewName]= useState("");
    const [newAge, setNewAge]= useState(0);
    const [users, setUsers]=useState([]);
    const usersCollectionRef=collection(db, "users");
  
    const createUser = async()=>{
      await addDoc(usersCollectionRef, {name: newName, age:Number(newAge)});
      getUsers();
    }
    
    const updateUp = async(id, age)=>{
      const userDoc = doc(db, "users", id);
      const newField = {age:age+1};
      await updateDoc(userDoc, newField);
      getUsers();
    }
  
    const updateDown = async(id, age)=>{
      const userDoc = doc(db, "users", id);
      const newField = {age:age-1};
      await updateDoc(userDoc, newField);
      getUsers();
    }
  
    const deleteUser = async(id)=>{
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
      getUsers();
    }
  
    const getUsers = async()=>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }

    useEffect(()=>{
      getUsers();
    }  ,[])

    return (
      <div className="App">
        <h1> Social Credit App </h1>
        <input 
          placeholder="Name.." 
          onChange={(event)=>{
            setNewName(event.target.value);
          }}
        />
        <input 
          type="number" 
          placeholder="Default Credit..."
          onChange={(event)=>{
            setNewAge(event.target.value);
          }}
        />
        <button 
          onClick={createUser}>
          Create User
        </button>
        {users.map((users)=>{
          return (
          <div>
            <h2>Name :{users.name} </h2>
            <h2>Credit :{users.age} </h2>
            <button
              onClick={()=>{
                updateUp(users.id, users.age);
              }}>
              Increase Credit
            </button>
            <button
              onClick={()=>{
                updateDown(users.id, users.age);
              }}>
              Decrease Credit
            </button>
            <button onClick={()=>{
              deleteUser(users.id);
            }}>
              Delete User
            </button>
          </div>
        );
        })}
      </div>
    );
}

export default FbSocred;