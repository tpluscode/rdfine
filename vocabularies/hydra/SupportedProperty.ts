import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';
import { ResourceMixin } from './Resource';

export interface SupportedProperty extends Hydra.Resource, RdfResource {
  description: string;
  property: Rdf.Property;
  readable: boolean;
  required: boolean;
  title: string;
  writeable: boolean;
}

export function SupportedPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class SupportedPropertyClass extends ResourceMixin(Resource) implements SupportedProperty {
    @property.literal()
    description!: string;
    @property.resource({ as: [RdfPropertyMixin] })
    property!: Rdf.Property;
    @property.literal({ type: Boolean })
    readable!: boolean;
    @property.literal({ type: Boolean })
    required!: boolean;
    @property.literal()
    title!: string;
    @property.literal({ type: Boolean })
    writeable!: boolean;
  }
  return SupportedPropertyClass
}

class SupportedPropertyImpl extends SupportedPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SupportedProperty>) {
    super(arg, init)
    this.types.add(hydra.SupportedProperty)
  }
}
SupportedPropertyMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.SupportedProperty)
SupportedPropertyMixin.Class = SupportedPropertyImpl
