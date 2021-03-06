import React from 'react';
import LogRocket from 'logrocket';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider } from '@material-ui/core';

import ItemCard from './ItemCard';
import data from './store';

LogRocket.init('9aapdz/the-best-bang');

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    display: 'block',
    margin: '16px 0px 32px 0px',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  cardsLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gridGap: '30px',
    maxWidth: '900px',
    margin: '0 auto 30px'
  },
  cardsLayoutItem: {
    position: 'relative'
  }
}));
let sortedData = data.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
sortedData = sortedData.slice(0, 200); // keep top 200 items

export default function App() {
  const classes = useStyles();
  const [maxPrice, setMaxPrice] = React.useState(9999);

  const handleChange = (ev: any, newValue: any) => {
    setMaxPrice(newValue);
    // console.log('newValue', newValue);
  };
  return (
    <main>
      <section className={classes.pageTitle}>
        <h1 style={{ fontSize: '1em' }}>The Best Bang 💥</h1>
      </section>
      <div style={{ width: '30%', margin: '0 auto' }}>
        <small>$ Price Filter</small>
        <Slider
          defaultValue={3000}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={20}
          marks
          min={0}
          max={3000}
          onChange={handleChange}
        />
      </div>

      <section className={classes.cardsLayout}>
        {sortedData.map((item, index) => {
          if (!item.title) {
            return null;
          }
          const price = parseFloat((item.price ?? '0').replace(/\$/g, '').replace(/,/g, ''));
          if (price > maxPrice) {
            return null;
          }
          return <ItemCard key={index} data={item} />;
        })}
      </section>

      <footer style={{ textAlign: 'center', margin: 10 }}>
        <a href="https://bit.ly/submitadeal">Add a new Deal</a>
      </footer>
    </main>
  );
}
