import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface AlignmentObject extends Schema.Intangible, RdfResource {
  alignmentType: string;
  educationalFramework: string;
  targetDescription: string;
  targetName: string;
  targetUrl: rdf.NamedNode;
}

export default function AlignmentObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AlignmentObjectClass extends IntangibleMixin(Resource) implements AlignmentObject {
    @property.literal()
    alignmentType!: string;
    @property.literal()
    educationalFramework!: string;
    @property.literal()
    targetDescription!: string;
    @property.literal()
    targetName!: string;
    @property()
    targetUrl!: rdf.NamedNode;
  }
  return AlignmentObjectClass
}

class AlignmentObjectImpl extends AlignmentObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AlignmentObject>) {
    super(arg, init)
    this.types.add(schema.AlignmentObject)
  }
}
AlignmentObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AlignmentObject)
AlignmentObjectMixin.Class = AlignmentObjectImpl
