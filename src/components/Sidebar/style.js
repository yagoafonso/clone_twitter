import styled from 'styled-components'

export const Container = styled.div`
    


`

export const Img = styled.img`
    margin-top: 10px;
    margin-left: 6px;
`
export const NavbarContainer = styled.div`

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;

    margin-top: 45px;
    margin-left: 9px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
export const NavbarUl = styled.ul`

`
export const NavbarLink = styled.li`
    
    a {
        color: var(--black);
        display: flex;
        gap: 12px;

        text-decoration: none;
        margin-bottom: 20px;

        &:hover{
        color: var(--blue-300);
        }   
    }
`
export const ButtonContainer = styled.div`
    width: 225px;
    height: 48px;
    padding: 10px;

    display: flex;
    justify-content: center;

    background: var(--blue-300);

    border-radius: 24px;

    cursor: pointer;

    a{
        font-weight: 700;
        font-size: 0.938rem;
        line-height: 1.25rem;
        color: var(--white);
        text-decoration: none;
    }

`
export const ContainerProfile = styled.div`
    width: 225px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const Avatar = styled.img`
    width: 48px;
    height: 48px;

    border-radius: 24px;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Strong = styled.strong`
    font-weight: 700;
    size: 1rem;
    line-height: 1.25rem;
`

export const Span = styled.span`
    font-weight: 400;
    size: 1rem;
    line-height: 1.25rem;
    color: var(--grey-400);
`