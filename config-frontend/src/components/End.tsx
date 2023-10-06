import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'

const style: CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}

export interface BoxProps {
    name: string
}

interface DropResult {
    name: string
}

export const End: FC<BoxProps> = function Box({ name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'end',
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {

            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{ ...style, opacity }}>
            <>end element</>
        </div>
    )
}
