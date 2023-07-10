import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface EntryPoint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  actionApplication: Schema.SoftwareApplication<D> | undefined;
  actionPlatform: string | undefined;
  actionPlatformTerm: RDF.NamedNode | Schema.DigitalPlatformEnumeration | undefined;
  application: Schema.SoftwareApplication<D> | undefined;
  contentType: string | undefined;
  encodingType: string | undefined;
  httpMethod: string | undefined;
  urlTemplate: string | undefined;
}

export function EntryPointMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<EntryPoint & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EntryPointClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource()
    actionApplication: Schema.SoftwareApplication | undefined;
    @rdfine.property.literal()
    actionPlatform: string | undefined;
    @rdfine.property({ path: schema.actionPlatform })
    actionPlatformTerm: RDF.NamedNode | Schema.DigitalPlatformEnumeration | undefined;
    @rdfine.property.resource()
    application: Schema.SoftwareApplication | undefined;
    @rdfine.property.literal()
    contentType: string | undefined;
    @rdfine.property.literal()
    encodingType: string | undefined;
    @rdfine.property.literal()
    httpMethod: string | undefined;
    @rdfine.property.literal()
    urlTemplate: string | undefined;
  }
  return EntryPointClass as any
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

export const fromPointer = createFactory<EntryPoint>([IntangibleMixin, EntryPointMixin], { types: [schema.EntryPoint] });
