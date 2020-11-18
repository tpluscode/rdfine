import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface MedicalWebPage<ID extends ResourceNode = ResourceNode> extends Schema.WebPage<ID>, RdfResource<ID> {
  aspect: string | undefined;
  medicalAudience: Schema.MedicalAudience<SiblingNode<ID>> | undefined;
}

export function MedicalWebPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalWebPageClass extends WebPageMixin(Resource) implements MedicalWebPage {
    @property.literal()
    aspect: string | undefined;
    @property.resource()
    medicalAudience: Schema.MedicalAudience | undefined;
  }
  return MedicalWebPageClass
}

class MedicalWebPageImpl extends MedicalWebPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalWebPage>) {
    super(arg, init)
    this.types.add(schema.MedicalWebPage)
  }

  static readonly __mixins: Mixin[] = [MedicalWebPageMixin, WebPageMixin];
}
MedicalWebPageMixin.appliesTo = schema.MedicalWebPage
MedicalWebPageMixin.Class = MedicalWebPageImpl
