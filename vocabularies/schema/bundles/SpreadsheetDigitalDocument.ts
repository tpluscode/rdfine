import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../lib/DigitalDocument';
import { SpreadsheetDigitalDocumentMixin } from '../lib/SpreadsheetDigitalDocument';

export const SpreadsheetDigitalDocumentBundle = [
  DigitalDocumentMixin as Mixin,
  SpreadsheetDigitalDocumentMixin as Mixin];
