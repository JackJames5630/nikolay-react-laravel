import styled from 'styled-components'
import mobileWidth from "../style/mobileWidth.js"

const StyledWhiteButton = styled.button`
  ${({ theme }) => mobileWidth.mixins.WhiteButton}
`
const StyledDarkButton = styled.button`
  ${({ theme }) => mobileWidth.mixins.darkButton}
`
const StyledCardGroup = styled.div`
  ${({ theme }) => mobileWidth.mixins.flexCenter}
`

const StyledCardButton = styled.button`
  ${({ theme }) => mobileWidth.mixins.CardButton}
`

const StyledWhiteAddButton = styled.button`
  ${({ theme }) => mobileWidth.mixins.StyledCard}
`

const StyledPurpleButton = styled.button`
  ${({ theme }) => theme.mixins.purpleButton}
`

const StyledLinkUrl = styled.li`
  ${({ theme }) => mobileWidth.mixins.flexCenter}
  text-decoration: underline;
`


export { StyledWhiteButton, StyledDarkButton, StyledCardGroup, StyledCardButton, StyledWhiteAddButton, StyledPurpleButton, StyledLinkUrl }