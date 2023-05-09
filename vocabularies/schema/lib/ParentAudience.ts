import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PeopleAudienceMixin } from './PeopleAudience.js';

export interface ParentAudience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PeopleAudience<D>, rdfine.RdfResource<D> {
  childMaxAge: number | undefined;
  childMinAge: number | undefined;
}

export function ParentAudienceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ParentAudience> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ParentAudienceClass extends PeopleAudienceMixin(Resource) implements Partial<ParentAudience> {
    @rdfine.property.literal({ type: Number })
    childMaxAge: number | undefined;
    @rdfine.property.literal({ type: Number })
    childMinAge: number | undefined;
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

export const fromPointer = createFactory<ParentAudience>([PeopleAudienceMixin, ParentAudienceMixin], { types: [schema.ParentAudience] });
