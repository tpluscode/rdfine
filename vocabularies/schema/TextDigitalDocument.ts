import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<TextDigitalDocument>) {
    super(arg)
    this.types.add(schema.TextDigitalDocument)
    initializeProperties<TextDigitalDocument>(this, init)
  }
}
TextDigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TextDigitalDocument)
TextDigitalDocumentMixin.Class = TextDigitalDocumentImpl
