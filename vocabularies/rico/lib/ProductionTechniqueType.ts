import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface ProductionTechniqueType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isProductionTechniqueTypeOf: Rico.Instantiation<D> | undefined;
}

export function ProductionTechniqueTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ProductionTechniqueType & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ProductionTechniqueTypeClass extends TypeMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    isProductionTechniqueTypeOf: Rico.Instantiation | undefined;
  }
  return ProductionTechniqueTypeClass as any
}

class ProductionTechniqueTypeImpl extends ProductionTechniqueTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProductionTechniqueType>) {
    super(arg, init)
    this.types.add(rico.ProductionTechniqueType)
  }

  static readonly __mixins: Mixin[] = [ProductionTechniqueTypeMixin, TypeMixin];
}
ProductionTechniqueTypeMixin.appliesTo = rico.ProductionTechniqueType
ProductionTechniqueTypeMixin.Class = ProductionTechniqueTypeImpl

export const fromPointer = createFactory<ProductionTechniqueType>([TypeMixin, ProductionTechniqueTypeMixin], { types: [rico.ProductionTechniqueType] });
