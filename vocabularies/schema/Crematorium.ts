import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Crematorium extends Schema.CivicStructure, RdfResource {
}

export default function CrematoriumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CrematoriumClass extends CivicStructureMixin(Resource) implements Crematorium {
  }
  return CrematoriumClass
}

class CrematoriumImpl extends CrematoriumMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Crematorium)
  }
}
CrematoriumMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Crematorium)
CrematoriumMixin.Class = CrematoriumImpl
