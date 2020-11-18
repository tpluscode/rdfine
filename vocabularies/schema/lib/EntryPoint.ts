import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface EntryPoint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  actionApplication: Schema.SoftwareApplication<D> | undefined;
  actionPlatform: string | undefined;
  actionPlatformTerm: RDF.NamedNode | undefined;
  application: Schema.SoftwareApplication<D> | undefined;
  contentType: string | undefined;
  encodingType: string | undefined;
  httpMethod: string | undefined;
  urlTemplate: string | undefined;
}

export function EntryPointMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EntryPointClass extends IntangibleMixin(Resource) implements EntryPoint {
    @property.resource()
    actionApplication: Schema.SoftwareApplication | undefined;
    @property.literal()
    actionPlatform: string | undefined;
    @property({ path: schema.actionPlatform })
    actionPlatformTerm: RDF.NamedNode | undefined;
    @property.resource()
    application: Schema.SoftwareApplication | undefined;
    @property.literal()
    contentType: string | undefined;
    @property.literal()
    encodingType: string | undefined;
    @property.literal()
    httpMethod: string | undefined;
    @property.literal()
    urlTemplate: string | undefined;
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
