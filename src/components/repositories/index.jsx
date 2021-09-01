import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/githubHooks';
import RepositoriesItem from '../repositories-item';
import * as S from './style';

const Repositories = ()=>{

    const {gitHubState,getUserRepos,getUserStarred} = useGithub();
    const[hasuserForSearchRepos ,setHasuserForSearchRepos]=useState(false);

    useEffect(()=>{
        if(gitHubState.user.login){
            getUserRepos(gitHubState.user.login);
            getUserStarred(gitHubState.user.login);
        }
        setHasuserForSearchRepos(!!gitHubState.repositories);

    },[gitHubState.user.login]);


    return(
        <>
        {hasuserForSearchRepos ? 
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <S.WrapperList>
                    {gitHubState.repositories.map((item)=>{
                        return(
                        <RepositoriesItem 
                        key={item.id}
                        name={item.name} linkToRepo={item.html_url}  fullName={item.full_name} />);
                    })}
                </S.WrapperList>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel >
                <S.WrapperList>
                    {gitHubState.starred.map((item)=>{
                        return(
                        <RepositoriesItem 
                        key={item.id}
                        name={item.name} linkToRepo={item.html_url}  fullName={item.full_name}  />);
                    })}
                </S.WrapperList>
            </S.WrapperTabPanel>
        </S.WrapperTabs> :
        
        <></>
        }
        </>
    );
};

export default Repositories;