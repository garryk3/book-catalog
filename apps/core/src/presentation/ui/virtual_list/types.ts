import { h } from "preact";

export interface VirtualListProps<T = object> {
  itemWidth?: number;
  items: T[];
  render: (item: T, index: number) => h.JSX.Element;
}