import { Metadata } from 'next';

interface Props {
  title: string;
  description: string;
}

export const getMetadata = ({ title, description }: Props): Metadata => {
  return {
    title,
    description,
  };
};
