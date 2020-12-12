import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface LifestyleModification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
}

export function LifestyleModificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LifestyleModification> & RdfResourceCore> & Base {
  @namespace(schema)
  class LifestyleModificationClass extends MedicalEntityMixin(Resource) implements Partial<LifestyleModification> {
  }
  return LifestyleModificationClass
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
