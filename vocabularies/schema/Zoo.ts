import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Zoo)
  }
}
ZooMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Zoo)
ZooMixin.Class = ZooImpl
