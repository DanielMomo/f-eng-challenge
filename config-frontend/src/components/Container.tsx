"use client";

import type { FC } from 'react'
import { memo } from 'react'
import { LogicBox } from '@/components/LogicBox'
import { Start } from '@/components/Start'
import { Logic } from '@/components/Logic'
import { End } from '@/components/End'
import styled from "styled-components"

const Wall = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    clear: both;
`


export const Container: FC = memo(function Container() {
    return (
        <Wall>
            <Content>
                <Start name="Glass" />
                <Logic name="Banana" />
                <End name="Paper" />
            </Content>
            <Content>
                <LogicBox />
            </Content>
        </Wall>
    )
})