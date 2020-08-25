import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PeopleAudienceMixin } from './PeopleAudience';

export interface ParentAudience extends Schema.PeopleAudience, RdfResource {
  childMaxAge: number;
  childMinAge: number;
}

export function ParentAudienceMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<ParentAudience>) {
    super(arg, init)
    this.types.add(schema.ParentAudience)
  }

  static readonly __mixins: Mixin[] = [ParentAudienceMixin, PeopleAudienceMixin];
}
ParentAudienceMixin.appliesTo = schema.ParentAudience
ParentAudienceMixin.Class = ParentAudienceImpl
