import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalDevice<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  adverseOutcome: Schema.MedicalEntity<SiblingNode<ID>> | undefined;
  contraindication: Schema.MedicalContraindication<SiblingNode<ID>> | undefined;
  contraindicationLiteral: string | undefined;
  postOp: string | undefined;
  preOp: string | undefined;
  procedure: string | undefined;
  seriousAdverseOutcome: Schema.MedicalEntity<SiblingNode<ID>> | undefined;
}

export function MedicalDeviceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalDeviceClass extends MedicalEntityMixin(Resource) implements MedicalDevice {
    @property.resource()
    adverseOutcome: Schema.MedicalEntity | undefined;
    @property.resource()
    contraindication: Schema.MedicalContraindication | undefined;
    @property.literal({ path: schema.contraindication })
    contraindicationLiteral: string | undefined;
    @property.literal()
    postOp: string | undefined;
    @property.literal()
    preOp: string | undefined;
    @property.literal()
    procedure: string | undefined;
    @property.resource()
    seriousAdverseOutcome: Schema.MedicalEntity | undefined;
  }
  return MedicalDeviceClass
}

class MedicalDeviceImpl extends MedicalDeviceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalDevice>) {
    super(arg, init)
    this.types.add(schema.MedicalDevice)
  }

  static readonly __mixins: Mixin[] = [MedicalDeviceMixin, MedicalEntityMixin];
}
MedicalDeviceMixin.appliesTo = schema.MedicalDevice
MedicalDeviceMixin.Class = MedicalDeviceImpl
