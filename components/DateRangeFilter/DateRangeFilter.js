import { filteredAvailableItems, setFilteredList } from '../../js/main.js';

//function with filter posts by date range
export default function DateRangeFilter(startDate, endDate) {
  let list = filteredAvailableItems.filter((item) => {
    const publishDate = new Date(item.date).getTime();

    return (
      startDate == undefined ||
      endDate == undefined ||
      (startDate <= publishDate && endDate >= publishDate)
    );
  });

  setFilteredList(list);
}
