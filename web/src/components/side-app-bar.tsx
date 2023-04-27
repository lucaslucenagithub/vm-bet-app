import * as React from 'react'
import Box from '@mui/material/Box'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import { Addchart, Analytics, EmojiEvents, WorkspacePremium } from '@mui/icons-material'

const data = [
  { icon: <Addchart />, label: 'Próximos Jogos' },
  { icon: <Analytics />, label: 'Principais Eventos' },
  { icon: <WorkspacePremium />, label: 'Apostas por Odds' },
  { icon: <EmojiEvents />, label: 'Rank de Vencedores' },
]

export default function CustomizedList() {
  return (
    <Box sx={(theme) => (
      {
        zIndex: 1,
        margin: 0,
        [theme.breakpoints.down("sm")]: {
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        },
      }
    )}>
        <Box
          component="nav"
          sx={(theme) => ({
            height: '100%',
            [theme.breakpoints.up("lg")]: {
              width: '200px'
            },
            [theme.breakpoints.up("sm")]: {
              maxWidth: '256px',
              width: '50px'
            }
          })}>
          <Box
            sx={(theme) => ({
              bgcolor: 'primary.main',
              height: '100%',
              width: '100%',
              [theme.breakpoints.down("sm")]: {
                display: 'flex',
              }
            })}
          >
            {
              data.map((item) => (
                <ListItemButton
                  key={item.label}
                  sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)', width: '100%'  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    sx={(theme) => ({
                      [theme.breakpoints.down('lg')]: {
                        display: 'none',
                      }
                    })
                    }
                  />
                </ListItemButton>
              ))}
          </Box>
        </Box>
    </Box>
  )
}