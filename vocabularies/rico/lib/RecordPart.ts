import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RecordResourceMixin } from './RecordResource.js';

export interface RecordPart<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RecordResource<D>, rdfine.RdfResource<D> {
  hasContentOfType: Rico.ContentType<D> | undefined;
  hasDocumentaryFormType: Rico.DocumentaryFormType<D> | undefined;
  hasDraft: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  hasOrHadLanguage: Rico.Language<D> | undefined;
  hasOrHadLegalStatus: Rico.LegalStatus<D> | undefined;
  hasOriginal: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  hasRecordState: Rico.RecordState<D> | undefined;
  isDraftOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOriginalOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOrWasConstituentOf: Rico.Record<D> | undefined;
}

export function RecordPartMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RecordPart> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordPartClass extends RecordResourceMixin(Resource) implements Partial<RecordPart> {
    @rdfine.property.resource({ implicitTypes: [rico.ContentType] })
    hasContentOfType: Rico.ContentType | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.DocumentaryFormType] })
    hasDocumentaryFormType: Rico.DocumentaryFormType | undefined;
    @rdfine.property.resource()
    hasDraft: Rico.Record | Rico.RecordPart | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Language] })
    hasOrHadLanguage: Rico.Language | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.LegalStatus] })
    hasOrHadLegalStatus: Rico.LegalStatus | undefined;
    @rdfine.property.resource()
    hasOriginal: Rico.Record | Rico.RecordPart | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordState] })
    hasRecordState: Rico.RecordState | undefined;
    @rdfine.property.resource()
    isDraftOf: Rico.Record | Rico.RecordPart | undefined;
    @rdfine.property.resource()
    isOriginalOf: Rico.Record | Rico.RecordPart | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Record] })
    isOrWasConstituentOf: Rico.Record | undefined;
  }
  return RecordPartClass
}

class RecordPartImpl extends RecordPartMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordPart>) {
    super(arg, init)
    this.types.add(rico.RecordPart)
  }

  static readonly __mixins: Mixin[] = [RecordPartMixin, RecordResourceMixin];
}
RecordPartMixin.appliesTo = rico.RecordPart
RecordPartMixin.Class = RecordPartImpl

export const fromPointer = createFactory<RecordPart>([RecordResourceMixin, RecordPartMixin], { types: [rico.RecordPart] });
