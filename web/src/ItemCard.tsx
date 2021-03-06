import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function ItemCard({ data }: { data: any }) {
  const classes = useStyles();
  const link = data.link.replace(/categories\/electronics\/deals\//, '');

  // TODO: refactor inline styles
  return (
    <Card>
      <LazyLoad>
        <CardContent>
          <div style={{ display: 'flex' }}>
            <a href={link} target="_blank">
              <img src={data.pic} loading="lazy" style={{ maxHeight: 100, maxWidth: 100, borderRadius: 4 }} />
            </a>
            <Typography color="textSecondary" gutterBottom style={{ marginLeft: 5, fontSize: '0.8em' }}>
              <a href={link} target="_blank">
                {data.title}
              </a>
              <br />
              <div>
                {data.priceReg ? (
                  <>
                    <strong style={{ color: 'darkred', fontSize: '1.2em', textDecoration: 'line-through' }}>
                      {data.priceReg}
                    </strong>{' '}
                  </>
                ) : null}
                <strong style={{ color: 'green', fontSize: '1.2em' }}>{data.price}</strong>
              </div>
            </Typography>
          </div>
          {/* <Typography variant="body2" component="p">
          <small>{data.content}</small>
        </Typography> */}
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </LazyLoad>
    </Card>
  );
}
