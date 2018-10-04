import React from 'react';


const Header = styled.header;
const LogoHeader = styled.div;
const LogoImage = styled.img;
const InputContainer = styled.div;
const SearchInput = styled.input;
const SearchIcon = styled.img;
const IconsContainer = styled.div;
const SocialIcons = styled.div;

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <LogoImage alt="" src={'../../assets/igcameralogo.png'} />
                <LogoImage alt="" src={'../../assets/iglogo.png'} />
            </LogoHeader>
                <InputContainer>
                <SearchIcon className="search" />
                <SearchInput
                    type="text"
                    placeholder="Search John Spraul's brain" />
                </InputContainer>
                <IconsContainer>
                    <SocialIcons>
                        <i className="compass" />
                    </SocialIcons>
                    <SocialIcons>
                        <i className="heart" />
                    </SocialIcons>
                    <SocialIcons>
                        <i className="headandshoulders" />
                    </SocialIcons>
                </IconsContainer>
        </Header>
    )
}

export default SearchBar;