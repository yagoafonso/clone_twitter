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
    ContainerInfo,
    Strong,
    Span, 
 } from './style';

 import { Avatar } from "../Avatar/Avatar";


import logo from '../../assets/logo_twitter.svg'

export function Sidebar(){
    return(
        <Container>
                <Img src={logo} alt="Logo do twitter" />
                <NavbarContainer>                
                    <NavbarUl>
                        <NavbarLink>
                            <a href=""><House size={20} weight="bold" />Home
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><Hash size={20} weight="bold" />Explore
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><Bell size={20} weight="bold" />Notifications
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><EnvelopeSimple size={20} weight="bold" />Messages
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><BookmarkSimple size={20} weight="bold" />Bookmarks
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><List size={20}weight="bold" />Lists
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><User size={20} weight="bold" />Profile
                            </a>
                        </NavbarLink>
                        <NavbarLink>
                            <a href=""><DotsThreeCircle size={20} weight="bold" />More
                            </a>
                        </NavbarLink>
                    </NavbarUl>
                    <ButtonContainer>
                            <a href="">Tweet</a>
                    </ButtonContainer>
                    <ContainerProfile>
                        <Avatar  src="https://github.com./yagoafonso.png"/> 
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