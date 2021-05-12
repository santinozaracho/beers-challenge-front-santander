import styled from 'styled-components'
import { Layout } from 'antd'

const StyledLayout = styled(Layout)`
  height:100vh;
  padding-top: 75px;
  background: ${({theme}) => theme.bgLight};

  @media ${({theme}) => theme.sm} {
    padding-bottom: 75px;
  }
  @media ${({theme}) => theme.md} {
    padding-bottom: 0;
  }
`
export { StyledLayout }
