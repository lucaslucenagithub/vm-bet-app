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
  Divider,
  Box,
} from '@mui/material';
import { FavoriteBorder, Favorite, Bolt } from '@mui/icons-material'

const EventsTable = () => {
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

  return (<>
    <TableContainer component={Paper}>
      <Table sx={{
        minWidth: 650,
        backgroundColor: 'primary.main',
        color: '#fff',
        borderColor: '#000'
      }} aria-label="live games table">
        <TableHead>
          <TableRow>
            <TableCell color='#fff'> <Box display="flex" alignItems="center"><Bolt /> Jogos Ao Vivo</Box></TableCell>
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
                    <Favorite />
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
    {/* <Divider />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="live games table">
        <TableHead>
          <TableRow>
            <TableCell>Principais Eventos</TableCell>
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
                    <Favorite />
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
    <Divider />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="live games table">
        <TableHead>
          <TableRow>
            <TableCell>Próximos Jogos</TableCell>
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
                    <Favorite />
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
    </TableContainer> */}
  </>
  )
}

export default EventsTable;