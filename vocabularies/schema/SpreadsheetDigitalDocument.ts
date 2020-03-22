import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SpreadsheetDigitalDocument)
  }
}
SpreadsheetDigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SpreadsheetDigitalDocument)
SpreadsheetDigitalDocumentMixin.Class = SpreadsheetDigitalDocumentImpl
