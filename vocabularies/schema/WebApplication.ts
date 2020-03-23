import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import SoftwareApplicationMixin from './SoftwareApplication';

export interface WebApplication extends Schema.SoftwareApplication, RdfResource {
  browserRequirements: string;
}

export default function WebApplicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebApplicationClass extends SoftwareApplicationMixin(Resource) implements WebApplication {
    @property.literal()
    browserRequirements!: string;
  }
  return WebApplicationClass
}

class WebApplicationImpl extends WebApplicationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WebApplication)
  }
}
WebApplicationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebApplication)
WebApplicationMixin.Class = WebApplicationImpl
