import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SportsOrganizationMixin } from './SportsOrganization';

export interface SportsTeam<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsOrganization<D>, RdfResource<D> {
  athlete: Schema.Person<D> | undefined;
  coach: Schema.Person<D> | undefined;
  gender: string | undefined;
  genderTerm: Schema.GenderType | undefined;
}

export function SportsTeamMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SportsTeam> & RdfResourceCore> & Base {
  @namespace(schema)
  class SportsTeamClass extends SportsOrganizationMixin(Resource) implements Partial<SportsTeam> {
    @property.resource()
    athlete: Schema.Person | undefined;
    @property.resource()
    coach: Schema.Person | undefined;
    @property.literal()
    gender: string | undefined;
    @property({ path: schema.gender })
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
