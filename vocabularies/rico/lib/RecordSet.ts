import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RecordResourceMixin } from './RecordResource.js';

export interface RecordSet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RecordResource<D>, rdfine.RdfResource<D> {
  accrual: RDF.Literal | undefined;
  accrualStatus: RDF.Literal | undefined;
  hasOrHadAllMembersWithCategory: Rico.Type<D> | undefined;
  hasOrHadAllMembersWithContentType: Rico.ContentType<D> | undefined;
  hasOrHadAllMembersWithDocumentaryFormType: Rico.DocumentaryFormType<D> | undefined;
  hasOrHadAllMembersWithLanguage: Rico.Language<D> | undefined;
  hasOrHadAllMembersWithLegalStatus: Rico.LegalStatus<D> | undefined;
  hasOrHadAllMembersWithRecordState: Rico.RecordState<D> | undefined;
  hasOrHadSomeMembersWithCategory: Rico.Type<D> | undefined;
  hasOrHadSomeMembersWithContentType: Rico.ContentType<D> | undefined;
  hasOrHadSomeMemberswithDocumentaryFormType: Rico.DocumentaryFormType<D> | undefined;
  hasOrHadSomeMembersWithLanguage: Rico.Language<D> | undefined;
  hasOrHadSomeMembersWithLegalStatus: Rico.LegalStatus<D> | undefined;
  hasOrHadSomeMembersWithRecordState: Rico.RecordState<D> | undefined;
  hasRecordSetType: Rico.RecordSetType<D> | undefined;
  includesOrIncluded: Rico.Record<D> | Rico.RecordSet<D> | undefined;
  isOrWasIncludedIn: Rico.RecordSet<D> | undefined;
}

export function RecordSetMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RecordSet & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordSetClass extends RecordResourceMixin(Resource) {
    @rdfine.property()
    accrual: RDF.Literal | undefined;
    @rdfine.property()
    accrualStatus: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Type] })
    hasOrHadAllMembersWithCategory: Rico.Type | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ContentType] })
    hasOrHadAllMembersWithContentType: Rico.ContentType | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.DocumentaryFormType] })
    hasOrHadAllMembersWithDocumentaryFormType: Rico.DocumentaryFormType | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Language] })
    hasOrHadAllMembersWithLanguage: Rico.Language | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.LegalStatus] })
    hasOrHadAllMembersWithLegalStatus: Rico.LegalStatus | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordState] })
    hasOrHadAllMembersWithRecordState: Rico.RecordState | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Type] })
    hasOrHadSomeMembersWithCategory: Rico.Type | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ContentType] })
    hasOrHadSomeMembersWithContentType: Rico.ContentType | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.DocumentaryFormType] })
    hasOrHadSomeMemberswithDocumentaryFormType: Rico.DocumentaryFormType | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Language] })
    hasOrHadSomeMembersWithLanguage: Rico.Language | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.LegalStatus] })
    hasOrHadSomeMembersWithLegalStatus: Rico.LegalStatus | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordState] })
    hasOrHadSomeMembersWithRecordState: Rico.RecordState | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSetType] })
    hasRecordSetType: Rico.RecordSetType | undefined;
    @rdfine.property.resource()
    includesOrIncluded: Rico.Record | Rico.RecordSet | undefined;
    @rdfine.property.resource({ as: [RecordSetMixin] })
    isOrWasIncludedIn: Rico.RecordSet | undefined;
  }
  return RecordSetClass as any
}
RecordSetMixin.appliesTo = rico.RecordSet

export const factory = (env: RdfineEnvironment) => createFactory<RecordSet>([RecordResourceMixin, RecordSetMixin], { types: [rico.RecordSet] }, env);
