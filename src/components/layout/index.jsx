import React from 'react';
import useGithub from '../../hooks/githubHooks';
import Header from '../header';
import * as S from './style';

const Layout = ({children})=>{

    const {gitHubState} = useGithub();
    return(
        <S.WrapperLayout>
            <Header/>
            {gitHubState.loading ? <p>Loading</p> : <>{children}</>}
        </S.WrapperLayout>
    );

};

export default Layout;