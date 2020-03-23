import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PeopleAudienceMixin from './PeopleAudience';

export interface ParentAudience extends Schema.PeopleAudience, RdfResource {
  childMaxAge: number;
  childMinAge: number;
}

export default function ParentAudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ParentAudienceClass extends PeopleAudienceMixin(Resource) implements ParentAudience {
    @property.literal({ type: Number })
    childMaxAge!: number;
    @property.literal({ type: Number })
    childMinAge!: number;
  }
  return ParentAudienceClass
}

class ParentAudienceImpl extends ParentAudienceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ParentAudience)
  }
}
ParentAudienceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ParentAudience)
ParentAudienceMixin.Class = ParentAudienceImpl
