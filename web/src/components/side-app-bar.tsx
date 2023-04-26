import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import { Addchart, Analytics, EmojiEvents, WorkspacePremium } from '@mui/icons-material';

const data = [
  { icon: <Addchart />, label: 'Próximos Jogos' },
  { icon: <Analytics />, label: 'Principais Eventos' },
  { icon: <WorkspacePremium />, label: 'Apostas por Odds' },
  { icon: <EmojiEvents />, label: 'Rank de Vencedores' },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 12,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  return (
    <Box sx={(theme) => (
      {
        display: 'none',
        margin: 0,
        [theme.breakpoints.up("sm")]: {
          display: 'flex',
        },
      }
    )}>
      <Paper elevation={0} sx={{ maxWidth: 256, height: '100%' }}>
        <FireNav component="nav" disablePadding sx={{ maxWidth: 256, height: '100%' }}>
          <Box
            sx={{
              bgcolor: 'primary.main',
              height: '100%',
            }}
          >
            {
              data.map((item) => (
                <ListItemButton
                  key={item.label}
                  sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                  />
                </ListItemButton>
              ))}
          </Box>
        </FireNav>
      </Paper>
    </Box>
  )
}