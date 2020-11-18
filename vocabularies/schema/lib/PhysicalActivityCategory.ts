import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  AerobicActivity: schema.AerobicActivity as NamedNode<'http://schema.org/AerobicActivity'>,
  AnaerobicActivity: schema.AnaerobicActivity as NamedNode<'http://schema.org/AnaerobicActivity'>,
  Balance: schema.Balance as NamedNode<'http://schema.org/Balance'>,
  Flexibility: schema.Flexibility as NamedNode<'http://schema.org/Flexibility'>,
  LeisureTimeActivity: schema.LeisureTimeActivity as NamedNode<'http://schema.org/LeisureTimeActivity'>,
  OccupationalActivity: schema.OccupationalActivity as NamedNode<'http://schema.org/OccupationalActivity'>,
  StrengthTraining: schema.StrengthTraining as NamedNode<'http://schema.org/StrengthTraining'>,
};

export type PhysicalActivityCategory = 
  NamedNode<'http://schema.org/AerobicActivity'>
  | NamedNode<'http://schema.org/AnaerobicActivity'>
  | NamedNode<'http://schema.org/Balance'>
  | NamedNode<'http://schema.org/Flexibility'>
  | NamedNode<'http://schema.org/LeisureTimeActivity'>
  | NamedNode<'http://schema.org/OccupationalActivity'>
  | NamedNode<'http://schema.org/StrengthTraining'>;
