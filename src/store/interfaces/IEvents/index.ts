export interface IDataBaseEventsState {
  events: IEvents[];
  isLoading: boolean;
}

export interface IEvents {
  data: Date;
  title: string;
  center: IEvent[];
  north: IEvent[];
  south: IEvent[];
  east: IEvent[];
  west: IEvent[];
}

export interface IEvent {
  image?: string;
  title: string;
  local: string;
  hour: string;
}
