import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../DigitalDocument';
import { PresentationDigitalDocumentMixin } from '../PresentationDigitalDocument';

export const PresentationDigitalDocumentBundle = [
  DigitalDocumentMixin as Mixin,
  PresentationDigitalDocumentMixin as Mixin];
