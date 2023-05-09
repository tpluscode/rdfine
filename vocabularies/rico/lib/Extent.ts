import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Extent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
  hasExtentType: Rico.ExtentType<D> | undefined;
  hasUnitOfMeasurement: Rico.UnitOfMeasurement<D> | undefined;
  isExtentOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  quantity: number | undefined;
  textualValue: RDF.Literal | undefined;
  unitOfMeasurement: RDF.Literal | undefined;
}

export function ExtentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Extent> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ExtentClass extends ThingMixin(Resource) implements Partial<Extent> {
    @rdfine.property.resource({ implicitTypes: [rico.ExtentType] })
    hasExtentType: Rico.ExtentType | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.UnitOfMeasurement] })
    hasUnitOfMeasurement: Rico.UnitOfMeasurement | undefined;
    @rdfine.property.resource()
    isExtentOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.literal({ type: Number })
    quantity: number | undefined;
    @rdfine.property()
    textualValue: RDF.Literal | undefined;
    @rdfine.property()
    unitOfMeasurement: RDF.Literal | undefined;
  }
  return ExtentClass
}

class ExtentImpl extends ExtentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Extent>) {
    super(arg, init)
    this.types.add(rico.Extent)
  }

  static readonly __mixins: Mixin[] = [ExtentMixin, ThingMixin];
}
ExtentMixin.appliesTo = rico.Extent
ExtentMixin.Class = ExtentImpl

export const fromPointer = createFactory<Extent>([ThingMixin, ExtentMixin], { types: [rico.Extent] });
