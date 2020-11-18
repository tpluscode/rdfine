import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface HealthAndBeautyBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function HealthAndBeautyBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HealthAndBeautyBusinessClass extends LocalBusinessMixin(Resource) implements HealthAndBeautyBusiness {
  }
  return HealthAndBeautyBusinessClass
}

class HealthAndBeautyBusinessImpl extends HealthAndBeautyBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HealthAndBeautyBusiness>) {
    super(arg, init)
    this.types.add(schema.HealthAndBeautyBusiness)
  }

  static readonly __mixins: Mixin[] = [HealthAndBeautyBusinessMixin, LocalBusinessMixin];
}
HealthAndBeautyBusinessMixin.appliesTo = schema.HealthAndBeautyBusiness
HealthAndBeautyBusinessMixin.Class = HealthAndBeautyBusinessImpl
