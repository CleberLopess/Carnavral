import moment from "moment";

export const formatExcluingYear = (date: string) => {
  return moment(date).format("DD/MM");
};

export const formatIncludingFullYear = (date: string) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatIncludingYear = (date: string) => {
  return moment(date).format("DD/MM/YY");
};
