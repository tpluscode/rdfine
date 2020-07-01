import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../DigitalDocument';
import { TextDigitalDocumentMixin } from '../TextDigitalDocument';

export const TextDigitalDocumentBundle = [
  DigitalDocumentMixin as Mixin,
  TextDigitalDocumentMixin as Mixin];
