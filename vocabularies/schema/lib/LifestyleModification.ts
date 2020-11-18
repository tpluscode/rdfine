import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface LifestyleModification<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
}

export function LifestyleModificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LifestyleModificationClass extends MedicalEntityMixin(Resource) implements LifestyleModification {
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
