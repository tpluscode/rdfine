import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import DigitalDocumentMixin from './DigitalDocument';

export interface PresentationDigitalDocument extends Schema.DigitalDocument, RdfResource {
}

export default function PresentationDigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PresentationDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements PresentationDigitalDocument {
  }
  return PresentationDigitalDocumentClass
}

class PresentationDigitalDocumentImpl extends PresentationDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PresentationDigitalDocument>) {
    super(arg)
    this.types.add(schema.PresentationDigitalDocument)
    initializeProperties<PresentationDigitalDocument>(this, init)
  }
}
PresentationDigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PresentationDigitalDocument)
PresentationDigitalDocumentMixin.Class = PresentationDigitalDocumentImpl
