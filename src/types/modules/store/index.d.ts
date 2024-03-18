export interface StoreDataItemState {
  label: string;
  value: number | string;
}

export interface StoreDataState {
  operator: StoreDataItemState[];
  location: StoreDataItemState[];
  discount: StoreDataItemState[];
  fee: StoreDataItemState[];
}

export interface StoreUserState {
  userName: string;
  role: number;
  token: string;
  remember: boolean;
}

export interface StoreLoginAction {
  userName: string;
  password: string;
  remember: boolean;
}
