import navigation from '@/routing/Navigation';
import { useEffect, useState } from 'react';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { useLocation } from 'react-router-dom';
import NavTreeItem from './NavTreeItem';
import { Node } from '@/routing/Navigation';

export default function LayoutNavigation() {
  const [activeMenu, setActiveMenu] = useState<string[]>([]);

  const renderTree = (nodes: Node[], parent: string[] = []): JSX.Element[] => {
    return nodes.map((node, i) => {
      const key = node.id || i.toString();

      if (node?.header) {
        return (
          <div
            key={key}
            className="pl-2-0 text-grey-light uppercase text-1-1 font-700 leading-1-5 py-1-2"
          >
            {node.header}
          </div>
        );
      }

      if (node.children) {
        const newParentPath = parent ? [...parent, node.id] : [node.id];
        return (
          <NavTreeItem key={key} node={node} parent={parent} nodeId={key}>
            {node.children && renderTree(node.children, newParentPath)}
          </NavTreeItem>
        );
      }

      return (
        <NavTreeItem
          key={key}
          node={node}
          parent={parent}
          nodeId={node.id ?? key} // Fallback to key if id is undefined
        />
      );
    });
  };

  const location = useLocation();
  const currRoute = location.pathname;

  const isActive = (nodes: Node | Node[], parent: string[] = []): void => {
    if (Array.isArray(nodes)) {
      nodes.forEach((node) => {
        isActive(node, parent);
      });
      return;
    }

    let parentArr = parent;

    if (nodes.id) {
      parentArr = parent.length > 0 ? [...parent, nodes.id] : [nodes.id];
    }

    if (nodes.children) {
      isActive(nodes.children, parentArr);
      return;
    }

    if (currRoute === nodes.url) {
      const filtered = parentArr.filter((row) => row !== undefined);
      setActiveMenu([...filtered]);
    }
  };

  useEffect(() => {
    if (Array.isArray(navigation)) {
      isActive(navigation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currRoute]);

  return (
    <TreeView
      onNodeToggle={(_e, ids) => setActiveMenu(ids)}
      expanded={activeMenu}
    >
      {renderTree(navigation)}
    </TreeView>
  );
}
