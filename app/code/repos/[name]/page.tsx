"use client";
import { Suspense } from "react";
import { useParams } from "next/navigation";
import RepoDirectory from "@/components/Repository/RepoDirectory";
import Link from "next/link";
import RepoInfo from "@/components/Repository/RepoInfo";

const RepoPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repository
      </Link>
      <Suspense fallback={<div>Loading repo ....</div>}>
        <RepoDirectory name={params?.name} />
      </Suspense>
      <Suspense fallback={<div>Loading repo ....</div>}>
        <RepoInfo name={params?.name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
