import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface ContentType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isContentTypeOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOrWasContentTypeOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasContentTypeOfSomeMembersOf: Rico.RecordSet<D> | undefined;
}

export function ContentTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ContentType> & RdfResourceCore> & Base {
  @namespace(rico)
  class ContentTypeClass extends TypeMixin(Resource) implements Partial<ContentType> {
    @property.resource()
    isContentTypeOf: Rico.Record | Rico.RecordPart | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasContentTypeOfAllMembersOf: Rico.RecordSet | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasContentTypeOfSomeMembersOf: Rico.RecordSet | undefined;
  }
  return ContentTypeClass
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
