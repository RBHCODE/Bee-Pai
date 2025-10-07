"use client";


import { authClient } from "../lib/auth-client";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

import { useState } from "react";
const onSubmit = () => {
      const { data: session} = authClient.useSession()
       authClient.signUp.email({
          email,
          name,
          password
       }, {
        onError: () => {
          window.alert("Something wrong"); 
        },
        onSuccess: () =>{
          window.alert("Success");
        }
       }) 
    }
const onLogin = () => {
      const { data: session} = authClient.useSession()
       authClient.signIn.email({
          email,
          password
       }, {
        onError: () => {
          window.alert("Something wrong"); 
        },
        onSuccess: () =>{
          window.alert("Success");
        }
       }) 
    }


  if(session){
    return(
    <div className="flex flex-col p-4 gap-y-5">
      <p>Loggin as {session.user.name}</p>
      <Button onClick={() => authClient.SignOut()}>
        Sign Out
        </Button>
    </div>
    )
      
   
  }

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-6 max-w-sm mx-auto space-y-4">
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onSubmit}>Create User</Button>
      </div>
      <div className="p-6 max-w-sm mx-auto space-y-4">
        {/* <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> */}
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onLogin}>Log In</Button>
      </div>
    </div>
  );
}
