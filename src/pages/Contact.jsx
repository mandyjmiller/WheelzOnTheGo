import React, { useState } from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Alert from '../components/Alert';

// THIS IS SEARCH FUNCTIOJNALITY FROM PUPSTER PROJECT. WILL REPURPOSE ON MAIN PAGE AND REPLACE THIS CONENT WITH CONTACT DETAILS

function Contact() {
  const [searchData, setSearchData] = useState({
    search: '',
    breeds: [],
    results: [],
    error: '',
  });

  const handleInputChange = (event) => {
    // Functional form of setter function
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      search: event.target.value,
    }));

    // Suggest possible dogs when the user begins to type
    API.getBaseBreedsList()
      .then((res) =>
        setSearchData((prevSearchData) => ({
          ...prevSearchData,
          breeds: res.data.message,
        }))
      )
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getDogsOfBreed(searchData.search)
      .then((res) => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        setSearchData({ ...searchData, results: res.data.message, error: '' });
      })
      .catch((err) => setSearchData({ ...searchData, error: err.message }));
  };

  return (
    <div>
      <Container style={{ minHeight: '80%' }}>
        <h1 className="text-center">CONTACT US</h1>
        <Alert
          type="danger"
          style={{ opacity: searchData.error ? 1 : 0, marginBottom: 10 }}
        >
          {searchData.error}
          {console.log(searchData.search)}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          breeds={searchData.breeds}
        />
        <SearchResults results={searchData.results} />
      </Container>
    </div>
  );
}

export default Contact;
