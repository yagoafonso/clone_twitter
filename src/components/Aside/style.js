import styled from 'styled-components'

export const ContainerAside = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerSearch = styled.form`
  width: 14rem;
  height: 2rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: text;
  background: var(--grey-300);
  gap: 10px;
  border-radius: 22px;
  margin-top: 8px;
  
  :focus-within{
    background: var(--white);
    border: 1px solid var(--blue-300);

    svg{
      color: var(--blue-300);
    }
  }
`

export const ContentInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-weight: 400;
  font-size: .9rem;
  line-height: 1.25rem;
  color: var(--grey-400);


`