import React, { useState } from "react"
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Collapse,
  Button,
} from "@mui/material"
import { FlashOn as FlashOnIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material"

const LiveGamesTable = ({ }) => {

  const liveGames = {
    "1": {
      leagueName: "Brasil - Brasileirão",
      matches: [
        {
          id: "101",
          time: "12:00",
          team1: "Team A",
          team2: "Team B",
          score: "1-1",
          oddsInFavor: "1.2",
          oddsTie: "2.4",
          oddsAgainst: "3.6",
        },
        {
          id: "102",
          time: "14:00",
          team1: "Team C",
          team2: "Team D",
          score: "0-0",
          oddsInFavor: "1.3",
          oddsTie: "2.5",
          oddsAgainst: "3.7",
        },
      ],
    },
    "2": {
      leagueName: "England - Premier League",
      matches: [
        {
          id: "201",
          time: "16:00",
          team1: "Team E",
          team2: "Team F",
          score: "2-2",
          oddsInFavor: "1.4",
          oddsTie: "2.6",
          oddsAgainst: "3.8",
        },
      ],
    },
  }

  const initializeExpanded = () => {
    const expandedObj = {};
    Object.keys(liveGames).forEach((leagueId) => {
      expandedObj[leagueId] = true;
    });
    return expandedObj;
  }

  const [expanded, setExpanded] = useState(initializeExpanded())

  const handleExpandClick = (leagueId) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [leagueId]: !prevExpanded[leagueId],
    }))
  }

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center" p={1} bgcolor={'primary.main'}>
          <FlashOnIcon />
          <Typography variant="h6" component="div">
            Jogos Ao Vivo
          </Typography>
        </Box>
        <Divider />
        {Object.keys(liveGames).map((leagueId) => (
          <Box key={leagueId} bgcolor={'primary.main'}>
            <Box display="flex" alignItems="center" p={1}>
              <Typography variant="subtitle1" component="div" flexGrow={1}>
                {liveGames[leagueId].leagueName}
              </Typography>
              <IconButton
                onClick={() => handleExpandClick(leagueId)}
                aria-expanded={expanded[leagueId]}
                aria-label="show more"

              >
                <ExpandMoreIcon color="info" />
              </IconButton>
            </Box>
            <Divider />
            <Collapse in={expanded[leagueId]}>
              {liveGames[leagueId].matches.map((match) => (
                <Box display="flex" alignItems="center" p={1} key={match.id} bgcolor={'#1e293b'}>
                  <Typography variant="body1" component="div" flexGrow={1}>
                    {match.time} - {match.team1} vs {match.team2} ({match.score})
                  </Typography>
                  <Button color="success" variant="outlined">{match.oddsInFavor}</Button>
                  <Button color="success" variant="outlined">{match.oddsTie}</Button>
                  <Button color="success" variant="outlined">{match.oddsAgainst}</Button>
                </Box>
              ))}
            </Collapse>
          </Box>
        ))}
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center" p={1} bgcolor={'primary.main'}>
          <FlashOnIcon />
          <Typography variant="h6" component="div">
            Principais Eventos
          </Typography>
        </Box>
        <Divider />
        {Object.keys(liveGames).map((leagueId) => (
          <Box key={leagueId} bgcolor={'primary.main'}>
            <Box display="flex" alignItems="center" p={1}>
              <Typography variant="subtitle1" component="div" flexGrow={1}>
                {liveGames[leagueId].leagueName}
              </Typography>
              <IconButton
                onClick={() => handleExpandClick(leagueId)}
                aria-expanded={expanded[leagueId]}
                aria-label="show more"

              >
                <ExpandMoreIcon color="info" />
              </IconButton>
            </Box>
            <Divider />
            <Collapse in={expanded[leagueId]}>
              {liveGames[leagueId].matches.map((match) => (
                <Box display="flex" alignItems="center" p={1} key={match.id} bgcolor={'#1e293b'}>
                  <Typography variant="body1" component="div" flexGrow={1}>
                    {match.time} - {match.team1} vs {match.team2} ({match.score})
                  </Typography>
                  <Button color="success" variant="outlined">{match.oddsInFavor}</Button>
                  <Button color="success" variant="outlined">{match.oddsTie}</Button>
                  <Button color="success" variant="outlined">{match.oddsAgainst}</Button>
                </Box>
              ))}
            </Collapse>
          </Box>
        ))}
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center" p={1} bgcolor={'primary.main'}>
          <FlashOnIcon />
          <Typography variant="h6" component="div">
            Próximos Jogos
          </Typography>
        </Box>
        <Divider />
        {Object.keys(liveGames).map((leagueId) => (
          <Box key={leagueId} bgcolor={'primary.main'}>
            <Box display="flex" alignItems="center" p={1}>
              <Typography variant="subtitle1" component="div" flexGrow={1}>
                {liveGames[leagueId].leagueName}
              </Typography>
              <IconButton
                onClick={() => handleExpandClick(leagueId)}
                aria-expanded={expanded[leagueId]}
                aria-label="show more"

              >
                <ExpandMoreIcon color="info" />
              </IconButton>
            </Box>
            <Divider />
            <Collapse in={expanded[leagueId]}>
              {liveGames[leagueId].matches.map((match) => (
                <Box display="flex" alignItems="center" p={1} key={match.id} bgcolor={'#1e293b'}>
                  <Typography variant="body1" component="div" flexGrow={1}>
                    {match.time} - {match.team1} vs {match.team2} ({match.score})
                  </Typography>
                  <Button color="success" variant="outlined">{match.oddsInFavor}</Button>
                  <Button color="success" variant="outlined">{match.oddsTie}</Button>
                  <Button color="success" variant="outlined">{match.oddsAgainst}</Button>
                </Box>
              ))}
            </Collapse>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default LiveGamesTable