import styled from 'styled-components'
import { Button, Col, Row } from 'antd'

const RowContainer = styled.div`
  height: 75px;
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 10;
  background: ${({theme}) => theme.white};
  @media ${({theme}) => theme.xs} {
    padding: 0 20px;
    .logo {
      width: 100%;
    }
  }
  @media ${({theme}) => theme.sm} {
    padding: 0 50px;
  }
  @media ${({theme}) => theme.lg} {
    padding: 0 75px;
  }
  @media ${({theme}) => theme.xl} {
    padding: 0 150px;
  }
  @media ${({theme}) => theme.xxl} {
    padding: 0 300px;
  }
`
const StyledRow = styled(Row)`
  width: 100%;
  & > div > a {
    display: flex;
  }
`
const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content:flex-end;
`

const StyledButton = styled(Button)`
  @media ${({theme}) => theme.md} {
    padding: 0 10px;
    font-size: 10px;
  }
  @media ${({theme}) => theme.lg} {
    padding: 0 12px;
    font-size: 12px;
  }
  @media ${({theme}) => theme.xl} {
    padding: 0 15px;
    font-size: 14px;
  }
`

export { StyledButton, StyledCol, RowContainer, StyledRow }
