import {
    House, 
    Hash,
    Bell,
    EnvelopeSimple,
    BookmarkSimple,
    List,
    User,
    DotsThreeCircle,
    DotsThree
} from "phosphor-react";

import {
    Container,
    Img, 
    NavbarContainer,
    NavbarUl,
    NavbarLink,
    ButtonContainer,
    ContainerProfile,
    Avatar,
    ContainerInfo,
    Strong,
    Span
 } from './style';



import logo from '../../assets/logo_twitter.svg'

export function Sidebar(){
    return(
        <Container>
                <Img src={logo} alt="Logo do twitter" />
                <NavbarContainer>                
                    <NavbarUl>
                        <NavbarLink>
                            <a href=""><House size={20}/>Home
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><Hash size={20}/>Explore
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><Bell size={20}/>Notifications
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><EnvelopeSimple size={20}/>Messages
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><BookmarkSimple size={20}/>Bookmarks
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><List size={20}/>Lists
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><User size={20}/>Profile
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><DotsThreeCircle size={20}/>More
                            </a>
                        </NavbarLink>
                        <ButtonContainer>
                            <a href="">Tweet</a>
                        </ButtonContainer>
                    </NavbarUl>
                    <ContainerProfile>
                        <Avatar src="https://github.com/yagoafonso.png" />
                        <ContainerInfo>
                            <Strong>Yago Afonso</Strong>
                            <Span>@Yagoafonso</Span>
                        </ContainerInfo>
                    <DotsThree/>
                    </ContainerProfile>
                </NavbarContainer>
        </Container>
    );
}