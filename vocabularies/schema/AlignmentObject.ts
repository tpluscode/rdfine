import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface AlignmentObject extends Schema.Intangible, RdfResource {
  alignmentType: string;
  educationalFramework: string;
  targetDescription: string;
  targetName: string;
  targetUrl: string;
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
    @property.literal()
    targetUrl!: string;
  }
  return AlignmentObjectClass
}

class AlignmentObjectImpl extends AlignmentObjectMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AlignmentObject)
  }
}
AlignmentObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AlignmentObject)
AlignmentObjectMixin.Class = AlignmentObjectImpl
