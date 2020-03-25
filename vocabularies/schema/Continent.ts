import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LandformMixin from './Landform';

export interface Continent extends Schema.Landform, RdfResource {
}

export default function ContinentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ContinentClass extends LandformMixin(Resource) implements Continent {
  }
  return ContinentClass
}

class ContinentImpl extends ContinentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Continent>) {
    super(arg)
    this.types.add(schema.Continent)
    initializeProperties<Continent>(this, init)
  }
}
ContinentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Continent)
ContinentMixin.Class = ContinentImpl
