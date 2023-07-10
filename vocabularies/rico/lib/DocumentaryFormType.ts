import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface DocumentaryFormType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isDocumentaryFormTypeOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOrWasDocumentaryFormTypeOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasDocumentaryFormTypeOfSomeMembersOf: Rico.RecordSet<D> | undefined;
}

export function DocumentaryFormTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DocumentaryFormType & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class DocumentaryFormTypeClass extends TypeMixin(Resource) {
    @rdfine.property.resource()
    isDocumentaryFormTypeOf: Rico.Record | Rico.RecordPart | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasDocumentaryFormTypeOfAllMembersOf: Rico.RecordSet | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasDocumentaryFormTypeOfSomeMembersOf: Rico.RecordSet | undefined;
  }
  return DocumentaryFormTypeClass as any
}

class DocumentaryFormTypeImpl extends DocumentaryFormTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DocumentaryFormType>) {
    super(arg, init)
    this.types.add(rico.DocumentaryFormType)
  }

  static readonly __mixins: Mixin[] = [DocumentaryFormTypeMixin, TypeMixin];
}
DocumentaryFormTypeMixin.appliesTo = rico.DocumentaryFormType
DocumentaryFormTypeMixin.Class = DocumentaryFormTypeImpl

export const fromPointer = createFactory<DocumentaryFormType>([TypeMixin, DocumentaryFormTypeMixin], { types: [rico.DocumentaryFormType] });
