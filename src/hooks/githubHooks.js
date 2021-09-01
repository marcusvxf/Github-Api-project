
import { useContext } from "react";
import { GitHubContext } from "../Providers/gitHubProvide";

const useGithub = () => {

  const { gitHubState,getUser,getUserRepos,getUserStarred} = useContext(GitHubContext);

  return { gitHubState,getUser,getUserRepos,getUserStarred};
};

export default useGithub;