import React from 'react';
import { FilterWrapper } from '../FilterWrapper/FilterWrapper';
import { Chip } from '../../../../components/Chip/Chip';
import styles from './Brand.module.scss';
import { Brand as IBrand } from '../../../../types/dataTypes';
import CatalogService from '../../../../Service/CatalogService';
import { InputBase } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { debounce } from 'lodash';

export const Brand: React.FC<{
  id: string;
  selectedId: string;
  openContentForId: (id: string) => void;
  onClose: () => void;
}> = React.memo(({ id, openContentForId, selectedId, onClose }) => {
  const [brands, setBrands] = React.useState<IBrand[]>([]);
  const [search, setSearch] = React.useState<string | undefined>(undefined);

  const clearSearch = () => {
    setSearch(undefined);
  };

  React.useEffect(() => {
    CatalogService.fetchFilters().then(res => {
      setBrands(res);
    });
  }, []);

  React.useEffect(() => {
    if (selectedId !== id) {
      clearSearch();
    }
    // eslint-disable-next-line
  }, [selectedId]);

  const filteredItems = React.useMemo(() => {
    if (!search) {
      return brands;
    }
    return brands.filter(brand =>
      brand.name.toLocaleLowerCase().includes(search)
    );
  }, [search, brands]);

  const onSearch = debounce((input: string) => {
    console.log(input);
    if (!input || input.length === 0) {
      clearSearch();
    } else {
      setSearch(input);
    }
  }, 300);

  const onChange = React.useCallback((event: any) => {
    onSearch(event.target.value);
    // eslint-disable-next-line
  }, []);

  const content = (
    <div className={styles['brandSection']}>
      <div className={styles['search']}>
        <div className={styles['searchIcon']}>
          <SearchOutlined />
        </div>
        <InputBase
          id={'brand-search'}
          onChange={onChange}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          inputComponent={'input'}
        />
      </div>
      {filteredItems.map(brand => (
        <Chip name={brand.name} key={brand.id} />
      ))}
    </div>
  );
  return (
    <FilterWrapper
      title={'Brand'}
      content={content}
      openContentForId={openContentForId}
      open={id === selectedId}
      id={id}
      onClose={onClose}
    />
  );
});
