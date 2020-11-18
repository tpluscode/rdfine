import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface LearningResource<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  assesses: string | undefined;
  educationalAlignment: Schema.AlignmentObject<SiblingNode<ID>> | undefined;
  educationalLevel: string | undefined;
  educationalLevelTerm: RDF.NamedNode | undefined;
  educationalUse: string | undefined;
  teaches: string | undefined;
}

export function LearningResourceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LearningResourceClass extends CreativeWorkMixin(Resource) implements LearningResource {
    @property.literal()
    assesses: string | undefined;
    @property.resource()
    educationalAlignment: Schema.AlignmentObject | undefined;
    @property.literal()
    educationalLevel: string | undefined;
    @property({ path: schema.educationalLevel })
    educationalLevelTerm: RDF.NamedNode | undefined;
    @property.literal()
    educationalUse: string | undefined;
    @property.literal()
    teaches: string | undefined;
  }
  return LearningResourceClass
}

class LearningResourceImpl extends LearningResourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LearningResource>) {
    super(arg, init)
    this.types.add(schema.LearningResource)
  }

  static readonly __mixins: Mixin[] = [LearningResourceMixin, CreativeWorkMixin];
}
LearningResourceMixin.appliesTo = schema.LearningResource
LearningResourceMixin.Class = LearningResourceImpl
