import _ from "lodash";

export default function paginater(garage, currentPage, pageSize) {
  const starIndex = (currentPage - 1) * pageSize;
  return _(garage).slice(starIndex).take(pageSize).value();
}
