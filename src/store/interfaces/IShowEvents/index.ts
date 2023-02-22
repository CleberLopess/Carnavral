export interface IDataBaseEventsState {
  showEvents: IEvents[];
  isLoading: boolean;
}

export interface IEvents {
  data: string;
  title: string;
  centro: IEvent[];
  zonanorte: IEvent[];
  zonasul: IEvent[];
  zonaleste: IEvent[];
  zonaoeste: IEvent[];
}

export interface IEvent {
  image?: string;
  title: string;
  local: string;
  hour: string;
}
