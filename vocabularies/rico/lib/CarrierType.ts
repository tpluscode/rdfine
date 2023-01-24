import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { TypeMixin } from './Type';

export interface CarrierType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isCarrierTypeOf: Rico.Instantiation<D> | undefined;
}

export function CarrierTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CarrierType> & RdfResourceCore> & Base {
  @namespace(rico)
  class CarrierTypeClass extends TypeMixin(Resource) implements Partial<CarrierType> {
    @property.resource({ implicitTypes: [rico.Instantiation] })
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
