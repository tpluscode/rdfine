import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import DigitalDocumentMixin from './DigitalDocument';

export interface SpreadsheetDigitalDocument extends Schema.DigitalDocument, RdfResource {
}

export default function SpreadsheetDigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SpreadsheetDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements SpreadsheetDigitalDocument {
  }
  return SpreadsheetDigitalDocumentClass
}

class SpreadsheetDigitalDocumentImpl extends SpreadsheetDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SpreadsheetDigitalDocument>) {
    super(arg)
    this.types.add(schema.SpreadsheetDigitalDocument)
    initializeProperties<SpreadsheetDigitalDocument>(this, init)
  }
}
SpreadsheetDigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SpreadsheetDigitalDocument)
SpreadsheetDigitalDocumentMixin.Class = SpreadsheetDigitalDocumentImpl
