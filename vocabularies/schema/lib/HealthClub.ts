import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface HealthClub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function HealthClubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HealthClubClass extends SportsActivityLocationMixin(HealthAndBeautyBusinessMixin(Resource)) implements HealthClub {
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
