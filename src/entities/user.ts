export interface User {
  sub: string; // User ID
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
}

export interface UserPosition {
  id: string;
  name: string;
  is_manager: boolean;
  created_at: string;
  updated_at: string | null;
}

export interface UserTeam {
  full_name: string;
  label: string | null;
  name: string;
  manager_teams: ManagerTeam[];
  users: UserDetails[];
}

export interface ManagerTeam {
  id: string;
  created_at: string;
  updated_at: string | null;
  users: UserDetails;
}

export interface UserDetails {
  id: string;
  created_at: string;
  updated_at: string | null;
  email: string;
  avatar: string;
  name: string;
  id_employee: string;
  is_active: boolean;
  is_partner: boolean;
  start_date: string;
  end_date: string;
}

export interface UserData {
  id: string;
  created_at: string;
  updated_at: string | null;
  email: string;
  avatar: string;
  name: string;
  id_employee: string;
  is_active: boolean;
  is_partner: boolean;
  start_date: string;
  end_date: string;
  positions: UserPosition;
  teams: UserTeam;
}

export interface UserResponse {
  success: boolean;
  data: UserData;
}
