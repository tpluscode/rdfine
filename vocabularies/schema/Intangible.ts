import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface Intangible extends Schema.Thing, RdfResource {
}

export default function IntangibleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class IntangibleClass extends ThingMixin(Resource) implements Intangible {
  }
  return IntangibleClass
}

class IntangibleImpl extends IntangibleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Intangible>) {
    super(arg, init)
    this.types.add(schema.Intangible)
  }
}
IntangibleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Intangible)
IntangibleMixin.Class = IntangibleImpl
