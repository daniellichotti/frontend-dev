import { useEffect, useState } from "react";
import "./App.css";
import { UserCard } from "./components/UserCard";

export function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        //Verificar se existe a transofrmação antes de setar
        setUserList(data);
      } catch (error) {
        console.log("Erro ao buscar os personagens: ", error);
      }
    }

    fetchApi();
  }, []);

  return (
    <div>
      {userList.map((user) => (
        <UserCard name={user.name} email={user.email} />
      ))}
    </div>
  );
}
