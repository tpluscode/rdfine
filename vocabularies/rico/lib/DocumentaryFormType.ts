import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { TypeMixin } from './Type';

export interface DocumentaryFormType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isDocumentaryFormTypeOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOrWasDocumentaryFormTypeOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasDocumentaryFormTypeOfSomeMembersOf: Rico.RecordSet<D> | undefined;
}

export function DocumentaryFormTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DocumentaryFormType> & RdfResourceCore> & Base {
  @namespace(rico)
  class DocumentaryFormTypeClass extends TypeMixin(Resource) implements Partial<DocumentaryFormType> {
    @property.resource()
    isDocumentaryFormTypeOf: Rico.Record | Rico.RecordPart | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasDocumentaryFormTypeOfAllMembersOf: Rico.RecordSet | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasDocumentaryFormTypeOfSomeMembersOf: Rico.RecordSet | undefined;
  }
  return DocumentaryFormTypeClass
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
