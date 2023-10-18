export interface Info {
  input: string;
  model: string;
  badInput: string;
  style: string;
}

export interface Model {
  id: number;
  name: string;
  value: string;
}

export interface Style {
  id: number;
  name: string;
  value: string;
}

export interface Search {
  handleSubmit: (e: React.FormEvent) => void;
  info: Info;
  handleSelect: (name: string, type: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setInfo: React.Dispatch<React.SetStateAction<Info>>;
  mobile?: boolean;
  desktop?: boolean;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  isLoading?: boolean;
}
