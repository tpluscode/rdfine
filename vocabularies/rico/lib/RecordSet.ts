import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RecordResourceMixin } from './RecordResource.js';

export interface RecordSet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RecordResource<D>, RdfResource<D> {
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

export function RecordSetMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecordSet> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordSetClass extends RecordResourceMixin(Resource) implements Partial<RecordSet> {
    @property()
    accrual: RDF.Literal | undefined;
    @property()
    accrualStatus: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Type] })
    hasOrHadAllMembersWithCategory: Rico.Type | undefined;
    @property.resource({ implicitTypes: [rico.ContentType] })
    hasOrHadAllMembersWithContentType: Rico.ContentType | undefined;
    @property.resource({ implicitTypes: [rico.DocumentaryFormType] })
    hasOrHadAllMembersWithDocumentaryFormType: Rico.DocumentaryFormType | undefined;
    @property.resource({ implicitTypes: [rico.Language] })
    hasOrHadAllMembersWithLanguage: Rico.Language | undefined;
    @property.resource({ implicitTypes: [rico.LegalStatus] })
    hasOrHadAllMembersWithLegalStatus: Rico.LegalStatus | undefined;
    @property.resource({ implicitTypes: [rico.RecordState] })
    hasOrHadAllMembersWithRecordState: Rico.RecordState | undefined;
    @property.resource({ implicitTypes: [rico.Type] })
    hasOrHadSomeMembersWithCategory: Rico.Type | undefined;
    @property.resource({ implicitTypes: [rico.ContentType] })
    hasOrHadSomeMembersWithContentType: Rico.ContentType | undefined;
    @property.resource({ implicitTypes: [rico.DocumentaryFormType] })
    hasOrHadSomeMemberswithDocumentaryFormType: Rico.DocumentaryFormType | undefined;
    @property.resource({ implicitTypes: [rico.Language] })
    hasOrHadSomeMembersWithLanguage: Rico.Language | undefined;
    @property.resource({ implicitTypes: [rico.LegalStatus] })
    hasOrHadSomeMembersWithLegalStatus: Rico.LegalStatus | undefined;
    @property.resource({ implicitTypes: [rico.RecordState] })
    hasOrHadSomeMembersWithRecordState: Rico.RecordState | undefined;
    @property.resource({ implicitTypes: [rico.RecordSetType] })
    hasRecordSetType: Rico.RecordSetType | undefined;
    @property.resource()
    includesOrIncluded: Rico.Record | Rico.RecordSet | undefined;
    @property.resource({ as: [RecordSetMixin] })
    isOrWasIncludedIn: Rico.RecordSet | undefined;
  }
  return RecordSetClass
}

class RecordSetImpl extends RecordSetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordSet>) {
    super(arg, init)
    this.types.add(rico.RecordSet)
  }

  static readonly __mixins: Mixin[] = [RecordSetMixin, RecordResourceMixin];
}
RecordSetMixin.appliesTo = rico.RecordSet
RecordSetMixin.Class = RecordSetImpl

export const fromPointer = createFactory<RecordSet>([RecordResourceMixin, RecordSetMixin], { types: [rico.RecordSet] });
