import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import * as Rdf from '@rdfine/rdf';
import { ResourceMixin } from './Resource';

export interface SupportedProperty extends Hydra.Resource, RdfResource {
  description: string | undefined;
  property: Rdf.Property | undefined;
  readable: boolean | undefined;
  required: boolean | undefined;
  supportedOperation: Array<Hydra.Operation>;
  title: string | undefined;
  writeable: boolean | undefined;
}

export function SupportedPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class SupportedPropertyClass extends ResourceMixin(Resource) implements SupportedProperty {
    @property.literal()
    description: string | undefined;
    @property.resource({ as: [Rdf.PropertyMixin] })
    property: Rdf.Property | undefined;
    @property.literal({ type: Boolean })
    readable: boolean | undefined;
    @property.literal({ type: Boolean })
    required: boolean | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @property.literal()
    title: string | undefined;
    @property.literal({ type: Boolean })
    writeable: boolean | undefined;
  }
  return SupportedPropertyClass
}

class SupportedPropertyImpl extends SupportedPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SupportedProperty>) {
    super(arg, init)
    this.types.add(hydra.SupportedProperty)
  }

  static readonly __mixins: Mixin[] = [SupportedPropertyMixin, ResourceMixin];
}
SupportedPropertyMixin.appliesTo = hydra.SupportedProperty
SupportedPropertyMixin.Class = SupportedPropertyImpl
