import { FC, useState, KeyboardEvent, ChangeEvent } from 'react';
import { TypeSetState } from '@/types/common';
import { IPlace } from '@/types/place';
import style from './Search.module.scss';

interface ISearch {
  setPlaces: TypeSetState<IPlace[]>;
  initialPlaces: IPlace[];
  setIsLoading: TypeSetState<boolean>;
}
const Search: FC<ISearch> = ({ setPlaces, initialPlaces, setIsLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchHendler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setPlaces(
        initialPlaces.filter(
          (place) =>
            place.location.country.toLowerCase().includes(value) ||
            place.location.sity.toLowerCase().includes(value)
        )
      );
    } else setPlaces(initialPlaces);
    setTimeout(() => setIsLoading(false), 300);
  };
  return (
    <div className={style.search}>
      <span className="material-icons-outlined">search</span>
      <input
        type="text"
        onChange={searchHendler}
        value={searchTerm}
        placeholder="Search place..."
      />
    </div>
  );
};

export default Search;
