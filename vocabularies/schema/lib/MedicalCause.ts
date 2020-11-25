import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalCause<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  causeOf: Schema.MedicalEntity<SiblingNode<ID>> | undefined;
}

export function MedicalCauseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalCauseClass extends MedicalEntityMixin(Resource) implements MedicalCause {
    @property.resource()
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
