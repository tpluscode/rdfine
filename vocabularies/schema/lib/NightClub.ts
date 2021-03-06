import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface NightClub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, RdfResource<D> {
}

export function NightClubMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NightClub> & RdfResourceCore> & Base {
  @namespace(schema)
  class NightClubClass extends EntertainmentBusinessMixin(Resource) implements Partial<NightClub> {
  }
  return NightClubClass
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
