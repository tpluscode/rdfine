import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface ProductionTechniqueType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isProductionTechniqueTypeOf: Rico.Instantiation<D> | undefined;
}

export function ProductionTechniqueTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ProductionTechniqueType> & RdfResourceCore> & Base {
  @namespace(rico)
  class ProductionTechniqueTypeClass extends TypeMixin(Resource) implements Partial<ProductionTechniqueType> {
    @property.resource({ implicitTypes: [rico.Instantiation] })
    isProductionTechniqueTypeOf: Rico.Instantiation | undefined;
  }
  return ProductionTechniqueTypeClass
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
