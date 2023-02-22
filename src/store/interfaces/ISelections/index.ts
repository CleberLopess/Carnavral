export interface ISelectionsState {
  selections: IEvent[];
  isLoading: boolean;
}

export interface IEvent {
  image?: string;
  title: string;
  local: string;
  hour: string;
}
