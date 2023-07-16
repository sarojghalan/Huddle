import Link from "next/link";
import { FaCodeBranch, FaStar, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/sarojghalan/repos"
  );
  const repos = await response.json();
  return repos;
}

const Repos = async () => {
  const repos = await fetchRepos();
  console.log(repos);
  return (
      <div className="repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
          {repos?.map((item) => {
            return (
              <li key={item?.id}>
              <Link href={`/code/repos/${item?.name}`}>
                <h3>{item?.name}</h3>
                <p>{item?.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar /> {item?.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {item?.forks_count}
                  </span>
                  <span>
                    <FaEye /> {item?.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
            )
          })}
        </ul>
      </div>
  );
};

export default Repos;
