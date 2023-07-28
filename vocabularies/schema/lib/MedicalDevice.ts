import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalDevice<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
  adverseOutcome: Schema.MedicalEntity<D> | undefined;
  contraindication: Schema.MedicalContraindication<D> | undefined;
  contraindicationLiteral: string | undefined;
  postOp: string | undefined;
  preOp: string | undefined;
  procedure: string | undefined;
  seriousAdverseOutcome: Schema.MedicalEntity<D> | undefined;
}

export function MedicalDeviceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalDevice & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalDeviceClass extends MedicalEntityMixin(Resource) {
    @rdfine.property.resource()
    adverseOutcome: Schema.MedicalEntity | undefined;
    @rdfine.property.resource()
    contraindication: Schema.MedicalContraindication | undefined;
    @rdfine.property.literal({ path: schema.contraindication })
    contraindicationLiteral: string | undefined;
    @rdfine.property.literal()
    postOp: string | undefined;
    @rdfine.property.literal()
    preOp: string | undefined;
    @rdfine.property.literal()
    procedure: string | undefined;
    @rdfine.property.resource()
    seriousAdverseOutcome: Schema.MedicalEntity | undefined;
  }
  return MedicalDeviceClass as any
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

export const fromPointer = createFactory<MedicalDevice>([MedicalEntityMixin, MedicalDeviceMixin], { types: [schema.MedicalDevice] });
