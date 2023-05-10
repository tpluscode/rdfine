import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface ExtentType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isExtentTypeOf: Rico.Extent<D> | undefined;
}

export function ExtentTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ExtentType> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ExtentTypeClass extends TypeMixin(Resource) implements Partial<ExtentType> {
    @rdfine.property.resource({ implicitTypes: [rico.Extent] })
    isExtentTypeOf: Rico.Extent | undefined;
  }
  return ExtentTypeClass
}

class ExtentTypeImpl extends ExtentTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ExtentType>) {
    super(arg, init)
    this.types.add(rico.ExtentType)
  }

  static readonly __mixins: Mixin[] = [ExtentTypeMixin, TypeMixin];
}
ExtentTypeMixin.appliesTo = rico.ExtentType
ExtentTypeMixin.Class = ExtentTypeImpl

export const fromPointer = createFactory<ExtentType>([TypeMixin, ExtentTypeMixin], { types: [rico.ExtentType] });
