import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ExtentMixin } from './Extent.js';

export interface CarrierExtent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Extent<D>, rdfine.RdfResource<D> {
}

export function CarrierExtentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CarrierExtent & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class CarrierExtentClass extends ExtentMixin(Resource) {
  }
  return CarrierExtentClass as any
}

class CarrierExtentImpl extends CarrierExtentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CarrierExtent>) {
    super(arg, init)
    this.types.add(rico.CarrierExtent)
  }

  static readonly __mixins: Mixin[] = [CarrierExtentMixin, ExtentMixin];
}
CarrierExtentMixin.appliesTo = rico.CarrierExtent
CarrierExtentMixin.Class = CarrierExtentImpl

export const fromPointer = createFactory<CarrierExtent>([ExtentMixin, CarrierExtentMixin], { types: [rico.CarrierExtent] });
