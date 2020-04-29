import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface Zoo extends Schema.CivicStructure, RdfResource {
}

export function ZooMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ZooClass extends CivicStructureMixin(Resource) implements Zoo {
  }
  return ZooClass
}

class ZooImpl extends ZooMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Zoo>) {
    super(arg, init)
    this.types.add(schema.Zoo)
  }
}
ZooMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Zoo)
ZooMixin.Class = ZooImpl
