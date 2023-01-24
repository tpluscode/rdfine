import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ConceptMixin } from './Concept';

export interface Type<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Concept<D>, RdfResource<D> {
  isOrWasCategoryOf: Rico.Thing<D> | undefined;
  isOrWasCategoryOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasCategoryOfSomeMembersOf: Rico.RecordSet<D> | undefined;
  typeIsSourceOfTypeRelation: Rico.TypeRelation<D> | undefined;
}

export function TypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Type> & RdfResourceCore> & Base {
  @namespace(rico)
  class TypeClass extends ConceptMixin(Resource) implements Partial<Type> {
    @property.resource({ implicitTypes: [rico.Thing] })
    isOrWasCategoryOf: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasCategoryOfAllMembersOf: Rico.RecordSet | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasCategoryOfSomeMembersOf: Rico.RecordSet | undefined;
    @property.resource({ implicitTypes: [rico.TypeRelation] })
    typeIsSourceOfTypeRelation: Rico.TypeRelation | undefined;
  }
  return TypeClass
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
