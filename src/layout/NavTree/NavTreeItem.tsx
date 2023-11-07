import React from 'react';
import { styled } from '@mui/material/styles';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { SvgIcon } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { NavLink } from 'react-router-dom';
import { Node } from '@/routing/Navigation';

interface NavTreeItemProps {
  node: Node;
  parent?: string[];
  nodeId: string | number;
  [key: string]: unknown;
}

interface NavTreeItemContainerProps {
  type: 'link' | 'collapse';
  children: React.ReactNode;
  to?: string;
  parent?: string[];
}

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '2.6rem',
  '& .MuiTreeItem-iconContainer': {
    display: 'none!important',
  },
  '& ul': {
    marginLeft: 0,
  },
  '& .MuiTreeItem-content': {
    padding: 0,
    background: 'transparent!important',
    backgroundColor: 'transparent!important',
  },
  '& .MuiTreeItem-content:hover, .Mui-expanded, .Mui-selected': {
    background: 'transparent!important',
    backgroundColor: 'transparent!important',
  },
  '&  .Mui-selected': {
    background: 'transparent!important',
  },
  '& .Mui-expanded .dropdown-icon ': {
    transform: 'rotate(90deg)',
  },
}));

const navLinkState = {
  default:
    'flex items-center text-grey py-0-8 duration-300 navlink my-0-4 px-1-5',
  active:
    'navlink-active flex items-center text-white py-0-8 duration-300 my-0-4 px-1-5',
};

const NavTreeItem: React.FC<NavTreeItemProps> = (props) => {
  const { node, parent, nodeId, ...other } = props;

  return (
    <StyledTreeItemRoot
      nodeId={`${nodeId}`}
      label={
        <NavTreeItemContainer
          parent={parent}
          type={node.url ? 'link' : 'collapse'}
          to={node.url ?? '#'}
          {...other}
        >
          {node.icon && (
            <SvgIcon className="empty:hidden mr-1-0" fontSize="medium">
              {/* {node.icon} */}
              <node.icon />
            </SvgIcon>
          )}
          <p className="text-1-6 text-inherit">{node.title}</p>
          {node.children && (
            <ArrowForwardIosSharpIcon className="absolute right-1-5 !text-1-2 dropdown-icon" />
          )}
        </NavTreeItemContainer>
      }
      {...other}
      className="relative"
    />
  );
};

const paddingLeft: { [key: number]: string } = {
  0: 'pl-1-5',
  1: 'pl-3-0',
  2: 'pl-4-5',
  3: 'pl-6-0',
  4: 'pl-7-0',
  5: 'pl-8-0',
};
const NavTreeItemContainer: React.FC<NavTreeItemContainerProps> = ({
  type,
  children,
  to,
  parent,
}) => {
  if (type === 'link') {
    return (
      <NavLink
        to={to ?? ''}
        end
        className={({ isActive }) =>
          `${navLinkState[isActive ? 'active' : 'default']} ${
            paddingLeft[parent?.length || 0]
          }`
        }
      >
        {children}
      </NavLink>
    );
  }

  return (
    <div
      className={`
        ${navLinkState.default}
        ${paddingLeft[parent?.length || 0]}
      `}
    >
      {children}
    </div>
  );
};

export default NavTreeItem;
