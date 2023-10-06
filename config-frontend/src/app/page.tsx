"use client";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Container } from '@/components/Container';

export default function Home() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  )
}
