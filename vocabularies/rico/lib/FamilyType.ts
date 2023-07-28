import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface FamilyType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isFamilyTypeOf: Rico.Family<D> | undefined;
}

export function FamilyTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FamilyType & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class FamilyTypeClass extends TypeMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Family] })
    isFamilyTypeOf: Rico.Family | undefined;
  }
  return FamilyTypeClass as any
}

class FamilyTypeImpl extends FamilyTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FamilyType>) {
    super(arg, init)
    this.types.add(rico.FamilyType)
  }

  static readonly __mixins: Mixin[] = [FamilyTypeMixin, TypeMixin];
}
FamilyTypeMixin.appliesTo = rico.FamilyType
FamilyTypeMixin.Class = FamilyTypeImpl

export const fromPointer = createFactory<FamilyType>([TypeMixin, FamilyTypeMixin], { types: [rico.FamilyType] });
