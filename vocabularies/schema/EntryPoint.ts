import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface EntryPoint extends Schema.Intangible, RdfResource {
  actionApplication: Schema.SoftwareApplication;
  actionPlatform: string;
  actionPlatformTerm: RDF.NamedNode;
  application: Schema.SoftwareApplication;
  contentType: string;
  encodingType: string;
  httpMethod: string;
  urlTemplate: string;
}

export function EntryPointMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EntryPointClass extends IntangibleMixin(Resource) implements EntryPoint {
    @property.resource()
    actionApplication!: Schema.SoftwareApplication;
    @property.literal()
    actionPlatform!: string;
    @property({ path: schema.actionPlatform })
    actionPlatformTerm!: RDF.NamedNode;
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

  static readonly __mixins: Mixin[] = [EntryPointMixin, IntangibleMixin];
}
EntryPointMixin.appliesTo = schema.EntryPoint
EntryPointMixin.Class = EntryPointImpl
