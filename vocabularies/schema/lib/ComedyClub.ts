import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness.js';

export interface ComedyClub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, rdfine.RdfResource<D> {
}

export function ComedyClubMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ComedyClub> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ComedyClubClass extends EntertainmentBusinessMixin(Resource) implements Partial<ComedyClub> {
  }
  return ComedyClubClass
}

class ComedyClubImpl extends ComedyClubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComedyClub>) {
    super(arg, init)
    this.types.add(schema.ComedyClub)
  }

  static readonly __mixins: Mixin[] = [ComedyClubMixin, EntertainmentBusinessMixin];
}
ComedyClubMixin.appliesTo = schema.ComedyClub
ComedyClubMixin.Class = ComedyClubImpl

export const fromPointer = createFactory<ComedyClub>([EntertainmentBusinessMixin, ComedyClubMixin], { types: [schema.ComedyClub] });
