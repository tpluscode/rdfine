import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../DigitalDocument';
import { SpreadsheetDigitalDocumentMixin } from '../SpreadsheetDigitalDocument';

export const SpreadsheetDigitalDocumentBundle = [
  DigitalDocumentMixin as Mixin,
  SpreadsheetDigitalDocumentMixin as Mixin];
