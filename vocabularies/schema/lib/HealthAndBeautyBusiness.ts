import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface HealthAndBeautyBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function HealthAndBeautyBusinessMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HealthAndBeautyBusiness> & RdfResourceCore> & Base {
  @namespace(schema)
  class HealthAndBeautyBusinessClass extends LocalBusinessMixin(Resource) implements Partial<HealthAndBeautyBusiness> {
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

export const fromPointer = createFactory<HealthAndBeautyBusiness>([LocalBusinessMixin, HealthAndBeautyBusinessMixin], { types: [schema.HealthAndBeautyBusiness] });
