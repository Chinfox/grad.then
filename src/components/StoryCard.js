import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  StyledH3,
  StyledH4,
  StyledP,
  media
} from '../theme/globalStyle'
import { ButtonBig } from '../components/Button'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 'img text text';
  background: ${props => props.theme.primary.light};
  border-radius: 4px;
  ${media.tablet`
    grid-template-areas:
    'img img img'
    'text text text';
    //grid-template-rows: 30% minmax(17em, auto);
  `} ${media.phone`
    margin: 0;
  `};
`
const Image = styled.img`
  grid-area: img;
  justify-self: center;
  margin: 1.3rem 0.5rem 0.5rem 0.5rem;
  border-radius: 90px;
  border: 1px solid ${props => props.theme.secondary.yellow};
  width: 8rem;
  height: 8rem;
  ${media.desktop`
    width: 6rem;
    height: 6rem;
  `};
`

const Text = styled.div`
  grid-area: text;
  padding: 0.5rem;
  margin: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${media.desktop`
    justify-content: space-between;
  `} ${media.tablet`
    padding-top: 0;
    margin-top: 0.5rem;
    //margin-bottom: auto;
  `} ${media.phone`
    padding: 0 0.3rem;
    margin-top: 0;
  `};
`

const StoryTitle = StyledH3.extend`
  grid-column: 1 / span 4;
  color: ${props => props.theme.white};
  margin: 0.5rem 0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  ${media.desktop`
    font-size: 1.2rem;
  `} ${media.phone`
    padding: 0.5rem 0.5rem 0 0.5rem;
    font-size: 1.25rem;
  `};
`

const StoryAuthor = StyledH4.extend`
  grid-column: 1 / span 4;
  color: ${props => props.theme.secondary.green};
  margin: 0.25em;
  padding: 0;
  font-size: 1rem;
  text-align: center;
  ${media.phone`
    margin: 0.5rem;
  `};
`

const StoryText = StyledP.extend`
  grid-column: 1 / span 4;
  color: ${props => props.theme.white};
  margin: 0.2rem 0.2rem 1.2rem 0.2rem;
  padding: 0 0.5em;
  min-height: 8rem;
  font-size: 1.125rem;
  ${media.giant`
    font-size: 1.1rem;
    min-height: 6rem;
  `} ${media.desktop`
    font-size: 1rem;
  `} ${media.phone`
    margin-top:0;
    padding: 0 0.25rem;
    font-size: 1.05rem;
  `};
`

const ButtonContainer = styled.div`
  grid-column: 1 / span 4;
  align-self: center;
  justify-self: center;
  margin-top: auto;
  ${media.desktop`
    margin-bottom: 1rem;
  `} ${media.tablet`
    margin-bottom: 0.5rem;
    & > button {
      padding: 0.75rem 1.5rem;
    }
  `};
`

class StoryCard extends React.Component {
  readStory(event) {
    console.log('button is clicked')
  }
  render() {
    return (
      <Wrapper>
        <Image src={this.props.img} alt={this.props.title} />
        <Text>
          <StoryTitle>{this.props.title}</StoryTitle>
          <StoryAuthor>{`Author: ${this.props.author}`}</StoryAuthor>
          <StoryText>{this.props.text}</StoryText>
          <ButtonContainer>
            <ButtonBig
              color={props => props.theme.white}
              border={props => props.theme.white}
              onClick={e => this.readStory(e)}>
              read more
            </ButtonBig>
          </ButtonContainer>
        </Text>
      </Wrapper>
    )
  }
}

StoryCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string
}

export default StoryCard
