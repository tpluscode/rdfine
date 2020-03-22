import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface EntryPoint extends Schema.Intangible, RdfResource {
  actionApplication: Schema.SoftwareApplication;
  actionPlatform: string | string;
  application: Schema.SoftwareApplication;
  contentType: string;
  encodingType: string;
  httpMethod: string;
  urlTemplate: string;
}

export default function EntryPointMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EntryPointClass extends IntangibleMixin(Resource) implements EntryPoint {
    @property.resource()
    actionApplication!: Schema.SoftwareApplication;
    @property.literal()
    actionPlatform!: string | string;
    @property.resource()
    application!: Schema.SoftwareApplication;
    @property.literal()
    contentType!: string;
    @property.literal()
    encodingType!: string;
    @property.literal()
    httpMethod!: string;
    @property.literal()
    urlTemplate!: string;
  }
  return EntryPointClass
}

class EntryPointImpl extends EntryPointMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EntryPoint)
  }
}
EntryPointMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EntryPoint)
EntryPointMixin.Class = EntryPointImpl
