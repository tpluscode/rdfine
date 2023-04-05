import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalDevice<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  adverseOutcome: Schema.MedicalEntity<D> | undefined;
  contraindication: Schema.MedicalContraindication<D> | undefined;
  contraindicationLiteral: string | undefined;
  postOp: string | undefined;
  preOp: string | undefined;
  procedure: string | undefined;
  seriousAdverseOutcome: Schema.MedicalEntity<D> | undefined;
}

export function MedicalDeviceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalDevice> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalDeviceClass extends MedicalEntityMixin(Resource) implements Partial<MedicalDevice> {
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

export const fromPointer = createFactory<MedicalDevice>([MedicalEntityMixin, MedicalDeviceMixin], { types: [schema.MedicalDevice] });
