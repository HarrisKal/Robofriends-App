import Robots from "./robots";
import {searchText} from './SearchBar'
 
const FilteredRobots = Robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchText.toLowerCase())
  );

  export default FilteredRobots;