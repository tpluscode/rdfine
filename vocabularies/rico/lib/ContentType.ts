import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface ContentType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isContentTypeOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOrWasContentTypeOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasContentTypeOfSomeMembersOf: Rico.RecordSet<D> | undefined;
}

export function ContentTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ContentType & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ContentTypeClass extends TypeMixin(Resource) {
    @rdfine.property.resource()
    isContentTypeOf: Rico.Record | Rico.RecordPart | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasContentTypeOfAllMembersOf: Rico.RecordSet | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasContentTypeOfSomeMembersOf: Rico.RecordSet | undefined;
  }
  return ContentTypeClass as any
}

class ContentTypeImpl extends ContentTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ContentType>) {
    super(arg, init)
    this.types.add(rico.ContentType)
  }

  static readonly __mixins: Mixin[] = [ContentTypeMixin, TypeMixin];
}
ContentTypeMixin.appliesTo = rico.ContentType
ContentTypeMixin.Class = ContentTypeImpl

export const fromPointer = createFactory<ContentType>([TypeMixin, ContentTypeMixin], { types: [rico.ContentType] });
