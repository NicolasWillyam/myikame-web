export interface ToolData {
  id: string;
  name: string;
  index: number;
  label: string;
  description: string;
  icon: string | null;
  type: string;
  link: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ToolCardProps {
  id?: string;
  name?: string;
  label: string;
  link?: string;
  description: string;
  icon?: string | null;
  is_active?: boolean;
}

export type ToolsList = ToolData[];
