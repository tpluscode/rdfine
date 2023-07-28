import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface LifestyleModification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
}

export function LifestyleModificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LifestyleModification & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LifestyleModificationClass extends MedicalEntityMixin(Resource) {
  }
  return LifestyleModificationClass as any
}

class LifestyleModificationImpl extends LifestyleModificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LifestyleModification>) {
    super(arg, init)
    this.types.add(schema.LifestyleModification)
  }

  static readonly __mixins: Mixin[] = [LifestyleModificationMixin, MedicalEntityMixin];
}
LifestyleModificationMixin.appliesTo = schema.LifestyleModification
LifestyleModificationMixin.Class = LifestyleModificationImpl

export const fromPointer = createFactory<LifestyleModification>([MedicalEntityMixin, LifestyleModificationMixin], { types: [schema.LifestyleModification] });
