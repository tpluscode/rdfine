import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface SportsClub extends Schema.SportsActivityLocation, RdfResource {
}

export function SportsClubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsClubClass extends SportsActivityLocationMixin(Resource) implements SportsClub {
  }
  return SportsClubClass
}

class SportsClubImpl extends SportsClubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SportsClub>) {
    super(arg, init)
    this.types.add(schema.SportsClub)
  }

  static readonly __mixins: Mixin[] = [SportsClubMixin, SportsActivityLocationMixin];
}
SportsClubMixin.appliesTo = schema.SportsClub
SportsClubMixin.Class = SportsClubImpl
