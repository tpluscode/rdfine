import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../lib/DigitalDocument';
import { NoteDigitalDocumentMixin } from '../lib/NoteDigitalDocument';

export const NoteDigitalDocumentBundle = [
  DigitalDocumentMixin as Mixin,
  NoteDigitalDocumentMixin as Mixin];
