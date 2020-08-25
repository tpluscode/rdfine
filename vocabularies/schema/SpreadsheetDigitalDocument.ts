import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { DigitalDocumentMixin } from './DigitalDocument';

export interface SpreadsheetDigitalDocument extends Schema.DigitalDocument, RdfResource {
}

export function SpreadsheetDigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SpreadsheetDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements SpreadsheetDigitalDocument {
  }
  return SpreadsheetDigitalDocumentClass
}

class SpreadsheetDigitalDocumentImpl extends SpreadsheetDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SpreadsheetDigitalDocument>) {
    super(arg, init)
    this.types.add(schema.SpreadsheetDigitalDocument)
  }

  static readonly __mixins: Mixin[] = [SpreadsheetDigitalDocumentMixin, DigitalDocumentMixin];
}
SpreadsheetDigitalDocumentMixin.appliesTo = schema.SpreadsheetDigitalDocument
SpreadsheetDigitalDocumentMixin.Class = SpreadsheetDigitalDocumentImpl
