import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LodgingBusinessMixin from './LodgingBusiness';

export interface Motel extends Schema.LodgingBusiness, RdfResource {
}

export default function MotelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MotelClass extends LodgingBusinessMixin(Resource) implements Motel {
  }
  return MotelClass
}

class MotelImpl extends MotelMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Motel)
  }
}
MotelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Motel)
MotelMixin.Class = MotelImpl
