import React from 'react';
import { IconSearch } from '../../icons';
import { Button } from '../Button';
import styles from './Search.module.scss';


interface SearchProps {
  notFindError: boolean,
  onSubmit: (text: string) => void,
}

export const Search = ({ notFindError, onSubmit }: SearchProps) => {

  type FormFields = {
    usernames: HTMLInputElement
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    console.log(event);
    

    const text = event.currentTarget.usernames.value
    if(text) {
      onSubmit(text)
      event.currentTarget.reset();
    }

  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <IconSearch />
        </label>
        <input 
          type="text" 
          id="search"
          name="usernames"
          placeholder='Search GitHub username...'
          autoComplete=''
          className={styles.textField}
        />
        {notFindError && (<div className={styles.error}>not result</div>)}
        <Button>Search</Button>
      </div>
    </form>
  );
};
