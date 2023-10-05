"use client"
import styled from "styled-components"

const Body = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  height: 640px;
  width: 800px;
  border-radius: 10px;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`

export default function Home() {
  return (
    <Body>
      <Container>
        <Left>
          <h1>Left</h1>
        </Left>
        <Right>
          <h1>Right</h1>
        </Right>
      </Container>
    </Body>
  )
}
