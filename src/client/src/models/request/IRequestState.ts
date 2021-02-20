interface IActionState {
  name?: string;
  payload: any;
}

export interface IRequestState {
  loader: {
    actions: IActionState[];
    refreshing: string[];
    fulfilled: IActionState[];
  };
}
