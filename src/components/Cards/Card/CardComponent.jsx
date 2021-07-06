import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Card.module.css';
import cx from 'classnames';

const CardComponent = (props) => {
	const { className, cardTitle, value, date, cardSubtitle } = props;

  return (
			<Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)} >
				<CardContent>
					<Typography color="textSecondary" gutterBottom>{cardTitle}</Typography>
					<Typography variant="h5" component="h2" gutterBottom>{value}</Typography>
					<Typography color="textSecondary" gutterBottom>Last updated: {new Date(date).toDateString()}</Typography>
					<Typography variant="body2" component="p">{cardSubtitle}</Typography>
				</CardContent>
			</Grid>
  )
}

export default CardComponent
