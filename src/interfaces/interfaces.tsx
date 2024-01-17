export interface ListItem {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  url: string;
}

export interface ListContent {
  contentText: string;
  content: string;
}
export interface DropdownForm {
  type: string;
  buttonText: string;
  listContent: ListContent[];
}

export interface DropDownBtn {
  index: number;
  item: ListContent;
  router: any;
}

export interface Drawer {
  type: string;
  mainText: string;
  subText: ListContent[];
}
