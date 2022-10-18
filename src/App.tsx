import { useState } from "react";
import { Conteiner } from "./components/Conteiner";
import { Search } from "./components/Search";
import { TheHeader } from "./components/TheHeader";
import { UserCard } from "./components/UserCard";
import { defaultUser } from "./mock";
import { GithubError, GithubUser, GithubUserLocal } from "./types";
import { extractLocalUser } from "./utils/extract-local-user";
import { isGithubUser } from "./utils/type-guards";

const baseUrl = 'https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<GithubUserLocal | null>(defaultUser)

  const fetchUser = async (username: string) => {
    const url = baseUrl + username
    const res = await fetch(url)
    const newUser = await res.json() as GithubUser | GithubError;

    if(isGithubUser(newUser)) {
      setUser(extractLocalUser(newUser))
    } else {
      setUser(null)
    }

  }
  return (
    <Conteiner>
      <TheHeader />
      <Search notFindError={!user} onSubmit={fetchUser} />
      {user && (
        <UserCard {...user} />
      )}
    </Conteiner>
  );
}

export default App;
