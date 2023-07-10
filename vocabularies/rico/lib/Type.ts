import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ConceptMixin } from './Concept.js';

export interface Type<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Concept<D>, rdfine.RdfResource<D> {
  isOrWasCategoryOf: Rico.Thing<D> | undefined;
  isOrWasCategoryOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasCategoryOfSomeMembersOf: Rico.RecordSet<D> | undefined;
  typeIsSourceOfTypeRelation: Rico.TypeRelation<D> | undefined;
}

export function TypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Type & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class TypeClass extends ConceptMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isOrWasCategoryOf: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasCategoryOfAllMembersOf: Rico.RecordSet | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasCategoryOfSomeMembersOf: Rico.RecordSet | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.TypeRelation] })
    typeIsSourceOfTypeRelation: Rico.TypeRelation | undefined;
  }
  return TypeClass as any
}

class TypeImpl extends TypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Type>) {
    super(arg, init)
    this.types.add(rico.Type)
  }

  static readonly __mixins: Mixin[] = [TypeMixin, ConceptMixin];
}
TypeMixin.appliesTo = rico.Type
TypeMixin.Class = TypeImpl

export const fromPointer = createFactory<Type>([ConceptMixin, TypeMixin], { types: [rico.Type] });
