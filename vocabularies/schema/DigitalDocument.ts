import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface DigitalDocument extends Schema.CreativeWork, RdfResource {
  hasDigitalDocumentPermission: Schema.DigitalDocumentPermission;
}

export default function DigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DigitalDocumentClass extends CreativeWorkMixin(Resource) implements DigitalDocument {
    @property.resource()
    hasDigitalDocumentPermission!: Schema.DigitalDocumentPermission;
  }
  return DigitalDocumentClass
}

class DigitalDocumentImpl extends DigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DigitalDocument>) {
    super(arg, init)
    this.types.add(schema.DigitalDocument)
  }
}
DigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DigitalDocument)
DigitalDocumentMixin.Class = DigitalDocumentImpl
