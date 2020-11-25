import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalIntangibleMixin } from './MedicalIntangible';

export interface DDxElement<ID extends ResourceNode = ResourceNode> extends Schema.MedicalIntangible<ID>, RdfResource<ID> {
  diagnosis: Schema.MedicalCondition<SiblingNode<ID>> | undefined;
  distinguishingSign: Schema.MedicalSignOrSymptom<SiblingNode<ID>> | undefined;
}

export function DDxElementMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DDxElementClass extends MedicalIntangibleMixin(Resource) implements DDxElement {
    @property.resource()
    diagnosis: Schema.MedicalCondition | undefined;
    @property.resource()
    distinguishingSign: Schema.MedicalSignOrSymptom | undefined;
  }
  return DDxElementClass
}

class DDxElementImpl extends DDxElementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DDxElement>) {
    super(arg, init)
    this.types.add(schema.DDxElement)
  }

  static readonly __mixins: Mixin[] = [DDxElementMixin, MedicalIntangibleMixin];
}
DDxElementMixin.appliesTo = schema.DDxElement
DDxElementMixin.Class = DDxElementImpl
