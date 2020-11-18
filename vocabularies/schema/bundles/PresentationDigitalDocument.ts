import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../lib/DigitalDocument';
import { PresentationDigitalDocumentMixin } from '../lib/PresentationDigitalDocument';

export const PresentationDigitalDocumentBundle = [
  DigitalDocumentMixin as Mixin,
  PresentationDigitalDocumentMixin as Mixin];
