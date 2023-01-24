import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { RecordResourceMixin } from './RecordResource';

export interface Record<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RecordResource<D>, RdfResource<D> {
  hasAuthor: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
  hasContentOfType: Rico.ContentType<D> | undefined;
  hasDocumentaryFormType: Rico.DocumentaryFormType<D> | undefined;
  hasDraft: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  hasOrHadConstituent: Rico.RecordPart<D> | undefined;
  hasOrHadLanguage: Rico.Language<D> | undefined;
  hasOrHadLegalStatus: Rico.LegalStatus<D> | undefined;
  hasOriginal: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  hasRecordState: Rico.RecordState<D> | undefined;
  isDraftOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOriginalOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOrWasIncludedIn: Rico.RecordSet<D> | undefined;
  recordIsSourceOfAuthorshipRelation: Rico.AuthorshipRelation<D> | undefined;
}

export function RecordMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Record> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordClass extends RecordResourceMixin(Resource) implements Partial<Record> {
    @property.resource()
    hasAuthor: Rico.Group | Rico.Person | Rico.Position | undefined;
    @property.resource({ implicitTypes: [rico.ContentType] })
    hasContentOfType: Rico.ContentType | undefined;
    @property.resource({ implicitTypes: [rico.DocumentaryFormType] })
    hasDocumentaryFormType: Rico.DocumentaryFormType | undefined;
    @property.resource()
    hasDraft: Rico.Record | Rico.RecordPart | undefined;
    @property.resource({ implicitTypes: [rico.RecordPart] })
    hasOrHadConstituent: Rico.RecordPart | undefined;
    @property.resource({ implicitTypes: [rico.Language] })
    hasOrHadLanguage: Rico.Language | undefined;
    @property.resource({ implicitTypes: [rico.LegalStatus] })
    hasOrHadLegalStatus: Rico.LegalStatus | undefined;
    @property.resource()
    hasOriginal: Rico.Record | Rico.RecordPart | undefined;
    @property.resource({ implicitTypes: [rico.RecordState] })
    hasRecordState: Rico.RecordState | undefined;
    @property.resource()
    isDraftOf: Rico.Record | Rico.RecordPart | undefined;
    @property.resource()
    isOriginalOf: Rico.Record | Rico.RecordPart | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasIncludedIn: Rico.RecordSet | undefined;
    @property.resource({ implicitTypes: [rico.AuthorshipRelation] })
    recordIsSourceOfAuthorshipRelation: Rico.AuthorshipRelation | undefined;
  }
  return RecordClass
}

class RecordImpl extends RecordMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Record>) {
    super(arg, init)
    this.types.add(rico.Record)
  }

  static readonly __mixins: Mixin[] = [RecordMixin, RecordResourceMixin];
}
RecordMixin.appliesTo = rico.Record
RecordMixin.Class = RecordImpl

export const fromPointer = createFactory<Record>([RecordResourceMixin, RecordMixin], { types: [rico.Record] });
