import type { Constructor, RdfResource } from '@tpluscode/rdfine'
import type { AnyPointer } from 'clownface'
import type { IriTemplate } from '../IriTemplate'
import { hydra } from '@tpluscode/rdf-ns-builders'
import { TemplateExpander } from '../lib/TemplateExpander'

export interface IriTemplateEx {
  expand(model: AnyPointer | RdfResource): string;
}

declare module '@rdfine/hydra/IriTemplate' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface IriTemplate extends IriTemplateEx {
  }
}

export function IriTemplateExMixin<Base extends Constructor<Omit<IriTemplate, keyof IriTemplateEx>>>(base: Base) {
  class IriTemplateExClass extends base implements IriTemplateEx {
    public expand(model: AnyPointer | RdfResource): string {
      return new TemplateExpander(this).expand(model)
    }
  }

  return IriTemplateExClass
}

IriTemplateExMixin.appliesTo = hydra.IriTemplate
