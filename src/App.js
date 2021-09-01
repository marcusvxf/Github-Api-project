import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/githubHooks";
import NoSearch from "./components/noSearch";



function App() {


  const {gitHubState} = useGithub()
  return (
        <Layout>
          {gitHubState.hasUser ? (
              <>
              {gitHubState.loading ? (<p>Loading</p> ):
              (<><Profile/>
              <Repositories/></>)}
              </>
          ):<NoSearch></NoSearch> }

        </Layout>
    
  );
}

export default App;
