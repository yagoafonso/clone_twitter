import styled from "styled-components";

export const ContainerLiked = styled.div`
    margin-top: 18px;
    margin-left: 75px;
    margin-bottom: 15px;
    span{
        margin-left: 8px;
        font-weight: 700;
        font-size: 0.813rem;
        line-height: 1rem;
        color: var(--grey-400);
    }
`

export const ContainerTweet = styled.div`
    width: 35rem;
    height: 160px;
    display: flex;
    box-shadow: 0px 1px 0px var(--grey-300);
    flex-direction: row;
    gap: 12px;
`

export const ContainerAvatar = styled.div`
    padding: 12px 0  0 16px;
`
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 29rem;
    strong{
        font-weight: 700;
        font-size: 0.9rem;
        line-height: 1.25rem;
        color: var(--black);
    }
    span{
        margin-left: 4px;
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 1.25rem;
        color: var(--grey-400);

    }

    time{
        margin-left: 4px;
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 1.25rem;
        color: var(--grey-400);

    }
    & time:before {
        content: "\u2022";
        padding:  0 0.25rem;
    }
    
`
export const ContenteMore = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    padding: 5px;
    cursor: pointer;
    & :hover{
        background: var(--blue-300);
        border-radius: 15px;
    }
`

export const ContainerContent = styled.div`
    width: 29rem;
    height: 5rem;
    align-items: center;
    font-weight: 350;
    font-size: 0.9rem;
    line-height: 1.25rem;
`
export const ContentTweetPost = styled.div`
    width: 29rem;
`
export const ContainerFooter = styled.footer`
    display: flex;
    gap: 90px;

    & .reply:hover{
        color: var(--blue-300);
        & svg{
            background: var(--grey-300);
            border-radius: 25px;
        }
    }
    & .retweet:hover{
        color: var(--green-300);
    }
    & .like:hover{
        color: var(--red-300);
    }
    & .share:hover{
        color: var(--blue-300);
    }

`
export const ContainerButton = styled.div`
    background: transparent;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;

`