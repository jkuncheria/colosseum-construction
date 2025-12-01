import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export enum RoomType {
  KITCHEN = 'Kitchen',
  BATHROOM = 'Bathroom',
  LIVING_ROOM = 'Living Room',
  BASEMENT = 'Basement',
  EXTERIOR = 'Exterior/Deck'
}

export enum DesignStyle {
  MODERN = 'Modern',
  RUSTIC = 'Rustic',
  TRADITIONAL = 'Traditional',
  INDUSTRIAL = 'Industrial',
  SCANDINAVIAN = 'Scandinavian'
}