import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness.js';

export interface NightClub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, rdfine.RdfResource<D> {
}

export function NightClubMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<NightClub & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class NightClubClass extends EntertainmentBusinessMixin(Resource) {
  }
  return NightClubClass as any
}

class NightClubImpl extends NightClubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NightClub>) {
    super(arg, init)
    this.types.add(schema.NightClub)
  }

  static readonly __mixins: Mixin[] = [NightClubMixin, EntertainmentBusinessMixin];
}
NightClubMixin.appliesTo = schema.NightClub
NightClubMixin.Class = NightClubImpl

export const fromPointer = createFactory<NightClub>([EntertainmentBusinessMixin, NightClubMixin], { types: [schema.NightClub] });
