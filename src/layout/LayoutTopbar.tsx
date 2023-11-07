import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { AccountCircle } from '@mui/icons-material';
import { paths } from '@/routing/Paths';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LayoutTopbar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.currentTarget as HTMLDivElement;
    setAnchorEl(target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div className="p-1-6">
      <div className="w-full h-6-0 bg-white flex items-center px-2-0 rounded-1-2">
        <div className="ml-auto">
          <div
            onClick={handleClick}
            className="flex items-center text-end cursor-pointer"
          >
            <div className="mr-0-6">
              <div className="text-1-6 text-black leading-2-0 ">
                Levan Natsvlishvili
              </div>
              <div className="text-1-2 text-blue leading-1-0">Super Admin</div>
            </div>
            <Tooltip title="Account settings">
              <IconButton
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#7367f0' }}>
                  M
                </Avatar>
              </IconButton>
            </Tooltip>
          </div>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiMenuItem-root': {
                  padding: '5px 20px',
                  minWidth: 125,
                },
                '& .MuiSvgIcon-root': {
                  width: 20,
                  height: 20,
                },
                '& .MuiListItemIcon-root': {
                  // marginRight: 'auto',
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              Profile
            </MenuItem>

            <Divider />
            <MenuItem onClick={() => navigate(paths.auth.login)}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default LayoutTopbar;
