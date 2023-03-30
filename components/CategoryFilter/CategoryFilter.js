import { availableItems, setFilteredList } from '../../js/main.js';

//function filtering posts by category
export default function CategoryFilter(category) {
  let list = availableItems.filter((item) => {
    return (
      item.category === category ||
      category === 'all category' ||
      category === 'Choose category'
    );
  });

  setFilteredList(list);
}
