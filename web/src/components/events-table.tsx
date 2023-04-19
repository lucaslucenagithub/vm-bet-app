// components/LiveGamesTable.js

import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const EventsTable = () => {
  const classes = useStyles();

  // Replace this with data fetched from your API
  const liveGamesData = [
    {
      id: 1,
      gameName: 'Team A vs Team B',
      result: '1 - 0',
      odds: 1.5,
      isFavorited: false,
    },
    {
      id: 2,
      gameName: 'Team C vs Team D',
      result: '2 - 2',
      odds: 2.1,
      isFavorited: false,
    },
  ];

  const [liveGames, setLiveGames] = useState(liveGamesData);

  const toggleFavorite = (id) => {
    setLiveGames(
      liveGames.map((game) =>
        game.id === id ? { ...game, isFavorited: !game.isFavorited } : game
      )
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="live games table">
        <TableHead>
          <TableRow>
            <TableCell>Favorite</TableCell>
            <TableCell>Game</TableCell>
            <TableCell align="right">Result</TableCell>
            <TableCell align="right">Odds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {liveGames.map((game) => (
            <TableRow key={game.id}>
              <TableCell>
                <IconButton onClick={() => toggleFavorite(game.id)}>
                  {game.isFavorited ? (
                    <Favorite color="secondary" />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {game.gameName}
              </TableCell>
              <TableCell align="right">{game.result}</TableCell>
              <TableCell align="right">{game.odds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventsTable;