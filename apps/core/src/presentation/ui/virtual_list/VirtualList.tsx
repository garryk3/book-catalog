import { h } from "preact";
import { VList } from 'virtua'; // Используем VList вместо Virtua
import { memo, useRef } from 'preact/compat';

import { VirtualListProps } from './types';

export const VirtualList = memo(<T,>({ 
    itemWidth = 100, 
    items, 
    render,
}: VirtualListProps<T>) => {
    const parentRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={parentRef}
            style={{
                height  : '100vh',
                width   : '100%',
                overflow: 'auto',
            }}
        >
            <VList
                count={items.length} // Используем count вместо totalCount
                itemSize={itemWidth}
                overscan={5}
            >
                {(index) => ( // Используем index напрямую
                    <div
                        key={index}
                        style={{
                            width: itemWidth,
                        }}
                    >
                        {render(items[index], index)}
                    </div>
                )}
            </VList>
        </div>
    );
});