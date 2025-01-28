import { h } from "preact";

export interface VirtualListProps<T = object> {
  itemWidth?: number;
  items: T[];
  listHeight: string;
  render: (item: T, index: number) => h.JSX.Element;
}