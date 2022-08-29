import styled from 'styled-components'

export const ContainerTwitterPost = styled.div`
  width: 35rem;
  height: 160px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 1px 0px var(--grey-300);
  gap: 12px;
`
export const ContainerAvatar = styled.div`
  padding: 12px 0  0 16px;
`
export const ContainerForm = styled.form`
  width: 506px;
  height: 144px;
  margin: 8px 0;

`
export const ContainerTextArea = styled.textarea `
  width: 100%;
  border: 0;
  resize: none;
  height: 3.5rem;
  padding: 0.75rem;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
`
export const TextCanReply = styled.span`
  font-weight: 500;
  size: 0.813rem;
  line-height: 1rem;
  color: var(--blue-300);
  display: flex;
  gap: 8px;
  cursor: pointer;
`
export const ContainerFooter = styled.footer`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  div{
    display: flex;
    align-items: center;
    gap: 15px;
  }
`
export const ContainerButtonOptions = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  &:hover{
    background: var(--grey-300);
    border-radius: 15px;
  }
`
export const ButtonConfirmTwitter = styled.button`
  width: 74px;
  height: 40px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 20px;
  gap: 10px;
  background: var(--blue-300);
  color: var(--white);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  border: none;
  cursor: pointer;

`