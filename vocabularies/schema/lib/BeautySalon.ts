import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness.js';

export interface BeautySalon<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, rdfine.RdfResource<D> {
}

export function BeautySalonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BeautySalon & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BeautySalonClass extends HealthAndBeautyBusinessMixin(Resource) {
  }
  return BeautySalonClass as any
}

class BeautySalonImpl extends BeautySalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BeautySalon>) {
    super(arg, init)
    this.types.add(schema.BeautySalon)
  }

  static readonly __mixins: Mixin[] = [BeautySalonMixin, HealthAndBeautyBusinessMixin];
}
BeautySalonMixin.appliesTo = schema.BeautySalon
BeautySalonMixin.Class = BeautySalonImpl

export const fromPointer = createFactory<BeautySalon>([HealthAndBeautyBusinessMixin, BeautySalonMixin], { types: [schema.BeautySalon] });
