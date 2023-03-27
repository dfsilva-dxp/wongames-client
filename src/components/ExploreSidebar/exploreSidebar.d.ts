export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

export type Field = {
  label: string;
  name: string;
};

export type Values = {
  [field: string]: boolean | string;
};

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: Values;
  // eslint-disable-next-line no-unused-vars
  onFilter?: (values: Values) => void;
};
