'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem, SidebarProps, UserRole } from './types';
import {
  RiDashboardLine,
  RiBookLine,
  RiShoppingCart2Line,
  RiFileList3Line,
  RiTeamLine,
  RiUserLine,
  RiFileChartLine,
  RiSettings4Line,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
} from 'react-icons/ri';

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'RiDashboardLine',
    role: ['admin', 'manager', 'employee'],
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: 'RiBookLine',
    role: ['admin', 'manager', 'employee'],
  },
  {
    title: 'Sales',
    path: '/sales',
    icon: 'RiShoppingCart2Line',
    role: ['admin', 'manager'],
    subItems: [
      { title: 'Daily Sales', path: '/sales/daily', icon: 'RiFileList3Line', role: ['admin', 'manager'] },
      { title: 'Weekly Sales', path: '/sales/weekly', icon: 'RiFileList3Line', role: ['admin', 'manager'] },
      { title: 'Monthly Sales', path: '/sales/monthly', icon: 'RiFileList3Line', role: ['admin', 'manager'] },
    ],
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: 'RiFileList3Line',
    role: ['admin', 'manager', 'employee'],
  },
  {
    title: 'Employees',
    path: '/employees',
    icon: 'RiTeamLine',
    role: ['admin', 'manager'],
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: 'RiUserLine',
    role: ['admin', 'manager', 'employee'],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: 'RiFileChartLine',
    role: ['admin', 'manager'],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: 'RiSettings4Line',
    role: ['admin'],
  },
];

const iconComponents: { [key: string]: React.ComponentType } = {
  RiDashboardLine,
  RiBookLine,
  RiShoppingCart2Line,
  RiFileList3Line,
  RiTeamLine,
  RiUserLine,
  RiFileChartLine,
  RiSettings4Line,
};

const Sidebar = ({ userRole = 'admin' }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      setExpandedItem(null);
    }
  };

  const toggleSubMenu = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  const isLinkActive = (path: string) => pathname === path;

  const filteredMenuItems = menuItems.filter((item) => item.role.includes(userRole));

  const renderMenuItem = (item: MenuItem, isSubItem = false) => {
    const Icon = iconComponents[item.icon];
    const isActive = isLinkActive(item.path);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItem === item.title;

    return (
      <li key={item.path} className={`${isSubItem ? 'pl-8' : ''}`}>
        {hasSubItems ? (
          <button
            onClick={() => toggleSubMenu(item.title)}
            className={`w-full flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors
              ${isActive ? 'bg-gray-700 text-white' : ''}`}
          >
            {Icon && <Icon className="w-5 h-5 mr-3" />}
            {(!isCollapsed || isSubItem) && (
              <span className="flex-1 whitespace-nowrap">{item.title}</span>
            )}
          </button>
        ) : (
          <div className={`flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors
            ${isActive ? 'bg-gray-700 text-white' : ''}`}>
            <Link href={item.path} className="flex items-center w-full">
              {Icon && <Icon className="w-5 h-5 mr-3" />}
              {(!isCollapsed || isSubItem) && (
                <span className="whitespace-nowrap">{item.title}</span>
              )}
            </Link>
          </div>
        )}
        {hasSubItems && isExpanded && !isCollapsed && (
          <ul className="mt-1">
            {item.subItems!.map((subItem) => renderMenuItem(subItem, true))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-gray-800 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'} z-50`}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {!isCollapsed && (
          <h1 className="text-white font-semibold text-lg">Bookshop</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-700 text-gray-300"
        >
          {isCollapsed ? (
            <RiMenuUnfoldLine className="w-5 h-5" />
          ) : (
            <RiMenuFoldLine className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav className="mt-4">
        <ul className="space-y-1 px-2">
          {filteredMenuItems.map((item) => renderMenuItem(item))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
