import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { RecordResourceMixin } from './RecordResource';

export interface RecordPart<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RecordResource<D>, RdfResource<D> {
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

export function RecordPartMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecordPart> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordPartClass extends RecordResourceMixin(Resource) implements Partial<RecordPart> {
    @property.resource({ implicitTypes: [rico.ContentType] })
    hasContentOfType: Rico.ContentType | undefined;
    @property.resource({ implicitTypes: [rico.DocumentaryFormType] })
    hasDocumentaryFormType: Rico.DocumentaryFormType | undefined;
    @property.resource()
    hasDraft: Rico.Record | Rico.RecordPart | undefined;
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
    @property.resource({ implicitTypes: [rico.Record] })
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
