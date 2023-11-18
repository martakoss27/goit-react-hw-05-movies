import { useSearchParams } from 'react-router-dom';
import {
  FormContainer,
  Form,
  InputStyled,
  ButtonStyled,
} from './MovieSearch.styled';

export const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('searchQuery') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.searchQuery.value.trim() === '') {
      alert('You didnt enter anything');
      return;
    }
    setSearchParams({ searchQuery: evt.target.elements.searchQuery.value });
    evt.currentTarget.reset();
  };

  return (
    <FormContainer>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          name="searchQuery"
          placeholder="Search for movie"
          autoComplete="on"
          autoFocus
          defaultValue={search}
        />
        <ButtonStyled type="submit">Search</ButtonStyled>
      </Form>
    </FormContainer>
  );
};
