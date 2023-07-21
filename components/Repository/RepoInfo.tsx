import Link from "next/link";

interface PreInfoParamsI {
  name: string;
}

async function fetchRepoContent(name: string) {
    await new Promise((resolve) => setInterval(resolve, 1000));
  const response = await fetch(
    `https://api.github.com/repos/sarojghalan/${name}/contents` , {
      next : {
        revalidate: 60
      }
    }
  );

  const content = await response.json();
  return content;
}

const RepoInfo = async ({name} : PreInfoParamsI) => {
  const content = await fetchRepoContent(name);
  const dirs = content.filter(((item: { type: string; }) => item.type === 'dir'))
  return <>
    <h3>RDirectories</h3>
    <ul>
        {dirs?.map((dir: any) => (
            <li key={dir.path}>
                <Link href={`/code/repos/${name}/${dir.path}`}>
                    {dir.path}
                </Link>
            </li>
        ))}
    </ul>
  </>;
};

export default RepoInfo;
