import React from 'react';
import { Container } from 'react-bootstrap';
import Searchbar from './components/Searchbar';

function App() {
  const [searchValue, setSearchValue] = React.useState<string>('');

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <Container>
      <Searchbar
        searchValue={searchValue}
        onSearchValueChange={handleSearchValueChange}
      />
    </Container>
  );
}

export default App;
