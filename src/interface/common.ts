export interface DrowDownList {
  url: string;
  name: string;
}

export interface NavList {
  url: string;
  name: string;
  dropDownList?: {
    name: string;
    list: Array<DrowDownList>;
  };
}

export interface CommonType {
  navList?: Array<NavList> | [];
}
