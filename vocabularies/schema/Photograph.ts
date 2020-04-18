import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Photograph extends Schema.CreativeWork, RdfResource {
}

export default function PhotographMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhotographClass extends CreativeWorkMixin(Resource) implements Photograph {
  }
  return PhotographClass
}

class PhotographImpl extends PhotographMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Photograph>) {
    super(arg, init)
    this.types.add(schema.Photograph)
  }
}
PhotographMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Photograph)
PhotographMixin.Class = PhotographImpl
