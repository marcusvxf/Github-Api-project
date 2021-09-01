import React, { useState } from 'react';
import * as S from './style';
import useGithub from '../../hooks/githubHooks'

const Header = ()=>{
    const [userNameForsearch,setUserNameForsearch] = useState()

    const{getUser} = useGithub();

    const submitGetUser = () =>{
        if(!userNameForsearch)return;
        return getUser(userNameForsearch);
    }

    return(
        <header>
            <S.Wrapper>
                <input type='text'placeholder="Digite o UserName para pesquisa..." 
                onChange={(e)=> setUserNameForsearch(e.target.value) 
                
                } />

                <button onClick={submitGetUser} type="submit"><span>Buscar</span></button>

            </S.Wrapper>


        </header>
    );

};

export default Header;