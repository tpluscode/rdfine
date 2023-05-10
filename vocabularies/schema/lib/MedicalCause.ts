import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalCause<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
  causeOf: Schema.MedicalEntity<D> | undefined;
}

export function MedicalCauseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MedicalCause> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalCauseClass extends MedicalEntityMixin(Resource) implements Partial<MedicalCause> {
    @rdfine.property.resource()
    causeOf: Schema.MedicalEntity | undefined;
  }
  return MedicalCauseClass
}

class MedicalCauseImpl extends MedicalCauseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalCause>) {
    super(arg, init)
    this.types.add(schema.MedicalCause)
  }

  static readonly __mixins: Mixin[] = [MedicalCauseMixin, MedicalEntityMixin];
}
MedicalCauseMixin.appliesTo = schema.MedicalCause
MedicalCauseMixin.Class = MedicalCauseImpl

export const fromPointer = createFactory<MedicalCause>([MedicalEntityMixin, MedicalCauseMixin], { types: [schema.MedicalCause] });
