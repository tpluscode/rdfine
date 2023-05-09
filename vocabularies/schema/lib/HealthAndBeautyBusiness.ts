import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface HealthAndBeautyBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function HealthAndBeautyBusinessMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HealthAndBeautyBusiness> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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
