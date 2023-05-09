import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface LegalStatus<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isOrWasLegalStatusOf: Rico.Agent<D> | Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOrWasLegalStatusOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasLegalStatusOfSomeMembersOf: Rico.RecordSet<D> | undefined;
}

export function LegalStatusMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LegalStatus> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class LegalStatusClass extends TypeMixin(Resource) implements Partial<LegalStatus> {
    @rdfine.property.resource()
    isOrWasLegalStatusOf: Rico.Agent | Rico.Record | Rico.RecordPart | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasLegalStatusOfAllMembersOf: Rico.RecordSet | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasLegalStatusOfSomeMembersOf: Rico.RecordSet | undefined;
  }
  return LegalStatusClass
}

class LegalStatusImpl extends LegalStatusMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LegalStatus>) {
    super(arg, init)
    this.types.add(rico.LegalStatus)
  }

  static readonly __mixins: Mixin[] = [LegalStatusMixin, TypeMixin];
}
LegalStatusMixin.appliesTo = rico.LegalStatus
LegalStatusMixin.Class = LegalStatusImpl

export const fromPointer = createFactory<LegalStatus>([TypeMixin, LegalStatusMixin], { types: [rico.LegalStatus] });
