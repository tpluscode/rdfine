import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import { ResourceMixin } from './Resource';

export interface IriTemplate extends Hydra.Resource, RdfResource {
  mapping: Array<Hydra.IriTemplateMapping>;
  template: string;
}

export function IriTemplateMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class IriTemplateClass extends ResourceMixin(Resource) implements IriTemplate {
    @property.resource({ values: 'array', implicitTypes: [hydra.IriTemplateMapping] })
    mapping!: Array<Hydra.IriTemplateMapping>;
    @property.literal()
    template!: string;
  }
  return IriTemplateClass
}

class IriTemplateImpl extends IriTemplateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IriTemplate>) {
    super(arg, init)
    this.types.add(hydra.IriTemplate)
  }
}
IriTemplateMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.IriTemplate)
IriTemplateMixin.Class = IriTemplateImpl
