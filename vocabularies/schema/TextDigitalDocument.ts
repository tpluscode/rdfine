import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import DigitalDocumentMixin from './DigitalDocument';

export interface TextDigitalDocument extends Schema.DigitalDocument, RdfResource {
}

export default function TextDigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TextDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements TextDigitalDocument {
  }
  return TextDigitalDocumentClass
}

class TextDigitalDocumentImpl extends TextDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TextDigitalDocument)
  }
}
TextDigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TextDigitalDocument)
TextDigitalDocumentMixin.Class = TextDigitalDocumentImpl
