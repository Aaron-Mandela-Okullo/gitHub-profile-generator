import React from "react";

const Repo = ({ repos }) => {
  return (
    <>
      {repos.map((repo, idx) => (
        <div key={idx} className="repo">
          <a href={repo.html_url}className="repo-link" target="_blank">
            {repo.full_name}
          </a>
          <div className="repo-h1">
            <h1 className="forks">{repo.language}</h1>
            <h1 className="forks">Forks :{repo.forks}</h1>
            <h1 className="forks">Stars :{repo.stargazers_count}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Repo;
