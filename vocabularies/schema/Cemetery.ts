import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Cemetery extends Schema.CivicStructure, RdfResource {
}

export default function CemeteryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CemeteryClass extends CivicStructureMixin(Resource) implements Cemetery {
  }
  return CemeteryClass
}

class CemeteryImpl extends CemeteryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Cemetery>) {
    super(arg, init)
    this.types.add(schema.Cemetery)
  }
}
CemeteryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Cemetery)
CemeteryMixin.Class = CemeteryImpl
