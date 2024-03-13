import React, { useState } from 'react';
import API from '../utils/API';
import Project from '../components/Project';
import Alert from '../components/Alert';

function ProjectGallery() {
  const [state, setState] = useState({
    image: '',
    match: false,
    matchCount: 0,
    showDog: false,
  });

  const loadNextDog = () => {
    API.getRandomDog()
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          image: res.data.message,
          showDog: true,
        }));
      })
      .catch((err) => console.log(err));
  };

  const handleBtnClick = (event) => {
    const btnType = event.target.getAttribute('data-value');
    const newState = { ...state };

    if (btnType === 'pick') {
      newState.match = Math.floor(Math.random() * 5) + 1 === 1;
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      newState.match = false;
    }

    setState(newState);
    loadNextDog();
  };

  // THIS SECTION IS BORRWED FROM THE PUPSTER CLASS ACTIVITY. WILL PROBABLY ABANDON IT BUT IT'S A PLACEHOLDER FOR NOW
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="mt-5">Browse Cars</h1>
      <h3>Click cars to like</h3>
      {state.showDog ? (
        <>
          <Project image={state.image} handleBtnClick={handleBtnClick} />
          <h1>You liked {state.matchCount} of my projects so far!</h1>
          <Alert style={{ opacity: state.match ? 1 : 0 }} type="success">
            That Car is Availble!!!
          </Alert>
        </>
      ) : (
        <button
          type="button"
          className="btn btn-secondary btn-lg mt-5"
          /* Clicking the button will display the dog card deck */
          onClick={loadNextDog}
        >
          Click To Start
        </button>
      )}
    </div>
  );
}

export default ProjectGallery;
