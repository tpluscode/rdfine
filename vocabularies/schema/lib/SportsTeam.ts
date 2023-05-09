import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SportsOrganizationMixin } from './SportsOrganization.js';

export interface SportsTeam<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsOrganization<D>, rdfine.RdfResource<D> {
  athlete: Schema.Person<D> | undefined;
  coach: Schema.Person<D> | undefined;
  gender: string | undefined;
  genderTerm: Schema.GenderType | undefined;
}

export function SportsTeamMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SportsTeam> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SportsTeamClass extends SportsOrganizationMixin(Resource) implements Partial<SportsTeam> {
    @rdfine.property.resource()
    athlete: Schema.Person | undefined;
    @rdfine.property.resource()
    coach: Schema.Person | undefined;
    @rdfine.property.literal()
    gender: string | undefined;
    @rdfine.property({ path: schema.gender })
    genderTerm: Schema.GenderType | undefined;
  }
  return SportsTeamClass
}

class SportsTeamImpl extends SportsTeamMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SportsTeam>) {
    super(arg, init)
    this.types.add(schema.SportsTeam)
  }

  static readonly __mixins: Mixin[] = [SportsTeamMixin, SportsOrganizationMixin];
}
SportsTeamMixin.appliesTo = schema.SportsTeam
SportsTeamMixin.Class = SportsTeamImpl

export const fromPointer = createFactory<SportsTeam>([SportsOrganizationMixin, SportsTeamMixin], { types: [schema.SportsTeam] });
