import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface RecordSetType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isRecordSetTypeOf: Rico.RecordSet<D> | undefined;
}

export function RecordSetTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RecordSetType> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordSetTypeClass extends TypeMixin(Resource) implements Partial<RecordSetType> {
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isRecordSetTypeOf: Rico.RecordSet | undefined;
  }
  return RecordSetTypeClass
}

class RecordSetTypeImpl extends RecordSetTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordSetType>) {
    super(arg, init)
    this.types.add(rico.RecordSetType)
  }

  static readonly __mixins: Mixin[] = [RecordSetTypeMixin, TypeMixin];
}
RecordSetTypeMixin.appliesTo = rico.RecordSetType
RecordSetTypeMixin.Class = RecordSetTypeImpl

export const fromPointer = createFactory<RecordSetType>([TypeMixin, RecordSetTypeMixin], { types: [rico.RecordSetType] });
