"use client";

import { useState } from "react";
import { authClient } from "../../../../lib/auth-client";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";





// export default function Home() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const { data: session } = authClient.useSession();

//   const onSubmit = () => {
//     authClient.signUp.email(
//       { email, name, password },
//       {
//         onError: () => window.alert("Something went wrong"),
//         onSuccess: () => window.alert("User created successfully"),
//       }
//     );
//   };

//   const onLogin = () => {
//     authClient.signIn.email(
//       { email, password },
//       {
//         onError: () => window.alert("Something went wrong"),
//         onSuccess: () => window.alert("Login successful"),
//       }
//     );
//   };

//   // ✅ This return is now inside the component
//   if (session) {
//     return (
//       <div className="flex flex-col p-4 gap-y-5">
//         <p>Logged in as {session.user.name}</p>
//         <Button onClick={() => authClient.signOut()}>Sign Out</Button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-y-10">
//       <div className="p-6 max-w-sm mx-auto space-y-4">
//         <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//         <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <Button onClick={onSubmit}>Create User</Button>
//       </div>

//       <div className="p-6 max-w-sm mx-auto space-y-4">
//         <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <Button onClick={onLogin}>Log In</Button>
//       </div>
//     </div>
//   );
// }
export const HomeView = () =>{
    const router = useRouter()
  const {data: session} = authClient.useSession();
   
  if(!session){
    return(
      <p>Looding....</p>
    )
  }

  return (
      <div className="flex flex-col p-4 gap-y-5">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut({
                fetchOptions: {
                    onSuccess:() => router.push ("/sign-in")
                }
            })
        }>
            Sign Out
        </Button>
      </div>
    );
}

// export default page;