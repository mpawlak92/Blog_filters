import ChangePostSortOrder from '../components/ChangePostSortOrder/ChangePostSortOrder.js';
import DropdownMenu from '../components/DropdownMenu/DropdownMenu.js';
import DateRangeImputs from '../components/DateRangeImputs/DateRangeImputs.js';
import { data } from './data.js';

// variable with data
export let availableItems = data;
export let filteredAvailableItems = availableItems;

// variable fo datapicker
export let rangepicker;

//setters function for global
export function setFilteredList(list) {
  filteredAvailableItems = list;
}
export function setRangepicker(value) {
  rangepicker = value;
}

ChangePostSortOrder();
DropdownMenu();
DateRangeImputs();
