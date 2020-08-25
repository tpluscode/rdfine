import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface DigitalDocument extends Schema.CreativeWork, RdfResource {
  hasDigitalDocumentPermission: Schema.DigitalDocumentPermission;
}

export function DigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [DigitalDocumentMixin, CreativeWorkMixin];
}
DigitalDocumentMixin.appliesTo = schema.DigitalDocument
DigitalDocumentMixin.Class = DigitalDocumentImpl
