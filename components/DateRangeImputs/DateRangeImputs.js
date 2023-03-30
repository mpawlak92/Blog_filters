import DateRangePicker from '../..//node_modules/vanillajs-datepicker/js/DateRangePicker.js';
import DateRangeFilter from '../DateRangeFilter/DateRangeFilter.js';
import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
import drawBlogPosts from '../drawBlogPosts/drawBlogPosts.js';
import { rangepicker, setRangepicker } from '../../js/main.js';

//function for reset datapicker inputs
export function ResetDateRange(rangepicker) {
  const resetDateRangeBtn = document.querySelector('.date-range-reset-btn');

  resetDateRangeBtn.addEventListener('click', () => {
    rangepicker.setDates({
      clear: true,
    });

    const selected = document.querySelector('.selected');

    CategoryFilter(selected.textContent);
    //reset filter
    DateRangeFilter(undefined, undefined);

    drawBlogPosts();
  });
}

//function for handle datapicker inputs behavior
export default function DateRangeImputs() {
  const elem = document.getElementById('foo');
  //initial datapicker plugin
  setRangepicker(
    new DateRangePicker(elem, {
      // ...options
      format: 'dd-mm-yyyy',
    })
  );

  ResetDateRange(rangepicker);

  //set behavior datapicker inputs
  elem.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    CategoryFilter(selected.textContent);

    const startDate = rangepicker.inputs[0].datepicker.dates[0];
    const endDate = rangepicker.inputs[1].datepicker.dates[0];
    DateRangeFilter(startDate, endDate);
    drawBlogPosts();
  });
}
