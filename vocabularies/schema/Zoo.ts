import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Zoo extends Schema.CivicStructure, RdfResource {
}

export default function ZooMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ZooClass extends CivicStructureMixin(Resource) implements Zoo {
  }
  return ZooClass
}

class ZooImpl extends ZooMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Zoo>) {
    super(arg)
    this.types.add(schema.Zoo)
    initializeProperties<Zoo>(this, init)
  }
}
ZooMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Zoo)
ZooMixin.Class = ZooImpl
