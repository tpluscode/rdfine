import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../DigitalDocument';
import { NoteDigitalDocumentMixin } from '../NoteDigitalDocument';

export const NoteDigitalDocumentDependencies = [
  DigitalDocumentMixin as Mixin,
  NoteDigitalDocumentMixin as Mixin];
