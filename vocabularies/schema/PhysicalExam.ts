import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  Abdomen: schema.Abdomen as NamedNode<'http://schema.org/Abdomen'>,
  Appearance: schema.Appearance as NamedNode<'http://schema.org/Appearance'>,
  CardiovascularExam: schema.CardiovascularExam as NamedNode<'http://schema.org/CardiovascularExam'>,
  Ear: schema.Ear as NamedNode<'http://schema.org/Ear'>,
  Eye: schema.Eye as NamedNode<'http://schema.org/Eye'>,
  Genitourinary: schema.Genitourinary as NamedNode<'http://schema.org/Genitourinary'>,
  Head: schema.Head as NamedNode<'http://schema.org/Head'>,
  Lung: schema.Lung as NamedNode<'http://schema.org/Lung'>,
  MusculoskeletalExam: schema.MusculoskeletalExam as NamedNode<'http://schema.org/MusculoskeletalExam'>,
  Neck: schema.Neck as NamedNode<'http://schema.org/Neck'>,
  Neuro: schema.Neuro as NamedNode<'http://schema.org/Neuro'>,
  Nose: schema.Nose as NamedNode<'http://schema.org/Nose'>,
  Skin: schema.Skin as NamedNode<'http://schema.org/Skin'>,
  Throat: schema.Throat as NamedNode<'http://schema.org/Throat'>,
};

export type PhysicalExam =
  NamedNode<'http://schema.org/Abdomen'>
  | NamedNode<'http://schema.org/Appearance'>
  | NamedNode<'http://schema.org/CardiovascularExam'>
  | NamedNode<'http://schema.org/Ear'>
  | NamedNode<'http://schema.org/Eye'>
  | NamedNode<'http://schema.org/Genitourinary'>
  | NamedNode<'http://schema.org/Head'>
  | NamedNode<'http://schema.org/Lung'>
  | NamedNode<'http://schema.org/MusculoskeletalExam'>
  | NamedNode<'http://schema.org/Neck'>
  | NamedNode<'http://schema.org/Neuro'>
  | NamedNode<'http://schema.org/Nose'>
  | NamedNode<'http://schema.org/Skin'>
  | NamedNode<'http://schema.org/Throat'>;
