import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SportsActivityLocationMixin } from './SportsActivityLocation.js';

export interface SportsClub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, rdfine.RdfResource<D> {
}

export function SportsClubMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SportsClub & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SportsClubClass extends SportsActivityLocationMixin(Resource) {
  }
  return SportsClubClass as any
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

export const fromPointer = createFactory<SportsClub>([SportsActivityLocationMixin, SportsClubMixin], { types: [schema.SportsClub] });
