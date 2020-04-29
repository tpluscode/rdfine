import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DigitalDocumentMixin } from '../DigitalDocument';
import { SpreadsheetDigitalDocumentMixin } from '../SpreadsheetDigitalDocument';

export const SpreadsheetDigitalDocumentDependencies = [
  DigitalDocumentMixin as Mixin,
  SpreadsheetDigitalDocumentMixin as Mixin];
