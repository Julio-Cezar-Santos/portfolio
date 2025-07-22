import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  margin-left: 16px;
  height: 100%;
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
  display: inline-block;
  border-radius: 4px;
  target: _blank;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`
