import { filteredAvailableItems, setFilteredList } from '../../js/main.js';

// function for sort posts ascending
export function SortAscending() {
  let list = filteredAvailableItems.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  setFilteredList(list);
}
// function for sort posts descending
export function SortDescending() {
  let list = filteredAvailableItems.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  setFilteredList(list);
}
