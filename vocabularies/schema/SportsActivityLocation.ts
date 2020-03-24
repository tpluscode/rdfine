import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface SportsActivityLocation extends Schema.LocalBusiness, RdfResource {
}

export default function SportsActivityLocationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsActivityLocationClass extends LocalBusinessMixin(Resource) implements SportsActivityLocation {
  }
  return SportsActivityLocationClass
}

class SportsActivityLocationImpl extends SportsActivityLocationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SportsActivityLocation)
  }
}
SportsActivityLocationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsActivityLocation)
SportsActivityLocationMixin.Class = SportsActivityLocationImpl
