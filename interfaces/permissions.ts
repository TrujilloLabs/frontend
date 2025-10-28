export type Permission = 
  | 'dashboard:read' 
  | 'reports:read' 
  | 'orders:read' 
  | 'orders:update' 
  | 'products:read'
  | 'products:create' 
  | 'products:update' 
  | 'products:delete' 
  | 'categories:read' 
  | 'categories:create'
  | 'inventory:read' 
  | 'inventory:update' 
  | 'purchaseOrders:read' 
  | 'purchaseOrders:create' 
  | 'purchaseOrders:update'
  | 'customers:read' 
  | 'notifications:read' 
  | 'notifications:create' 
  | 'settings:read' 
  | 'settings:update'
  | 'roles:read' 
  | 'roles:manage_admins' 
  | 'roles:manage_employees';

export const ROLE_PERMISSIONS: Record<string, Permission[]> = {
  'super_admin': [
    'dashboard:read', 'reports:read', 'orders:read', 'orders:update', 'products:read',
    'products:create', 'products:update', 'products:delete', 'categories:read', 'categories:create',
    'inventory:read', 'inventory:update', 'purchaseOrders:read', 'purchaseOrders:create', 'purchaseOrders:update',
    'customers:read', 'notifications:read', 'notifications:create', 'settings:read', 'settings:update',
    'roles:read', 'roles:manage_admins'
  ],
  'admin_tienda': [
    'dashboard:read', 'reports:read', 'orders:read', 'orders:update', 'products:read',
    'products:create', 'products:update', 'products:delete', 'categories:read', 'categories:create',
    'inventory:read', 'inventory:update', 'purchaseOrders:read', 'purchaseOrders:create', 'purchaseOrders:update',
    'customers:read', 'notifications:read', 'notifications:create', 'settings:read', 'settings:update',
    'roles:read', 'roles:manage_employees'
  ],
  'cliente': [
    'products:read', 'categories:read', 'orders:read'
  ]
};