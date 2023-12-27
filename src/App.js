import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import Grid from './components/Grid/Grid';
import { Button } from './components/Button/Button';
import { TextContainer } from './components/TextContainer/TextContainer';
import { ImageContainer } from './components/ImageContainer/ImageContainer';

function App() {
  const [buttonTitle, setButtonTitle] = useState('Show text')


  const toggleButtonTitle = () => {
    if (buttonTitle === 'Show text') setButtonTitle('Hide text')
    else setButtonTitle('Show text')
  }

  const handleClick = () => {
    toggleButtonTitle()
  }

  return (
    <>
      <Navbar />
      <Grid
        columns={1}
        width='70%'
      >
        <Grid columns={3}>
          <Button
            onClick={handleClick}
            title={buttonTitle}
          />
          <TextContainer showText={buttonTitle === 'Hide text'} />
          <ImageContainer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;