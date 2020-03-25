import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ChurchMixin from './Church';

export interface CatholicChurch extends Schema.Church, RdfResource {
}

export default function CatholicChurchMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CatholicChurchClass extends ChurchMixin(Resource) implements CatholicChurch {
  }
  return CatholicChurchClass
}

class CatholicChurchImpl extends CatholicChurchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CatholicChurch>) {
    super(arg, init)
    this.types.add(schema.CatholicChurch)
  }
}
CatholicChurchMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CatholicChurch)
CatholicChurchMixin.Class = CatholicChurchImpl
