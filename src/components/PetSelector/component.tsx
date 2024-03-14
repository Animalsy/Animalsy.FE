import React, { ReactNode } from 'react'
import { Wrapper } from './styles'

type Props = {
  children: ReactNode
}

const PetSelector = (props: Props) => (
  <Wrapper>
    PetSelector context
  </Wrapper>
)

PetSelector.defaultProps = {
  // bla: 'test',
}

export default PetSelector
