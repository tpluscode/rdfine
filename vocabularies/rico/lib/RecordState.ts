import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface RecordState<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isOrWasRecordStateOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasRecordStateOfSomeMembersOf: Rico.RecordSet<D> | undefined;
  isRecordStateOf: Rico.Record<D> | Rico.RecordPart<D> | undefined;
}

export function RecordStateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecordState> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordStateClass extends TypeMixin(Resource) implements Partial<RecordState> {
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasRecordStateOfAllMembersOf: Rico.RecordSet | undefined;
    @property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasRecordStateOfSomeMembersOf: Rico.RecordSet | undefined;
    @property.resource()
    isRecordStateOf: Rico.Record | Rico.RecordPart | undefined;
  }
  return RecordStateClass
}

class RecordStateImpl extends RecordStateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordState>) {
    super(arg, init)
    this.types.add(rico.RecordState)
  }

  static readonly __mixins: Mixin[] = [RecordStateMixin, TypeMixin];
}
RecordStateMixin.appliesTo = rico.RecordState
RecordStateMixin.Class = RecordStateImpl

export const fromPointer = createFactory<RecordState>([TypeMixin, RecordStateMixin], { types: [rico.RecordState] });
