export interface MenuItem {
  title: string;
  path: string;
  icon: string;
  role: UserRole[];
  subItems?: MenuItem[];
}

export type UserRole = 'admin' | 'manager' | 'employee';

export interface SidebarProps {
  userRole?: UserRole;
}
