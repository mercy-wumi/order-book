export interface IBooks {
  tid: string;
  cid: string;
  client: Client;
  security_code: string;
  commodity_code: string;
  units: string;
  order_type: string;
  board_type: string;
  order_price: string;
  matched_qty: string;
  status: string;
  security_type: string;
  security_location_code: string;
  created: string;
  updated: string;
}
export interface Client {
  cid: string;
  rnb: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  share_code?: null;
  shareable_link: string;
  account_type: string;
  user_account_type: string;
  viewable_markets?: (string)[] | null;
  client_settings: ClientSettings;
  is_certified: string;
  address: string;
  is_approved: string;
  is_kyc_complete: string;
  is_sub_account: string;
  referral_code: string;
  created: string;
}
export interface ClientSettings {
  client_cid: string;
  can_buy_securities: string;
  can_sell_securities: string;
  can_dispatch: string;
  transaction_limit: string;
  is_deactivated: string;
}


export type Props = {
    children: React.ReactNode
}

export type BookType = {
    orderBook: IBooks[];
    setOrderBook: React.Dispatch<React.SetStateAction<IBooks[]>>
}