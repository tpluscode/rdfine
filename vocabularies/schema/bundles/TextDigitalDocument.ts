import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../lib/DigitalDocument';
import { TextDigitalDocumentMixin } from '../lib/TextDigitalDocument';

export const TextDigitalDocumentBundle = [
  DigitalDocumentMixin as Mixin,
  TextDigitalDocumentMixin as Mixin];
