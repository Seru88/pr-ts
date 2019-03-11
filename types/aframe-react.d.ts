interface IElementClass {
  context: any;
  props: any;
  refs: any;
  state: any;
}

export class Entity implements IElementClass {
  context: any;
  props: any;
  refs: any;
  state: any;
  constructor(...args: any[]);
  componentDidUpdate(prevProps: any, prevState: any): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export class Scene implements IElementClass {
  context: any;
  props: any;
  refs: any;
  state: any;
  constructor(props: any);
  componentDidUpdate(prevProps: any, prevState: any): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export const options: {
  runSetAttributeOnUpdates: boolean;
};
