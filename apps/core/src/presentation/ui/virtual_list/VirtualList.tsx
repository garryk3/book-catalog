import { h } from "preact";
import { VList } from 'virtua';
import { memo, useState } from 'preact/compat';
// @ts-ignore
import { useNativeResizeObserver } from "@front-utils/react-hooks";
import { useComputed, useSignal } from "@preact/signals";

import { VirtualListProps } from './types';
import classes from './styles.module.css';

const splitItemsIntoRows = <T, >(items: T[], rowCount: number): T[][] => {
    const rows: T[][] = [];

    for(let i = 0; i < items.length; i += rowCount) {
        const lastCutIndex = i + rowCount <= items.length ? i + rowCount : items.length;
        const item = items.slice(i, lastCutIndex);

        rows.push(item);
    }
    return rows;
};

export const VirtualList = memo(<T,>({ 
    itemWidth = 100, 
    items, 
    listHeight,
    render,
}: VirtualListProps<T>) => {
    const [node, setNode] = useState<HTMLDivElement | null>(null);
    const columnsCount = useSignal(1);
    const rows = useComputed(() => splitItemsIntoRows(items, columnsCount.value));

    useNativeResizeObserver({
        node,
        callback: (entries: ResizeObserverEntry[]) => {
            entries.forEach((entry) => {
                columnsCount.value = Math.floor(entry.contentRect.width / itemWidth);
            });
        },
    });

    return (
        <div
            ref={setNode}
            className={classes['virtual-grid-container']}
            style={{ height: listHeight,}}
        >
            <VList
                count={rows.value.length}
                itemSize={itemWidth}
                overscan={5}
            >
                {(rowIndex) => (
                    <div
                        key={rowIndex}
                        className={classes['virtual-grid-row']}
                    >
                        {rows.value[rowIndex].map((item, index) => (
                            <div
                                key={index}
                                className={classes['virtual-grid-item']}
                                style={{width: itemWidth,}}
                            >
                                {render(item, rowIndex * columnsCount.value + index)}
                            </div>
                        ))}
                    </div>
                )}
            </VList>
        </div>
    );
});