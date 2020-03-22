import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CatholicChurch)
  }
}
CatholicChurchMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CatholicChurch)
CatholicChurchMixin.Class = CatholicChurchImpl
