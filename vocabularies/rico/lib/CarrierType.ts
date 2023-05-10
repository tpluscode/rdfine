import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface CarrierType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isCarrierTypeOf: Rico.Instantiation<D> | undefined;
}

export function CarrierTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CarrierType> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class CarrierTypeClass extends TypeMixin(Resource) implements Partial<CarrierType> {
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    isCarrierTypeOf: Rico.Instantiation | undefined;
  }
  return CarrierTypeClass
}

class CarrierTypeImpl extends CarrierTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CarrierType>) {
    super(arg, init)
    this.types.add(rico.CarrierType)
  }

  static readonly __mixins: Mixin[] = [CarrierTypeMixin, TypeMixin];
}
CarrierTypeMixin.appliesTo = rico.CarrierType
CarrierTypeMixin.Class = CarrierTypeImpl

export const fromPointer = createFactory<CarrierType>([TypeMixin, CarrierTypeMixin], { types: [rico.CarrierType] });
