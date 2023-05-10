import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness.js';
import { SportsActivityLocationMixin } from './SportsActivityLocation.js';

export interface HealthClub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, Schema.SportsActivityLocation<D>, rdfine.RdfResource<D> {
}

export function HealthClubMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HealthClub> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HealthClubClass extends SportsActivityLocationMixin(HealthAndBeautyBusinessMixin(Resource)) implements Partial<HealthClub> {
  }
  return HealthClubClass
}

class HealthClubImpl extends HealthClubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HealthClub>) {
    super(arg, init)
    this.types.add(schema.HealthClub)
  }

  static readonly __mixins: Mixin[] = [HealthClubMixin, HealthAndBeautyBusinessMixin, SportsActivityLocationMixin];
}
HealthClubMixin.appliesTo = schema.HealthClub
HealthClubMixin.Class = HealthClubImpl

export const fromPointer = createFactory<HealthClub>([SportsActivityLocationMixin, HealthAndBeautyBusinessMixin, HealthClubMixin], { types: [schema.HealthClub] });
