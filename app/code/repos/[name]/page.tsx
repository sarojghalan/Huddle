"use client";
import { useParams } from "next/navigation";
import RepoDirectory from "@/components/Repository/RepoDirectory";
import Link from "next/link";
import RepoInfo from "@/components/Repository/RepoInfo";

const RepoPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="card">
      <Link href="/code/repos"  className="btn btn-back">Back To Repository</Link>
      <RepoDirectory name={params?.name} />
      <RepoInfo name={params?.name} />
     </div>
  );
};

export default RepoPage;
