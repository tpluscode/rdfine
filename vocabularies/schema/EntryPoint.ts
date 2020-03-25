import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface EntryPoint extends Schema.Intangible, RdfResource {
  actionApplication: Schema.SoftwareApplication;
  actionPlatform: rdf.Term;
  actionPlatformLiteral: string;
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
    @property()
    actionPlatform!: rdf.Term;
    @property.literal({ path: schema.actionPlatform })
    actionPlatformLiteral!: string;
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
  constructor(arg: ResourceNode, init?: Initializer<EntryPoint>) {
    super(arg, init)
    this.types.add(schema.EntryPoint)
  }
}
EntryPointMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EntryPoint)
EntryPointMixin.Class = EntryPointImpl
